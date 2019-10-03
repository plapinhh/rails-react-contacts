import React from 'react';
import Application from 'components/Application';
import { shallow } from 'enzyme';

jest.mock('store/apiCalls')

describe('Application', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const renderedComponent = await shallow(<Application />)
      await renderedComponent.update()
      expect(renderedComponent.state('contacts').length).toEqual(2)
    })
    
    it('sets the state componentDidMount on error', async () => {
      const renderedComponent = await shallow(<Application />)
      await renderedComponent.update()
      expect(renderedComponent.state('errorStatus')).toEqual('Error loading contacts')
    })
  })
})