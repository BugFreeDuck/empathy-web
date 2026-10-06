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
		/** `grid` = 3-column fill layout (group step). */
		layout?: 'stack' | 'grid';
		class?: string;
		onchange: (value: string) => void;
		onotherinput?: (value: string) => void;
	}

	let {
		field,
		value,
		otherValue = '',
		error = '',
		otherError = '',
		layout = 'stack',
		class: className = '',
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
	const isGrid = $derived(layout === 'grid');
</script>

<fieldset
	class="field {className}"
	class:field--error={hasError}
	class:field--grid={isGrid}
>
	{#if !isGrid}
		<legend class="field-label">
			{field.label}
			{#if field.required}
				<span class="req" aria-hidden="true">*</span>
			{/if}
		</legend>
	{:else}
		<legend class="sr-only">
			{field.label}
			{#if field.required}*{/if}
		</legend>
	{/if}
	{#if field.hint && !isGrid}
		<span class="field-hint">{field.hint}</span>
	{/if}

	{#if error}
		<span id={errorId} class="field-error" role="alert">{error}</span>
	{/if}

	{#each sections as section, index (section.id)}
		{#if section.label && !isGrid}
			<p class="section-label" class:mt={index > 0}>{section.label}</p>
		{/if}
		<div
			class={isGrid ? 'option-grid' : 'option-stack'}
			class:mb={!isGrid && Boolean(section.label) && index < sections.length - 1}
		>
			{#each section.options as option (option.value)}
				<label class="option" class:option--grid={isGrid}>
					<input
						type="radio"
						name={field.key}
						value={option.value}
						checked={value === option.value}
						onchange={() => onchange(option.value)}
						onclick={() => {
							// Re-selecting the active option has no `change` — still allow advance.
							if (value === option.value) onchange(option.value);
						}}
					/>
					<span class="option-body">
						<span class="option-title">{option.label}</span>
						{#if option.hint}
							<span class="option-hint">{option.hint}</span>
						{/if}
						{#if option.schedule}
							<span class="option-schedule">{option.schedule}</span>
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
				onclick={() => {
					if (value === field.otherValue) onchange(field.otherValue);
				}}
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

	.field--grid {
		gap: 0;
	}

	@media (min-width: 768px) {
		.field--grid {
			flex: 1 1 auto;
			min-height: 0;
			height: 100%;
			gap: 0.75rem;
		}
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

	.option-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		gap: 0.65rem;
		flex: 0 0 auto;
		min-height: 0;
		align-content: start;
	}

	@media (min-width: 768px) {
		.option-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			grid-auto-rows: 1fr;
			gap: 0.65rem;
			flex: 1 1 auto;
			height: 100%;
			align-content: stretch;
		}
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
			background-color 200ms var(--ease-soft),
			box-shadow 200ms var(--ease-soft),
			transform 200ms var(--ease-soft);
	}

	@media (hover: hover) {
		.option:hover {
			border-color: var(--color-ember-300);
			background: color-mix(in srgb, var(--color-ember-200) 18%, var(--color-sand-50));
			box-shadow: 0 4px 14px -6px rgb(58 36 36 / 0.12);
		}

		.option--grid:hover {
			transform: translateY(-1px);
		}
	}

	.option:has(input:checked):hover {
		border-color: var(--color-ember-500);
		background: color-mix(in srgb, var(--color-ember-200) 40%, var(--color-sand-50));
	}

	.option--grid {
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 0;
		height: auto;
		min-height: 4.75rem;
		padding: 0.95rem 1rem;
		text-align: left;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.option--grid {
			height: 100%;
			min-height: 0;
			padding: 0.85rem 0.75rem;
			text-align: center;
		}
	}

	.option--grid input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.option--grid .option-body {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.2rem;
		min-width: 0;
		min-height: 0;
		width: 100%;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.option--grid .option-body {
			align-items: center;
			height: 100%;
		}
	}

	.option--grid .option-title {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.3;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	.option--grid .option-hint {
		margin-top: 0;
		font-size: 0.85rem;
		line-height: 1.35;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	.option--grid .option-schedule {
		margin-top: 0.2rem;
		font-size: 0.8rem;
		line-height: 1.35;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	@media (min-width: 768px) {
		.option--grid .option-title {
			font-size: clamp(0.78rem, 1.4vw, 0.95rem);
			line-height: 1.25;
		}

		.option--grid .option-hint {
			font-size: clamp(0.68rem, 1.2vw, 0.75rem);
			line-height: 1.3;
		}

		.option--grid .option-schedule {
			margin-top: 0.25rem;
			font-size: clamp(0.65rem, 1.1vw, 0.72rem);
			line-height: 1.3;
		}
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

	.option-schedule {
		display: block;
		margin-top: 0.35rem;
		font-size: 0.78rem;
		font-variant-numeric: tabular-nums;
		letter-spacing: 0.01em;
		color: var(--color-ember-700);
		line-height: 1.35;
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
