import { GET_LEADS, DELETE_LEAD } from '../actions/types'

const INITIAL_STATE = {
  leads: [],
  sessionToken: null
}

export default function LeadReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LEADS:
      console.log(action.headers)
      return {
        ...state,
        leads: action.leads,
        sessionToken: action.headers
      }
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.id),
      };
    default:
      return state
  }
}