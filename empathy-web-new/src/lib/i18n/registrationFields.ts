import {
	SOURCE_OTHER,
	experienceValues,
	sourceValues,
	type GroupOptionValue,
	type RegistrationField
} from '$data/registration';
import { scheduleByGroup, type GroupId } from '$data/schedule';
import type { Messages } from '$i18n';

/** Map Google Form group values → schedule group ids. */
const groupValueToId: Record<GroupOptionValue, GroupId> = {
	'MINI (4 - 6 m.) | šiuolaikinis/gatvės': 'mini',
	'KIDS (7 - 10 m.) | šiuolaikinis/gatvės': 'kids',
	'JUNIORS (11 - 15 m.) | šiuolaikinis/gatvės': 'juniors',
	'LADIES day (25+) | moteriška plastika': 'ladiesDay',
	'nuo sausio - LADIES evening (25+) | moteriška plastika | kartą per savaitę': 'ladiesEvening'
};

function formatGroupSchedule(
	groupId: GroupId,
	dayNames: Messages['schedule']['dayNames']
): string | undefined {
	const entry = scheduleByGroup.find((row) => row.group.id === groupId);
	if (!entry?.sessions.length) return undefined;

	const days = [
		...new Set(
			entry.sessions.map(
				(session) =>
					dayNames[session.dayShort as keyof typeof dayNames] ?? session.dayName
			)
		)
	];
	const times = [...new Set(entry.sessions.map((session) => session.time))];

	return `${days.join(' · ')} · ${times.join(', ')}`;
}

/** Build locale-aware field descriptors; Google Form values stay Lithuanian. */
export function buildRegistrationFields(
	m: Messages['registration'],
	dayNames: Messages['schedule']['dayNames']
): readonly RegistrationField[] {
	const f = m.fields;
	const groups = m.groupOptions;

	return [
		{
			kind: 'text',
			key: 'studentName',
			label: f.studentName.label,
			autocomplete: 'name',
			required: true
		},
		{
			kind: 'text',
			key: 'birthAge',
			label: f.birthAge.label,
			placeholder: f.birthAge.placeholder,
			required: true
		},
		{
			kind: 'radio',
			key: 'experience',
			label: f.experience.label,
			required: true,
			options: experienceValues.map((value, i) => ({
				value,
				label: m.experienceOptions[i] ?? value
			}))
		},
		{
			kind: 'text',
			key: 'guardianName',
			label: f.guardianName.label,
			hint: f.guardianName.hint
		},
		{
			kind: 'radio',
			key: 'group',
			label: f.group.label,
			required: true,
			options: groups.map(({ value, label, hint }) => ({
				value,
				label,
				hint,
				schedule: formatGroupSchedule(groupValueToId[value as GroupOptionValue], dayNames)
			})),
			sections: [
				{
					id: 'youth',
					label: m.youthSection,
					values: groups.filter((g) => g.section === 'youth').map((g) => g.value)
				},
				{
					id: 'ladies',
					label: m.ladiesSection,
					values: groups.filter((g) => g.section === 'ladies').map((g) => g.value)
				}
			]
		},
		{
			kind: 'tel',
			key: 'phone',
			label: f.phone.label,
			hint: f.phone.hint,
			autocomplete: 'tel',
			required: true
		},
		{
			kind: 'email',
			key: 'email',
			label: f.email.label,
			hint: f.email.hint,
			autocomplete: 'email',
			required: true
		},
		{
			kind: 'textarea',
			key: 'health',
			label: f.health.label,
			hint: f.health.hint,
			rows: 3
		},
		{
			kind: 'radio-other',
			key: 'source',
			label: f.source.label,
			required: true,
			options: sourceValues.map((value, i) => ({
				value,
				label: m.sourceOptions[i] ?? value
			})),
			otherValue: SOURCE_OTHER,
			otherLabel: m.otherLabel,
			otherKey: 'sourceOther',
			otherPlaceholder: m.otherPlaceholder
		},
		{
			kind: 'textarea',
			key: 'comments',
			label: f.comments.label,
			rows: 3
		}
	];
}
