import React from 'react'
import { shallow } from 'enzyme'
import ContactNew from 'components/ContactNew'

jest.mock('store/apiCalls')

describe('ContactNew component', () => {
  describe('persistContact on form submit', () => {
    it('call provided addContact method', async () => {
      const addContact = jest.fn();
      const form = {reset: jest.fn()};

      const renderedComponent = shallow(<ContactNew addContact={addContact} />)
      const instance = renderedComponent.instance();

      await instance.persistContact(form, {})

      expect(addContact).toHaveBeenCalled();
      expect(form.reset).toHaveBeenCalled();
    })

    it('render error for invalid contact', async () => {
      const addContact = jest.fn();
      const form = {reset: jest.fn()};

      const renderedComponent = shallow(<ContactNew addContact={addContact} />)
      const instance = renderedComponent.instance();

      await instance.persistContact(form, {})

      expect(addContact).not.toHaveBeenCalled();
      expect(form.reset).not.toHaveBeenCalled();
      
      expect(renderedComponent.state('errorStatus')).toEqual('Error adding contact')
    })
  })
})