import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userReducer from './user_reducer'
import tripReducer from './trip_reducer'

const rootReducer = combineReducers({
	form: formReducer,
	trip: tripReducer,
	user: userReducer
})

export default rootReducer