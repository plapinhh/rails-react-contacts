import React from 'react'
import { shallow } from 'enzyme'
import ContactEdit from 'components/ContactEdit'

import apiCalls from 'store/apiCalls'
jest.mock('store/apiCalls', () => ({
  updateContact: jest.fn()
}))

describe('ContactEdit component', () => {
  describe('persistContact on form submit', () => {
    it('call updateContact method', async () => {
      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: '123', email: 'C'}
      const updated_contact = {id: 0, first_name: 'Test', last_name: 'Name', phone: '123', email: 'user@email.com'}
      
      apiCalls.updateContact.mockReturnValue(updated_contact)

      const toggleEdit = jest.fn();

      const renderedComponent = shallow(<ContactEdit contact={contact} toggleEdit={toggleEdit} />)
      const instance = renderedComponent.instance();

      const object_assign = jest.spyOn(Object, 'assign')

      await instance.persistContact(null, contact)

      expect(apiCalls.updateContact).toHaveBeenCalledWith(expect.objectContaining(contact));
      expect(object_assign).toHaveBeenCalledWith(expect.objectContaining(contact), expect.objectContaining(updated_contact));
      expect(instance.props.toggleEdit).toHaveBeenCalled();
    })
  })
})