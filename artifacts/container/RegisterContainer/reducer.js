const initialState = {
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    address: '',
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
    return state;
}
//# sourceMappingURL=reducer.js.map