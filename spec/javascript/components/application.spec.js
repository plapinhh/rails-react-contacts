import React from 'react';
import Application from 'components/Application';
import { shallow } from 'enzyme';

jest.mock('store/apiCalls')

describe('Application', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const renderedComponent = shallow(<Application />)
      await renderedComponent.update()
      expect(renderedComponent.state('contacts').length).toEqual(2)
    })
    
    it('sets the state componentDidMount on error', async () => {
      const renderedComponent = shallow(<Application />)
      await renderedComponent.update()
      expect(renderedComponent.state('errorStatus')).toEqual('Error loading contacts')
    })
  })

  describe('add contact', () => {
    it('sets the state on addContact', async () => {
      const renderedComponent = shallow(<Application />)
      const instance = renderedComponent.instance();
      instance.addContact({id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'})
      expect(renderedComponent.state('contacts').length).toEqual(1)
      expect(renderedComponent.state('contacts')[0].phone).toEqual(123)
    })
  })

  describe('remove contact', () => {
    it('remove contact and set the new state', async () => {
      const renderedComponent = shallow(<Application />)
      const instance = renderedComponent.instance();

      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}
      instance.addContact(contact)
      instance.removeContact(contact)

      expect(renderedComponent.state('contacts').length).toEqual(0)
    })
  })
})