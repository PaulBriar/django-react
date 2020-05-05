import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getLeads } from '../../actions/LeadActions'

function Leads({ leads, getLeads }) {
  
  useEffect(() => {
    getLeads()
  },[])

  return (
    <div>
      <h1>Leads List</h1>
      <div>
        {leads?.map(lead => (
          <p>{lead.name}</p>
        ))}
      </div>
    </div>
  )
}

const MapStateToProps = state => ({
  leads: state.leads.leads
})

const MapDispatchToProps = dispatch => ({
  getLeads: () => dispatch(getLeads())
})

Leads.propTypes = {
  leads: PropTypes.array
}

export default connect(MapStateToProps, MapDispatchToProps)(Leads)
