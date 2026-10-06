import type { RegistrationField, RegistrationFormValues } from '$data/registration';
import {
	SOURCE_OTHER,
	experienceValues,
	sourceValues,
	type GroupOptionValue
} from '$data/registration';
import { scheduleByGroup, type GroupId } from '$data/schedule';
import type { Messages } from '$i18n';

/** Map Google Form group values → schedule group ids. */
const groupValueToId: Record<GroupOptionValue, GroupId> = {
	'MINI (4 - 6 m.) | šiuolaikinis/gatvės': 'mini',
	'KIDS (7 - 10 m.) | šiuolaikinis/gatvės': 'kids',
	'JUNIORS (11 - 15 m.) | šiuolaikinis/gatvės': 'juniors',
	'K-POP (12+ m.)': 'kpop',
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

export type RegistrationStepId =
	| 'group'
	| 'experience'
	| 'identity'
	| 'health'
	| 'source'
	| 'comments';

export type RegistrationStepDef = {
	id: RegistrationStepId;
	/** Form value keys shown (and validated) on this step. */
	keys: readonly (keyof RegistrationFormValues)[];
};

/**
 * Wizard order. Contact fields (guardian / phone / email) live on the identity
 * step so submission stays complete without an extra dedicated contact step.
 */
export const registrationSteps: readonly RegistrationStepDef[] = [
	{ id: 'group', keys: ['group'] },
	{ id: 'experience', keys: ['experience'] },
	{ id: 'identity', keys: ['studentName', 'birthAge', 'guardianName', 'phone', 'email'] },
	{ id: 'health', keys: ['health'] },
	{ id: 'source', keys: ['source', 'sourceOther'] },
	{ id: 'comments', keys: ['comments'] }
];

/** Build locale-aware field descriptors; Google Form values stay Lithuanian. */
export function buildRegistrationFields(
	m: Messages['registration'],
	dayNames: Messages['schedule']['dayNames']
): readonly RegistrationField[] {
	const f = m.fields;
	const groups = m.groupOptions;

	return [
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
			}))
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
			kind: 'text',
			key: 'guardianName',
			label: f.guardianName.label,
			hint: f.guardianName.hint
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
			rows: 4
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
			rows: 4
		}
	];
}

export function fieldsForStep(
	fields: readonly RegistrationField[],
	step: RegistrationStepDef
): RegistrationField[] {
	const keySet = new Set(step.keys);
	return fields.filter((field) => keySet.has(field.key));
}
