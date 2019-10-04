import React from "react"

import { deleteContact } from '../store/apiCalls'

class ContactShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorStatus: null
    };
    this.handleDelete = this.handleDelete.bind(this)
    this.persistDelete = this.persistDelete.bind(this)
  }

  handleDelete(contact){
    if (confirm("Delete contact?")) {
      this.persistDelete(contact)
    }
  }

  async persistDelete(contact) {
    try {
      await deleteContact(contact.id)
      this.props.removeContact(contact)
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }
  
  render(){
    return(
      <div>
        <dt>{this.props.contact.first_name} {this.props.contact.last_name}</dt>
        <dd>Email: {this.props.contact.email}</dd>
        <dd>Phone: {this.props.contact.phone}</dd>
        <dd>
          <button className="edit" onClick={() => this.props.toggleEdit()}>Edit</button>
          <button className="delete" onClick={() => this.handleDelete(this.props.contact)}>Delete</button>
        </dd>
        {this.state.errorStatus}
      </div>
    )      
  }
}

export default ContactShow