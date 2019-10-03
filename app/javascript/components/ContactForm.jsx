import React from "react"

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorStatus: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e, fields){
    const attrs = {
      first_name: fields.first_name.value,
      last_name: fields.last_name.value,
      email: fields.email.value,
      phone: fields.phone.value,
    }
    this.props.persistContact(e.target, attrs);
    e.preventDefault();
  }

  render(){
    let formFields = {}
    return(
      <div>
        <form onSubmit={ (e) => { this.handleFormSubmit(e, formFields) } }>
          <input ref={input => formFields.first_name = input} placeholder='First name'/>
          <input ref={input => formFields.last_name = input} placeholder='Last name'/>
          <input ref={input => formFields.email = input} placeholder='Email'/>
          <input ref={input => formFields.phone = input} placeholder='Phone number' />
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default ContactForm