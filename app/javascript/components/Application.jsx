import React from "react"
import ContactList from "./ContactList"

import { fetchContacts } from '../store/apiCalls'

class Application extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      errorStatus: null
    };
  }

  async componentDidMount() {
    try {
      const data = await fetchContacts()
      this.setState({contacts: data})
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
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