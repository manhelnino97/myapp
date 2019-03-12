
export function updateText(text: String,title: String) {
	return {
		type: "UP_DATE_TEXT",
		text,
		title,
	};
}

export function editUserName(status: Boolean) {
	return {
		type: "EDIT_USERNAME",
		status,
	};
}

export function switchStatus(status: Boolean, title: String) {
	return {
		type: "SWITCH_SMS",
		status,
		title,
	};
}

export function showDatePicker(status: Boolean) {
	return {
		type: "SHOW_DATE_PICKER",
		status,
	};
}
