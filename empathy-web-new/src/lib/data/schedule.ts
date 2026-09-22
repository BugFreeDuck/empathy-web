export type GroupId = 'mini' | 'kids' | 'juniors' | 'ladiesDay' | 'ladiesEvening';

export interface Group {
	id: GroupId;
	name: string;
	age: string;
	/** Tailwind classes for the group's chip, keyed to the sage palette. */
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
		age: '7–10 m.',
		chip: 'bg-ember-200/60 text-ember-700',
		dot: 'bg-ember-300'
	},
	juniors: {
		id: 'juniors',
		name: 'Juniors',
		age: '11–15 m.',
		chip: 'bg-ember-300/40 text-ember-700',
		dot: 'bg-ember-400'
	},
	ladiesDay: {
		id: 'ladiesDay',
		name: 'Ladies day',
		age: '25+ m.',
		chip: 'bg-ember-600/15 text-ember-700',
		dot: 'bg-ember-600'
	},
	ladiesEvening: {
		id: 'ladiesEvening',
		name: 'Ladies evening',
		age: '25+ m.',
		chip: 'bg-ember-600/20 text-ember-700',
		dot: 'bg-ember-700'
	}
};

export interface Lesson {
	time: string;
	group: GroupId;
	teacher: string;
}

export interface Day {
	name: string;
	short: string;
	lessons: Lesson[];
}

/** Season 26/27 — days with classes only (no Wednesday). */
export const week: Day[] = [
	{
		name: 'Pirmadienis',
		short: 'P',
		lessons: [{ time: '17:15–18:00', group: 'mini', teacher: 'Emilija' }]
	},
	{
		name: 'Antradienis',
		short: 'A',
		lessons: [
			{ time: '12:00–13:00', group: 'ladiesDay', teacher: 'Gabija & Erika' },
			{ time: '16:00–17:00', group: 'kids', teacher: 'Emilija / Gabija & Erika' },
			{ time: '17:00–17:45', group: 'juniors', teacher: 'Emilija / Gabija & Erika' }
		]
	},
	{
		name: 'Ketvirtadienis',
		short: 'K',
		lessons: [
			{ time: '12:00–13:00', group: 'ladiesDay', teacher: 'Gabija & Erika' },
			{ time: '16:00–17:00', group: 'kids', teacher: 'Emilija / Gabija & Erika' },
			{ time: '17:00–17:45', group: 'juniors', teacher: 'Emilija / Gabija & Erika' }
		]
	},
	{
		name: 'Penktadienis',
		short: 'Pn',
		lessons: [
			{ time: '17:15–18:00', group: 'mini', teacher: 'Emilija' },
			{ time: '18:00–19:30', group: 'ladiesEvening', teacher: 'Olivija' }
		]
	}
];

export const scheduleNotes = [
	'Pamokos vyksta adresu Eitminų g. 20, Vilnius.',
	'Ladies evening startuoja nuo sausio.',
	'Naujiems nariams pirma pamoka nemokama.'
];

/** Weekday markers for the group view (includes empty Wednesday). */
export const weekdayMarks = ['P', 'A', 'T', 'K', 'Pn'] as const;

export interface GroupSession {
	dayShort: string;
	dayName: string;
	time: string;
	teacher: string;
}

export interface GroupSchedule {
	group: Group;
	sessions: GroupSession[];
}

/** Invert `week` into one row per group (source of truth stays day-based above). */
export const scheduleByGroup: GroupSchedule[] = (Object.keys(groups) as GroupId[]).map((id) => {
	const sessions: GroupSession[] = [];
	for (const day of week) {
		for (const lesson of day.lessons) {
			if (lesson.group !== id) continue;
			sessions.push({
				dayShort: day.short,
				dayName: day.name,
				time: lesson.time,
				teacher: lesson.teacher
			});
		}
	}
	return { group: groups[id], sessions };
});
