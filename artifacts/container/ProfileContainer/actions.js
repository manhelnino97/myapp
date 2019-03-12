export function updateText(text, title) {
    return {
        type: "UP_DATE_TEXT",
        text,
        title,
    };
}
export function editUserName(status) {
    return {
        type: "EDIT_USERNAME",
        status,
    };
}
export function switchStatus(status, title) {
    return {
        type: "SWITCH_SMS",
        status,
        title,
    };
}
export function showDatePicker(status) {
    return {
        type: "SHOW_DATE_PICKER",
        status,
    };
}
//# sourceMappingURL=actions.js.map