<script lang="ts">
	/** Decorative sunset light bloom, positioned by the parent section. */
	interface Props {
		class?: string;
		color?: string;
		opacity?: number;
	}

	let { class: className = '', color = 'var(--color-ember-300)', opacity = 0.35 }: Props = $props();
</script>

<div
	aria-hidden="true"
	class="glow {className}"
	style:background={color}
	style:opacity
></div>
