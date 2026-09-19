export type GroupId = 'mini' | 'kids' | 'adults' | 'ladies';

export interface Group {
	id: GroupId;
	name: string;
	age: string;
	/** Tailwind classes for the group's chip, keyed to the sunset palette. */
	chip: string;
	dot: string;
}

export const groups: Record<GroupId, Group> = {
	mini: {
		id: 'mini',
		name: 'Mini',
		age: '4–6 m.',
		chip: 'bg-sand-200 text-bark-600',
		dot: 'bg-sand-400'
	},
	kids: {
		id: 'kids',
		name: 'Kids',
		age: '7–12 m.',
		chip: 'bg-ember-200/60 text-ember-700',
		dot: 'bg-ember-300'
	},
	adults: {
		id: 'adults',
		name: 'Adults',
		age: '14+ m.',
		chip: 'bg-ember-400/25 text-ember-700',
		dot: 'bg-ember-500'
	},
	ladies: {
		id: 'ladies',
		name: 'Ladies',
		age: '25+ m.',
		chip: 'bg-ember-600/15 text-ember-700',
		dot: 'bg-ember-600'
	}
};

export interface Lesson {
	time: string;
	group: GroupId;
}

export interface Day {
	name: string;
	short: string;
	lessons: Lesson[];
}

export const week: Day[] = [
	{
		name: 'Pirmadienis',
		short: 'I',
		lessons: [
			{ time: '12:00', group: 'ladies' },
			{ time: '16:00', group: 'kids' },
			{ time: '17:00', group: 'adults' }
		]
	},
	{
		name: 'Antradienis',
		short: 'II',
		lessons: [{ time: '17:00', group: 'mini' }]
	},
	{
		name: 'Trečiadienis',
		short: 'III',
		lessons: [
			{ time: '12:00', group: 'ladies' },
			{ time: '16:00', group: 'kids' },
			{ time: '17:00', group: 'adults' }
		]
	},
	{
		name: 'Ketvirtadienis',
		short: 'IV',
		lessons: [{ time: '17:00', group: 'mini' }]
	}
];

export const scheduleNotes = [
	'Pamokos vyksta adresu Eitminų g. 20, Vilnius.',
	'Mini grupės pamoka trunka 45 min., kitų grupių — 60 min.',
	'Naujiems nariams pirma pamoka nemokama.'
];
