import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactForm from 'components/ContactForm'

describe('ContactForm component', () => {
  describe('persistContact on form submit', () => {
    it('persist contact on form submit', async () => {
      const persistContact = jest.fn();
      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}

      const renderedComponent = mount(<ContactForm contact={contact} persistContact={persistContact} />)
      const instance = renderedComponent.instance();

      const handleFormSubmit = jest.spyOn(instance, 'handleFormSubmit');

      renderedComponent.find("input.first-name").instance().value = "Test";
      renderedComponent.find("input.last-name").instance().value = "Name";
      // renderedComponent.find("input.phone").instance().value = "phone";
      renderedComponent.find("input.email").instance().value = "user@email.com";

      renderedComponent.find("form").simulate('submit');

      expect(handleFormSubmit).toHaveBeenCalled();
      expect(persistContact).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
        id: 0, first_name: 'Test', last_name: 'Name', phone: '123', email: 'user@email.com'
      }));
    })
  })
})