import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactForm from 'components/ContactForm'

describe('ContactForm component', () => {
  describe('persistContact on form submit', () => {
    it('persist contact on form submit', async () => {
      const persistContact = jest.fn();

      const renderedComponent = mount(<ContactForm persistContact={persistContact} />)
      const instance = renderedComponent.instance();

      const spy = jest.spyOn(instance, 'handleFormSubmit');

      renderedComponent.find('input').first().simulate('change', { target: { value: 'Test' } })
      renderedComponent.find("form").simulate('submit');

      expect(spy).toHaveBeenCalled();
      expect(persistContact).toHaveBeenCalled();
    })
  })
})