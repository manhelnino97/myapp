const initialState = {
    editable: true,
    isEditUserName: false,
    switchSms: false,
    switchEmail: false,
    isShowDatePicker: false,
};
export default function (state = initialState, action) {
    if (action.type === "UP_DATE_TEXT") {
        switch (action.title) {
            case 'email':
                {
                    return Object.assign({}, state, { email: action.text });
                }
            case 'phoneNumber':
                {
                    return Object.assign({}, state, { phoneNumber: action.text });
                }
            case 'password':
                {
                    return Object.assign({}, state, { password: action.text });
                }
            case 'birthday':
                {
                    return Object.assign({}, state, { birthday: action.text });
                }
            case 'address':
                {
                    return Object.assign({}, state, { address: action.text });
                }
            case 'userName':
                {
                    return Object.assign({}, state, { userName: action.text });
                }
        }
    }
    if (action.type === "SWITCH_SMS") {
        switch (action.title) {
            case 'sms':
                {
                    return Object.assign({}, state, { switchSms: action.status });
                }
            case 'email':
                {
                    return Object.assign({}, state, { switchEmail: action.status });
                }
        }
    }
    if (action.type === "EDIT_USERNAME") {
        return Object.assign({}, state, { isEditUserName: action.status });
    }
    if (action.type === "SHOW_DATE_PICKER") {
        return Object.assign({}, state, { isShowDatePicker: action.status });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map