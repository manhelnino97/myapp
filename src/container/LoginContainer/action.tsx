export function updateText(text: String,title: String) {
	return {
		type: "UP_DATE_TEXT",
		text,
		title,
	};
}