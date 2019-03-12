const initialState = {
    email: '',
    password: '',
};
export default function (state = initialState, action) {
    if (action.type === "UP_DATE_TEXT") {
        switch (action.title) {
            case 'email':
                {
                    return Object.assign({}, state, { email: action.text });
                }
            case 'password':
                {
                    return Object.assign({}, state, { password: action.text });
                }
        }
    }
    return state;
}
//# sourceMappingURL=reducer.js.map