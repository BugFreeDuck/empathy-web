<script lang="ts">
	import { type RegistrationTextField } from '$data/registration';

	interface Props {
		field: RegistrationTextField;
		value: string;
		error?: string;
		oninput: (value: string) => void;
	}

	let { field, value, error = '', oninput }: Props = $props();

	const errorId = $derived(`${field.key}-error`);
</script>

<label class="field" class:field--error={Boolean(error)}>
	<span class="field-label">
		{field.label}
		{#if field.required}
			<span class="req" aria-hidden="true">*</span>
		{/if}
	</span>
	{#if field.hint}
		<span class="field-hint">{field.hint}</span>
	{/if}

	{#if field.kind === 'textarea'}
		<textarea
			class="field-input min-h-24"
			name={field.key}
			rows={field.rows ?? 3}
			placeholder={field.placeholder}
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={error ? errorId : undefined}
			value={value}
			oninput={(e) => oninput(e.currentTarget.value)}
		></textarea>
	{:else}
		<input
			class="field-input"
			type={field.kind === 'text' ? 'text' : field.kind}
			name={field.key}
			autocomplete={field.autocomplete}
			placeholder={field.placeholder}
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={error ? errorId : undefined}
			{value}
			oninput={(e) => oninput(e.currentTarget.value)}
		/>
	{/if}

	{#if error}
		<span id={errorId} class="field-error" role="alert">{error}</span>
	{/if}
</label>

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

	.field--error .field-input {
		border-color: var(--color-ember-500);
		background: color-mix(in srgb, var(--color-ember-200) 28%, var(--color-sand-50));
	}

	.field--error .field-input:focus {
		border-color: var(--color-ember-600);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-ember-400) 35%, transparent);
	}

	.field-error {
		font-size: 0.8rem;
		line-height: 1.35;
		color: var(--color-ember-700);
	}
</style>
