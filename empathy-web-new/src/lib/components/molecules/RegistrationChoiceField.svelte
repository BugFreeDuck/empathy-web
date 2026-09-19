<script lang="ts">
	import {
		type RegistrationChoiceOption,
		type RegistrationRadioField,
		type RegistrationRadioOtherField
	} from '$data/registration';

	interface Props {
		field: RegistrationRadioField | RegistrationRadioOtherField;
		value: string;
		otherValue?: string;
		error?: string;
		otherError?: string;
		onchange: (value: string) => void;
		onotherinput?: (value: string) => void;
	}

	let {
		field,
		value,
		otherValue = '',
		error = '',
		otherError = '',
		onchange,
		onotherinput
	}: Props = $props();

	const sections = $derived(
		field.kind === 'radio' && field.sections?.length
			? field.sections.map((section) => ({
					...section,
					options: field.options.filter((option) => section.values.includes(option.value))
				}))
			: [
					{
						id: 'all',
						label: null as string | null,
						options: field.options as readonly RegistrationChoiceOption[]
					}
				]
	);

	const showOtherInput = $derived(field.kind === 'radio-other' && value === field.otherValue);
	const errorId = $derived(`${field.key}-error`);
	const otherErrorId = $derived(`${field.key}-other-error`);
	const hasError = $derived(Boolean(error) || Boolean(otherError));
</script>

<fieldset class="field" class:field--error={hasError}>
	<legend class="field-label">
		{field.label}
		{#if field.required}
			<span class="req" aria-hidden="true">*</span>
		{/if}
	</legend>
	{#if field.hint}
		<span class="field-hint">{field.hint}</span>
	{/if}

	{#if error}
		<span id={errorId} class="field-error" role="alert">{error}</span>
	{/if}

	{#each sections as section, index (section.id)}
		{#if section.label}
			<p class="section-label" class:mt={index > 0}>{section.label}</p>
		{/if}
		<div class="option-stack" class:mb={Boolean(section.label) && index < sections.length - 1}>
			{#each section.options as option (option.value)}
				<label class="option">
					<input
						type="radio"
						name={field.key}
						value={option.value}
						checked={value === option.value}
						onchange={() => onchange(option.value)}
					/>
					<span>
						<span class="option-title">{option.label}</span>
						{#if option.hint}
							<span class="option-hint">{option.hint}</span>
						{/if}
					</span>
				</label>
			{/each}
		</div>
	{/each}

	{#if field.kind === 'radio-other'}
		<label class="option">
			<input
				type="radio"
				name={field.key}
				value={field.otherValue}
				checked={value === field.otherValue}
				onchange={() => onchange(field.otherValue)}
			/>
			<span class="option-title">{field.otherLabel}</span>
		</label>
		{#if showOtherInput}
			<input
				class="field-input mt"
				class:field-input--error={Boolean(otherError)}
				name={field.otherKey}
				placeholder={field.otherPlaceholder}
				aria-invalid={otherError ? 'true' : undefined}
				aria-describedby={otherError ? otherErrorId : undefined}
				value={otherValue}
				oninput={(e) => onotherinput?.(e.currentTarget.value)}
			/>
			{#if otherError}
				<span id={otherErrorId} class="field-error" role="alert">{otherError}</span>
			{/if}
		{/if}
	{/if}
</fieldset>

<style>
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		border: 0;
		padding: 0;
		margin: 0;
		min-inline-size: 0;
	}

	.field-label {
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-bark-600);
	}

	.field--error .field-label {
		color: var(--color-ember-700);
	}

	.field-hint {
		font-size: 0.75rem;
		letter-spacing: 0;
		text-transform: none;
		color: var(--color-bark-400);
		line-height: 1.4;
	}

	.req {
		color: var(--color-ember-600);
		margin-left: 0.15rem;
	}

	.section-label {
		margin: 0 0 0.5rem;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-ember-600);
	}

	.section-label.mt {
		margin-top: 0.75rem;
	}

	.option-stack {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.option-stack.mb {
		margin-bottom: 1rem;
	}

	.option {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		border: 1px solid var(--color-sand-300);
		border-radius: 1rem;
		padding: 0.75rem 0.9rem;
		background: var(--color-sand-50);
		cursor: pointer;
		transition:
			border-color 200ms var(--ease-soft),
			background-color 200ms var(--ease-soft);
	}

	.field--error .option {
		border-color: color-mix(in srgb, var(--color-ember-500) 70%, var(--color-sand-300));
		background: color-mix(in srgb, var(--color-ember-200) 22%, var(--color-sand-50));
	}

	.option:has(input:checked) {
		border-color: var(--color-ember-400);
		background: color-mix(in srgb, var(--color-ember-200) 35%, var(--color-sand-50));
	}

	.option input {
		margin-top: 0.2rem;
		accent-color: var(--color-ember-600);
	}

	.option-title {
		display: block;
		font-size: 0.92rem;
		color: var(--color-bark-900);
	}

	.option-hint {
		display: block;
		margin-top: 0.15rem;
		font-size: 0.75rem;
		color: var(--color-bark-400);
	}

	.field-input {
		width: 100%;
		border-radius: 1rem;
		border: 1px solid var(--color-sand-300);
		background: var(--color-sand-50);
		padding: 0.85rem 1rem;
		font-size: 0.95rem;
		color: var(--color-bark-900);
		outline: none;
		transition:
			border-color 200ms var(--ease-soft),
			box-shadow 200ms var(--ease-soft),
			background-color 200ms var(--ease-soft);
	}

	.field-input:focus {
		border-color: var(--color-ember-400);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-ember-300) 45%, transparent);
	}

	.field-input--error {
		border-color: var(--color-ember-500);
		background: color-mix(in srgb, var(--color-ember-200) 28%, var(--color-sand-50));
	}

	.field-input.mt {
		margin-top: 0.35rem;
	}

	.field-error {
		font-size: 0.8rem;
		line-height: 1.35;
		color: var(--color-ember-700);
	}
</style>
