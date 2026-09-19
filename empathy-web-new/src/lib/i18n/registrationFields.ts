import {
	SOURCE_OTHER,
	experienceValues,
	sourceValues,
	type RegistrationField
} from '$data/registration';
import type { Messages } from '$i18n';

/** Build locale-aware field descriptors; Google Form values stay Lithuanian. */
export function buildRegistrationFields(m: Messages['registration']): readonly RegistrationField[] {
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
			options: groups.map(({ value, label, hint }) => ({ value, label, hint })),
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
