import {
	SOURCE_OTHER,
	registrationEntries,
	registrationFormAction,
	type RegistrationPayload
} from '$data/registration';

/** Posts to the existing Google Form endpoint (no-cors; response body unavailable). */
export async function submitRegistration(payload: RegistrationPayload): Promise<void> {
	const body = new FormData();

	body.append(registrationEntries.studentName, payload.studentName.trim());
	body.append(registrationEntries.birthAge, payload.birthAge.trim());
	body.append(registrationEntries.experience, payload.experience);
	body.append(registrationEntries.guardianName, payload.guardianName.trim());
	body.append(registrationEntries.group, payload.group);
	body.append(registrationEntries.phone, payload.phone.trim());
	body.append(registrationEntries.email, payload.email.trim());
	body.append(registrationEntries.health, payload.health.trim());
	body.append(registrationEntries.comments, payload.comments.trim());

	if (payload.source === SOURCE_OTHER) {
		body.append(registrationEntries.source, '__other_option__');
		body.append(registrationEntries.sourceOther, payload.sourceOther.trim());
	} else {
		body.append(registrationEntries.source, payload.source);
	}

	await fetch(registrationFormAction, {
		method: 'POST',
		mode: 'no-cors',
		body
	});
}
