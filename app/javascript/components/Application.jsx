import React from "react"
import ContactList from "./ContactList"

class Application extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount(){
    fetch('/api/v1/contacts.json')
      .then((response) => {console.log(response);return response.json()})
      .then((data) => {this.setState({ contacts: data }) });
  }

  render(){
    return(
      <div>
        <h1>Contacts</h1>

        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }

}
export default Application