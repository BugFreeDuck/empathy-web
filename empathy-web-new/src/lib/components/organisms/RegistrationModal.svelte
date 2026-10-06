<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';
	import Button from '$atoms/Button.svelte';
	import RegistrationChoiceField from '$molecules/RegistrationChoiceField.svelte';
	import RegistrationTextField from '$molecules/RegistrationTextField.svelte';
	import {
		SOURCE_OTHER,
		emptyRegistrationForm,
		validateRegistration,
		validateRegistrationStep,
		type RegistrationFieldErrors,
		type RegistrationFormValues,
		type RegistrationTextField as TextFieldConfig
	} from '$data/registration';
	import { i18n } from '$i18n';
	import {
		buildRegistrationFields,
		fieldsForStep,
		registrationSteps,
		type RegistrationStepId
	} from '$i18n/registrationFields';
	import { registrationUI } from '$lib/stores/registration.svelte';
	import { reportLeadConversion } from '$lib/utils/gtag';
	import { submitRegistration } from '$lib/utils/registration';

	type Status = 'idle' | 'submitting' | 'success' | 'error';

	/** Steps that advance as soon as a radio option is chosen. */
	const AUTO_ADVANCE_STEPS = new Set<RegistrationStepId>(['group', 'experience', 'source']);

	const STEP_MS = 360;

	/** New step enters from the right (forward) or left (back). */
	function slideIn(
		_node: Element,
		{ direction = 1 as 1 | -1, duration = STEP_MS } = {}
	): TransitionConfig {
		return {
			duration,
			easing: cubicInOut,
			css: (t) => {
				const u = 1 - t;
				return `transform: translate3d(${direction * 100 * u}%, 0, 0);`;
			}
		};
	}

	/** Old step exits to the left (forward) or right (back) — same duration = push. */
	function slideOut(
		_node: Element,
		{ direction = 1 as 1 | -1, duration = STEP_MS } = {}
	): TransitionConfig {
		return {
			duration,
			easing: cubicInOut,
			css: (t) => {
				const u = 1 - t;
				return `transform: translate3d(${-direction * 100 * u}%, 0, 0);`;
			}
		};
	}

	let status = $state<Status>('idle');
	let stepIndex = $state(0);
	/** 1 = forward, -1 = back — drives step enter/exit direction. */
	let stepDirection = $state<1 | -1>(1);
	let formEl = $state<HTMLFormElement | null>(null);
	let dialogEl = $state<HTMLDialogElement | null>(null);
	let scrollEl = $state<HTMLDivElement | null>(null);
	let values = $state<RegistrationFormValues>(emptyRegistrationForm());
	let fieldErrors = $state<RegistrationFieldErrors>({});
	let submitError = $state(false);
	let autoAdvanceTimer: ReturnType<typeof setTimeout> | null = null;

	const copy = $derived(i18n.m.registration);
	const fields = $derived(buildRegistrationFields(copy, i18n.m.schedule.dayNames));
	const stepCount = registrationSteps.length;
	const step = $derived(registrationSteps[stepIndex]!);
	const stepFields = $derived(fieldsForStep(fields, step));
	const isLastStep = $derived(stepIndex === stepCount - 1);
	const stepLabel = $derived(copy.steps[step.id]);
	const stepProgress = $derived(
		copy.stepOf.replace('{current}', String(stepIndex + 1)).replace('{total}', String(stepCount))
	);
	const reduceMotion = $derived(
		typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);

	$effect(() => {
		const dialog = dialogEl;
		if (!dialog) return;

		if (registrationUI.open) {
			if (!dialog.open) dialog.showModal();
			document.body.style.overflow = 'hidden';
		} else if (dialog.open) {
			dialog.close();
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	function clearAutoAdvance() {
		if (autoAdvanceTimer != null) {
			clearTimeout(autoAdvanceTimer);
			autoAdvanceTimer = null;
		}
	}

	function setValue<K extends keyof RegistrationFormValues>(
		key: K,
		value: RegistrationFormValues[K]
	) {
		values[key] = value;
		if (fieldErrors[key]) {
			const { [key]: _removed, ...rest } = fieldErrors;
			fieldErrors = rest;
		}
		if (key === 'source' && fieldErrors.sourceOther) {
			const { sourceOther: _removed, ...rest } = fieldErrors;
			fieldErrors = rest;
		}
		submitError = false;
		if (status === 'error') status = 'idle';
	}

	function resetForm() {
		clearAutoAdvance();
		values = emptyRegistrationForm();
		fieldErrors = {};
		submitError = false;
		status = 'idle';
		stepIndex = 0;
		stepDirection = 1;
		formEl?.reset();
	}

	function close(event?: Event) {
		event?.stopPropagation();
		clearAutoAdvance();
		registrationUI.hide();
		dialogEl?.close();
		document.body.style.overflow = '';

		if (
			status === 'success' ||
			status === 'error' ||
			Object.keys(fieldErrors).length ||
			stepIndex > 0
		) {
			window.setTimeout(resetForm, 280);
		}
	}

	function onDialogClose() {
		if (registrationUI.open) registrationUI.hide();
		document.body.style.overflow = '';
	}

	function onBackdropClick(event: MouseEvent) {
		if (event.target === dialogEl) close(event);
	}

	function scrollStepTop() {
		scrollEl?.scrollTo({ top: 0, behavior: 'auto' });
	}

	function scrollToFirstError(errors: RegistrationFieldErrors) {
		const firstKey = Object.keys(errors)[0];
		if (!firstKey || !scrollEl) return;

		const byName = scrollEl.querySelector(`[name="${firstKey}"]`);
		const byError = scrollEl.querySelector(`#${firstKey}-error`);
		const target = byError ?? byName;
		target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
	}

	function goBack() {
		if (stepIndex <= 0 || status === 'submitting') return;
		clearAutoAdvance();
		fieldErrors = {};
		submitError = false;
		stepDirection = -1;
		stepIndex -= 1;
		queueMicrotask(scrollStepTop);
	}

	function goNext() {
		if (status === 'submitting') return;

		const errors = validateRegistrationStep(step.keys, values, copy.errors);
		fieldErrors = errors;
		submitError = false;

		if (Object.keys(errors).length) {
			queueMicrotask(() => scrollToFirstError(errors));
			return;
		}

		if (stepIndex < stepCount - 1) {
			clearAutoAdvance();
			stepDirection = 1;
			stepIndex += 1;
			queueMicrotask(scrollStepTop);
		}
	}

	/** Radio pick on group / experience / source → advance after a short beat. */
	function onChoiceChange(key: keyof RegistrationFormValues, next: string) {
		setValue(key, next as RegistrationFormValues[typeof key]);

		if (!AUTO_ADVANCE_STEPS.has(step.id) || isLastStep || status === 'submitting') return;
		if (key === 'source' && next === SOURCE_OTHER) return;

		clearAutoAdvance();
		autoAdvanceTimer = setTimeout(() => {
			autoAdvanceTimer = null;
			goNext();
		}, 100);
	}

	async function onSubmit(event: Event) {
		event.preventDefault();
		if (status === 'submitting') return;

		if (!isLastStep) {
			goNext();
			return;
		}

		const stepErrors = validateRegistrationStep(step.keys, values, copy.errors);
		if (Object.keys(stepErrors).length) {
			fieldErrors = stepErrors;
			queueMicrotask(() => scrollToFirstError(stepErrors));
			return;
		}

		const errors = validateRegistration(values, copy.errors);
		fieldErrors = errors;
		submitError = false;

		if (Object.keys(errors).length) {
			status = 'idle';
			const firstKey = Object.keys(errors)[0] as keyof RegistrationFormValues | undefined;
			const targetStep = firstKey
				? registrationSteps.findIndex(
						(s) =>
							s.keys.includes(firstKey) ||
							(firstKey === 'sourceOther' && s.id === 'source')
					)
				: -1;
			if (targetStep >= 0) {
				stepDirection = targetStep > stepIndex ? 1 : -1;
				stepIndex = targetStep;
			}
			queueMicrotask(() => scrollToFirstError(errors));
			return;
		}

		status = 'submitting';
		try {
			await submitRegistration(values);
			reportLeadConversion();
			status = 'success';
			fieldErrors = {};
		} catch {
			status = 'error';
			submitError = true;
		}
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && registrationUI.open) close();
	}}
/>

<dialog
	bind:this={dialogEl}
	class="registration-dialog open:flex flex-col overflow-hidden bg-sand-50 p-0 text-bark-900"
	aria-labelledby="registration-title"
	onclose={onDialogClose}
	onclick={onBackdropClick}
>
	<div
		class="flex h-[7.25rem] shrink-0 items-start justify-between gap-4 border-b border-sand-200 px-6 py-5 sm:px-8"
	>
		<div class="flex min-w-0 flex-col gap-1.5 pr-4">
			<p class="text-[0.65rem] tracking-[0.22em] text-ember-600 uppercase">Empathy</p>
			{#if status === 'success'}
				<h2 id="registration-title" class="font-display text-2xl leading-tight sm:text-3xl">
					{copy.title}
				</h2>
			{:else}
				<p class="text-[0.65rem] tracking-[0.16em] text-bark-400 uppercase">{stepProgress}</p>
				<h2 id="registration-title" class="font-display text-2xl leading-tight sm:text-3xl">
					{stepLabel}
				</h2>
			{/if}
		</div>
		<button
			type="button"
			onclick={(e) => close(e)}
			class="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-sand-300 text-bark-600 transition hover:border-ember-400 hover:text-ember-600"
			aria-label={copy.close}
		>
			<span class="sr-only">{copy.close}</span>
			<span aria-hidden="true" class="text-xl leading-none">×</span>
		</button>
	</div>

	{#if status !== 'success'}
		<div
			class="flex shrink-0 gap-1.5 border-b border-sand-200 px-6 py-3 sm:px-8"
			aria-hidden="true"
		>
			{#each registrationSteps as _, i (i)}
				<span
					class="h-1 flex-1 rounded-full transition-colors duration-300
						{i <= stepIndex ? 'bg-ember-500' : 'bg-sand-300'}"
				></span>
			{/each}
		</div>
	{/if}

	<div class="step-stage relative min-h-0 flex-1 overflow-hidden">
		{#if status === 'success'}
			<div
				class="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-8 text-center"
				in:fade={{ duration: reduceMotion ? 0 : 280 }}
			>
				<p class="font-display text-2xl text-bark-900">{copy.successTitle}</p>
				<p class="mx-auto max-w-md text-sm leading-relaxed text-bark-600">
					{copy.successBody}
				</p>
				<Button onclick={close} variant="outline" class="mx-auto mt-2 px-6 py-2.5 text-xs">
					{copy.close}
				</Button>
			</div>
		{:else}
			<form
				bind:this={formEl}
				id="registration-form"
				class="absolute inset-0"
				novalidate
				onsubmit={onSubmit}
			>
				{#key stepIndex}
					<div
						bind:this={scrollEl}
						class="step-panel absolute inset-0 overflow-x-hidden overflow-y-auto px-6 pt-6 pb-5 sm:px-8 sm:py-7"
						class:step-panel--fill={step.id === 'group'}
						in:slideIn={{
							direction: reduceMotion ? 1 : stepDirection,
							duration: reduceMotion ? 0 : STEP_MS
						}}
						out:slideOut={{
							direction: reduceMotion ? 1 : stepDirection,
							duration: reduceMotion ? 0 : STEP_MS
						}}
					>
						<div
							class="flex flex-col gap-5 {step.id === 'group' ? 'md:h-full md:min-h-0' : ''}"
						>
							{#if stepIndex === 0}
								<p class="shrink-0 text-sm leading-relaxed text-bark-600">{copy.lead}</p>
							{/if}

							{#each stepFields as field (field.key)}
								{#if field.kind === 'radio' || field.kind === 'radio-other'}
									<RegistrationChoiceField
										{field}
										layout={field.key === 'group' ? 'grid' : 'stack'}
										class={field.key === 'group' ? 'md:min-h-0 md:flex-1' : ''}
										value={values[field.key]}
										otherValue={field.kind === 'radio-other' ? values[field.otherKey] : ''}
										error={fieldErrors[field.key]}
										otherError={field.kind === 'radio-other' ? fieldErrors[field.otherKey] : ''}
										onchange={(next) => onChoiceChange(field.key, next)}
										onotherinput={
											field.kind === 'radio-other'
												? (next) => setValue(field.otherKey, next)
												: undefined
										}
									/>
								{:else}
									<RegistrationTextField
										field={field as TextFieldConfig}
										value={values[field.key]}
										error={fieldErrors[field.key]}
										oninput={(next) => setValue(field.key, next)}
									/>
								{/if}
							{/each}

							{#if submitError}
								<p
									class="rounded-2xl border border-ember-400/50 bg-ember-200/40 px-4 py-3 text-sm text-ember-700"
									role="alert"
								>
									{copy.errorBody}
								</p>
							{/if}
						</div>
					</div>
				{/key}
			</form>
		{/if}
	</div>

	{#if status !== 'success'}
		<div class="shrink-0 border-t border-sand-200 bg-sand-50 px-6 pt-4 pb-5 sm:px-8 sm:pb-6">
			<div class="flex items-center justify-between gap-3">
				{#if stepIndex > 0}
					<Button
						type="button"
						variant="quiet"
						class="px-4 py-2.5 text-xs"
						onclick={goBack}
						disabled={status === 'submitting'}
					>
						{copy.back}
					</Button>
				{:else}
					<span></span>
				{/if}

				<Button
					type="submit"
					form="registration-form"
					variant="outline"
					class="min-w-[40%] px-6 py-2.5 text-xs"
					disabled={status === 'submitting'}
				>
					{#if isLastStep}
						{status === 'submitting' ? copy.submitting : copy.submit}
					{:else}
						{copy.next}
					{/if}
				</Button>
			</div>
			<p class="mt-3 text-center text-[0.7rem] leading-relaxed text-bark-400">
				{copy.trialNote}
			</p>
		</div>
	{/if}
</dialog>

<style>
	.registration-dialog::backdrop {
		background: rgb(58 36 36 / 0.45);
		backdrop-filter: blur(4px);
	}

	/*
	  Center via inset:0 + margin:auto (works in the dialog top layer).
	  Mobile fills the viewport; desktop uses a fixed card size.
	*/
	.registration-dialog[open] {
		position: fixed;
		inset: 0;
		margin: auto;
		width: 100vw;
		max-width: 100vw;
		height: 100dvh;
		max-height: 100dvh;
		border: none;
		border-radius: 0;
		box-shadow: none;
	}

	@media (min-width: 768px) {
		.registration-dialog[open] {
			width: min(100vw - 2rem, 44rem);
			max-width: min(100vw - 2rem, 44rem);
			height: min(94vh, 54rem);
			max-height: min(94vh, 54rem);
			border: 1px solid var(--color-sand-300, #e8ddd0);
			border-radius: 1.75rem;
			box-shadow: 0 25px 50px -12px rgb(58 36 36 / 0.15);
		}
	}

	.step-panel {
		will-change: transform;
		backface-visibility: hidden;
	}

	@media (min-width: 768px) {
		.step-panel--fill {
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		.step-panel--fill > :global(*) {
			flex: 1 1 auto;
			min-height: 0;
		}
	}
</style>
