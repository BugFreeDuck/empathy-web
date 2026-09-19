<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import RegistrationChoiceField from '$molecules/RegistrationChoiceField.svelte';
	import RegistrationTextField from '$molecules/RegistrationTextField.svelte';
	import {
		emptyRegistrationForm,
		validateRegistration,
		type RegistrationFieldErrors,
		type RegistrationFormValues,
		type RegistrationTextField as TextFieldConfig
	} from '$data/registration';
	import { i18n } from '$i18n';
	import { buildRegistrationFields } from '$i18n/registrationFields';
	import { registrationUI } from '$lib/stores/registration.svelte';
	import { submitRegistration } from '$lib/utils/registration';

	type Status = 'idle' | 'submitting' | 'success' | 'error';

	let status = $state<Status>('idle');
	let formEl = $state<HTMLFormElement | null>(null);
	let dialogEl = $state<HTMLDialogElement | null>(null);
	let scrollEl = $state<HTMLDivElement | null>(null);
	let values = $state<RegistrationFormValues>(emptyRegistrationForm());
	let fieldErrors = $state<RegistrationFieldErrors>({});
	let submitError = $state(false);

	const copy = $derived(i18n.m.registration);
	const fields = $derived(buildRegistrationFields(copy));

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
		values = emptyRegistrationForm();
		fieldErrors = {};
		submitError = false;
		status = 'idle';
		formEl?.reset();
	}

	function close(event?: Event) {
		event?.stopPropagation();
		registrationUI.hide();
		dialogEl?.close();
		document.body.style.overflow = '';

		if (status === 'success' || status === 'error' || Object.keys(fieldErrors).length) {
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

	function scrollToFirstError(errors: RegistrationFieldErrors) {
		const firstKey = Object.keys(errors)[0];
		if (!firstKey || !scrollEl) return;

		const byName = scrollEl.querySelector(`[name="${firstKey}"]`);
		const byError = scrollEl.querySelector(`#${firstKey}-error`);
		const target = byError ?? byName;
		target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	async function onSubmit(event: Event) {
		event.preventDefault();
		if (status === 'submitting') return;

		const errors = validateRegistration(values, copy.errors);
		fieldErrors = errors;
		submitError = false;

		if (Object.keys(errors).length) {
			status = 'idle';
			queueMicrotask(() => scrollToFirstError(errors));
			return;
		}

		status = 'submitting';
		try {
			await submitRegistration(values);
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
	class="registration-dialog m-auto w-[min(100vw-1.5rem,36rem)] max-h-[min(92vh,52rem)] flex-col overflow-hidden rounded-[1.75rem] border border-sand-300 bg-sand-50 p-0 text-bark-900 shadow-2xl shadow-bark-900/15 open:flex"
	aria-labelledby="registration-title"
	onclose={onDialogClose}
	onclick={onBackdropClick}
>
	<div class="flex shrink-0 items-start justify-between gap-4 border-b border-sand-200 px-6 py-5 sm:px-8">
		<div class="flex flex-col gap-1.5 pr-4">
			<p class="text-[0.65rem] tracking-[0.22em] text-ember-600 uppercase">Empathy</p>
			<h2 id="registration-title" class="font-display text-2xl leading-tight sm:text-3xl">
				{copy.title}
			</h2>
			<p class="text-sm leading-relaxed text-bark-600">{copy.lead}</p>
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

	<div bind:this={scrollEl} class="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
		{#if status === 'success'}
			<div class="flex flex-col gap-4 py-8 text-center">
				<p class="font-display text-2xl text-bark-900">{copy.successTitle}</p>
				<p class="mx-auto max-w-md text-sm leading-relaxed text-bark-600">
					{copy.successBody}
				</p>
				<Button onclick={close} class="mx-auto mt-2">{copy.close}</Button>
			</div>
		{:else}
			<form
				bind:this={formEl}
				id="registration-form"
				class="flex flex-col gap-5"
				novalidate
				onsubmit={onSubmit}
			>
				{#each fields as field (field.key)}
					{#if field.kind === 'radio' || field.kind === 'radio-other'}
						<RegistrationChoiceField
							{field}
							value={values[field.key]}
							otherValue={field.kind === 'radio-other' ? values[field.otherKey] : ''}
							error={fieldErrors[field.key]}
							otherError={field.kind === 'radio-other' ? fieldErrors[field.otherKey] : ''}
							onchange={(next) =>
								setValue(field.key, next as RegistrationFormValues[typeof field.key])}
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
			</form>
		{/if}
	</div>

	{#if status !== 'success'}
		<div class="shrink-0 border-t border-sand-200 bg-sand-50 px-6 pt-4 pb-5 sm:px-8 sm:pb-6">
			<Button
				type="submit"
				form="registration-form"
				class="w-full"
				disabled={status === 'submitting'}
			>
				{status === 'submitting' ? copy.submitting : copy.submit}
			</Button>
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
</style>
