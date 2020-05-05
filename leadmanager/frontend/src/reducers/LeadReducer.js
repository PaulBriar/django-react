import { GET_LEADS } from '../actions/types'

const INITIAL_STATE = {
  leads: []
}

export default function LeadReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.leads
     } 
    default:
      return state
  }
}