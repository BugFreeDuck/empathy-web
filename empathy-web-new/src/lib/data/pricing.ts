export interface PlanBase {
	id: 'month' | 'private';
	price: string;
}

/** Structural pricing — copy lives in i18n catalogs. */
export const planBases: PlanBase[] = [
	{ id: 'month', price: '65' },
	{ id: 'private', price: '40' }
];
