export interface PlanBase {
	id: 'single' | 'month' | 'private';
	price: string;
	featured?: boolean;
}

/** Structural pricing — copy lives in i18n catalogs. */
export const planBases: PlanBase[] = [
	{ id: 'single', price: '10' },
	{ id: 'month', price: '60', featured: true },
	{ id: 'private', price: '40' }
];
