import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactShow from 'components/ContactShow'

import apiCalls from 'store/apiCalls'
jest.mock('store/apiCalls', () => ({
  deleteContact: jest.fn()
}))

describe('ContactShow component', () => {
  describe('handle contact deletion', () => {
    it('should try to persist delete on confirmation', async () => {
      window.confirm = jest.fn().mockImplementation(() => true)

      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}

      const renderedComponent = shallow(<ContactShow contact={contact} />)
      const instance = renderedComponent.instance()

      const handleDelete = jest.spyOn(instance, 'handleDelete')
      const persistDelete = jest.spyOn(instance, 'persistDelete')

      renderedComponent.find("button.delete").simulate('click')

      expect(handleDelete).toHaveBeenCalledWith(contact)
      expect(persistDelete).toHaveBeenCalledWith(contact)
    })

    it('should do nothing on delete cancelation', async () => {
      window.confirm = jest.fn().mockImplementation(() => false)

      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}

      const renderedComponent = shallow(<ContactShow contact={contact} />)
      const instance = renderedComponent.instance()

      const handleDelete = jest.spyOn(instance, 'handleDelete')
      const persistDelete = jest.spyOn(instance, 'persistDelete')

      renderedComponent.find("button.delete").simulate('click')

      expect(handleDelete).toHaveBeenCalledWith(contact)
      expect(persistDelete).not.toHaveBeenCalled()
    })

    it('should delete contact on confirmation', async () => {
      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}
      const removeContact = jest.fn()

      const renderedComponent = shallow(<ContactShow contact={contact} removeContact={removeContact} />)
      const instance = renderedComponent.instance()

      await instance.persistDelete(contact)

      expect(apiCalls.deleteContact).toHaveBeenCalledWith(contact.id)
      expect(removeContact).toHaveBeenCalledWith(contact)
    })
  })

  describe('handle edit mode', () => {
    it('should toggle edit on edit button click', async () => {
      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}
      const toggleEdit = jest.fn()

      const renderedComponent = shallow(<ContactShow contact={contact} toggleEdit={toggleEdit} />)
      const instance = renderedComponent.instance()

      renderedComponent.find("button.edit").simulate('click')

      expect(toggleEdit).toHaveBeenCalled()
    })
  })
})