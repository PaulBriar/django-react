import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getLeads, deleteLead } from '../../actions/LeadActions'

function Leads({ leads, getLeads, deleteLead }) {
  
  useEffect(() => {
    getLeads()
  }, [getLeads, deleteLead])
  
  return (
    <div>
      <h1>Leads List</h1>
      <>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads?.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => deleteLead(lead.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

const MapStateToProps = state => ({
  leads: state.leads.leads
})

const MapDispatchToProps = dispatch => ({
  getLeads: () => dispatch(getLeads()),
  deleteLead: id => dispatch(deleteLead(id))
})

Leads.propTypes = {
  leads: PropTypes.array
}

export default connect(MapStateToProps, MapDispatchToProps)(Leads)
