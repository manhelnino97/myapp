const initialState = {
  editable: true,
  isEditUserName: false,
  switchSms: false,
  switchEmail: false,
  isShowDatePicker: false,
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
      case 'birthday':
        {
          return {
            ...state,
            birthday: action.text,
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

  if (action.type === "SWITCH_SMS") {
    switch (action.title) {
      case 'sms':
        {
          return {
            ...state,
            switchSms: action.status,
          };
        }
      case 'email':
        {
          return {
            ...state,
            switchEmail: action.status,
          };
        }
    }
  }

  if (action.type === "EDIT_USERNAME") {
    return {
      ...state,
      isEditUserName: action.status,
    };
  }

  if (action.type === "SHOW_DATE_PICKER") {
    return {
      ...state,
      isShowDatePicker: action.status,
    };
  }


  return state;
}

