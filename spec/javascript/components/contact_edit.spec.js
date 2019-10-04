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
      const renderedComponent = shallow(<ContactEdit />)
      const instance = renderedComponent.instance();

      const object_assign = jest.spyOn(Object, 'assign')

      await instance.persistContact(null, {})

      expect(apiCalls.updateContact).toHaveBeenCalled();
      expect(object_assign).toHaveBeenCalled();
    })
  })
})