export type PlanId = 'intro' | 'month' | 'private';

export interface PlanBase {
	id: PlanId;
	/** Numeric amount for paid plans; intro uses localized priceAmount in i18n. */
	price?: string;
}

/** Structural pricing — copy lives in i18n catalogs. */
export const planBases: PlanBase[] = [
	{ id: 'intro' },
	{ id: 'month', price: '65' },
	{ id: 'private', price: '40' }
];
