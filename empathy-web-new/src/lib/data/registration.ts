/** In-house registration form — mirrors the public Google Form questions. */

export const registrationFormAction =
	'https://docs.google.com/forms/d/e/1FAIpQLScEL6M-bLxUNIufIX8MuHm9402mSsuWmaiHDPRR94OV89lQ2w/formResponse';

export const SOURCE_OTHER = '__other__' as const;

/** Lithuanian option values expected by the Google Form — do not translate. */
export const experienceValues = [
	'Pirma pažintis su šokiais',
	'Šokio patirtis iki metų',
	'Šokio patirtis daugiau nei vieneri metai',
	'Esamas EMPATHY mokinys'
] as const;

/** Lithuanian option values expected by the Google Form — do not translate. */
export const sourceValues = [
	'Facebook',
	'Instagram',
	'Google',
	'Draugai',
	'skillz.lt',
	'Tik Tok',
	'Plakatas/skrajutė'
] as const;

export type ExperienceOption = (typeof experienceValues)[number];
export type SourcePreset = (typeof sourceValues)[number];
export type SourceOption = SourcePreset | typeof SOURCE_OTHER;

export type GroupOptionValue =
	| 'MINI (4 - 6 m.) | šiuolaikinis/gatvės'
	| 'KIDS (7 - 10 m.) | šiuolaikinis/gatvės'
	| 'JUNIORS (11 - 15 m.) | šiuolaikinis/gatvės'
	| 'LADIES day (25+) | moteriška plastika'
	| 'nuo sausio - LADIES evening (25+) | moteriška plastika | kartą per savaitę';

/** Google Form entry IDs — keep in sync with the live form. */
export const registrationEntries = {
	studentName: 'entry.190113057',
	birthAge: 'entry.1578254993',
	experience: 'entry.1916142835',
	guardianName: 'entry.2043654018',
	group: 'entry.1272649040',
	phone: 'entry.1288156345',
	email: 'entry.146242857',
	health: 'entry.721521606',
	source: 'entry.1978869902',
	sourceOther: 'entry.1978869902.other_option_response',
	comments: 'entry.510730288'
} as const;

export type RegistrationFieldKey = keyof typeof registrationEntries;

/** Typed values held by the registration form UI. */
export type RegistrationFormValues = {
	studentName: string;
	birthAge: string;
	experience: ExperienceOption | '';
	guardianName: string;
	group: GroupOptionValue | '';
	phone: string;
	email: string;
	health: string;
	source: SourceOption | '';
	sourceOther: string;
	comments: string;
};

/** Payload sent to Google Forms — same shape as the form values. */
export type RegistrationPayload = RegistrationFormValues;

export type RegistrationChoiceOption = {
	value: string;
	label: string;
	hint?: string;
	/** Localized weekday + hours line for group options. */
	schedule?: string;
};

export type RegistrationFieldBase = {
	key: Exclude<RegistrationFieldKey, 'sourceOther'>;
	label: string;
	hint?: string;
	required?: boolean;
};

export type RegistrationTextField = RegistrationFieldBase & {
	kind: 'text' | 'email' | 'tel' | 'textarea';
	placeholder?: string;
	autocomplete?: 'name' | 'tel' | 'email';
	rows?: number;
};

export type RegistrationRadioField = RegistrationFieldBase & {
	kind: 'radio';
	options: readonly RegistrationChoiceOption[];
	sections?: readonly { id: string; label: string; values: readonly string[] }[];
};

export type RegistrationRadioOtherField = RegistrationFieldBase & {
	kind: 'radio-other';
	options: readonly RegistrationChoiceOption[];
	otherValue: typeof SOURCE_OTHER;
	otherLabel: string;
	otherKey: 'sourceOther';
	otherPlaceholder: string;
};

export type RegistrationField =
	| RegistrationTextField
	| RegistrationRadioField
	| RegistrationRadioOtherField;

export function emptyRegistrationForm(): RegistrationFormValues {
	return {
		studentName: '',
		birthAge: '',
		experience: '',
		guardianName: '',
		group: '',
		phone: '',
		email: '',
		health: '',
		source: '',
		sourceOther: '',
		comments: ''
	};
}

export type RegistrationFieldErrors = Partial<Record<keyof RegistrationFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type RegistrationErrorCopy = {
	studentName: string;
	birthAge: string;
	experience: string;
	group: string;
	phone: string;
	emailRequired: string;
	emailInvalid: string;
	source: string;
	sourceOther: string;
};

/** Field-level messages for custom validation UI. */
export function validateRegistration(
	values: RegistrationFormValues,
	copy: RegistrationErrorCopy
): RegistrationFieldErrors {
	const errors: RegistrationFieldErrors = {};

	if (!values.studentName.trim()) errors.studentName = copy.studentName;
	if (!values.birthAge.trim()) errors.birthAge = copy.birthAge;
	if (!values.experience) errors.experience = copy.experience;
	if (!values.group) errors.group = copy.group;
	if (!values.phone.trim()) errors.phone = copy.phone;

	if (!values.email.trim()) {
		errors.email = copy.emailRequired;
	} else if (!EMAIL_PATTERN.test(values.email.trim())) {
		errors.email = copy.emailInvalid;
	}

	if (!values.source) {
		errors.source = copy.source;
	} else if (values.source === SOURCE_OTHER && !values.sourceOther.trim()) {
		errors.sourceOther = copy.sourceOther;
	}

	return errors;
}

export function isRegistrationComplete(
	values: RegistrationFormValues,
	copy: RegistrationErrorCopy
): boolean {
	return Object.keys(validateRegistration(values, copy)).length === 0;
}
