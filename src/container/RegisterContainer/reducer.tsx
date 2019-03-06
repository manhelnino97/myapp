const initialState = {
  userName: '',
  email: '',
  phoneNumber: '',
  password: '',
  address: '',
}

export default function (state = initialState, action) {

  if (action.type === "UP_DATE_TEXT") {
    switch (action.title) {
      case 'email':
        {
          return {
            ...state,
            email: action.text,
          };
        }
      case 'phoneNumber':
        {
          return {
            ...state,
            phoneNumber: action.text,
          };
        }
      case 'password':
        {
          return {
            ...state,
            password: action.text,
          };
        }
      case 'address':
        {
          return {
            ...state,
            address: action.text,
          };
        }
      case 'userName':
        {
          return {
            ...state,
            userName: action.text,
          };
        }
    }
  }

  return state;
}

