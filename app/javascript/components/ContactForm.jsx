import React from "react"

class ContactForm extends React.Component {

  static defaultProps = {
    contact: {},
    submitButtonText: 'Save',
    resetButtonText: 'Cancel'
  }

  constructor(props) {
    super(props);
    this.state = {
      errorStatus: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e, fields){
    const attrs = {
      id: this.props.contact.id,
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
          <input ref={input => formFields.first_name = input} defaultValue={this.props.contact.first_name} placeholder='First name'/>
          <input ref={input => formFields.last_name = input} defaultValue={this.props.contact.last_name} placeholder='Last name'/>
          <input ref={input => formFields.email = input} defaultValue={this.props.contact.email} placeholder='Email'/>
          <input ref={input => formFields.phone = input} defaultValue={this.props.contact.phone} placeholder='Phone number' />
          <button type="submit">{this.props.submitButtonText}</button>
          <button type="button" onClick={(e) => this.props.cancelForm(e)}>{this.props.resetButtonText}</button>
        </form>
      </div>
    )
  }
}
export default ContactForm