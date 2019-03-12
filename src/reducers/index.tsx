import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import registerReducer from "../container/RegisterContainer/reducer";
import loginReducer from "../container/LoginContainer/reducer";
import profileReducer from "../container/ProfileContainer/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	registerReducer,
	loginReducer,
	profileReducer
});
