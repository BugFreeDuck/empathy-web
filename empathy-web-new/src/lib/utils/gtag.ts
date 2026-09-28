/** Google Ads lead-form conversion (AW-18480618282). */

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		gtag_report_conversion?: (url?: string) => false;
	}
}

export function reportLeadConversion(): void {
	if (typeof window.gtag_report_conversion === 'function') {
		window.gtag_report_conversion();
		return;
	}

	if (typeof window.gtag !== 'function') return;

	window.gtag('event', 'conversion', {
		send_to: 'AW-18480618282/BwCkCNyXpYkdEKq2n-xE',
		value: 1.0,
		currency: 'EUR'
	});
}
