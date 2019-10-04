import React from "react"

import { deleteContact } from '../store/apiCalls'

class ContactItem extends React.Component {

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
          <button onClick={() => this.handleDelete(this.props.contact)}>Delete</button>
          {this.state.errorStatus}
        </dd>
      </div>
    )      
  }
}

export default ContactItem