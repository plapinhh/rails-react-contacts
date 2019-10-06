import React from "react"

import ContactShow from "./ContactShow"
import ContactEdit from "./ContactEdit"

class ContactItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(contact){
    this.setState({editing: !this.state.editing})
  }
  
  render(){
    return(
      <div>
        {this.state.editing ?
          <ContactEdit contact={this.props.contact} toggleEdit={this.toggleEdit} />
          :
          <ContactShow contact={this.props.contact} toggleEdit={this.toggleEdit} removeContact={this.props.removeContact} />
        }
      </div>
    )      
  }
}

export default ContactItem