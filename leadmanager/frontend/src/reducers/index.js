import { combineReducers } from 'redux'

import LeadReducer from './LeadReducer'

export default combineReducers({
  leads: LeadReducer
})