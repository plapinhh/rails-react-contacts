import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactList from 'components/ContactList'

describe('ContactList component', () => {
  describe('when contacts prop is undefined', () => {
    it('render No contacts', () => {
      const renderedComponent = shallow(<ContactList />);
      expect(renderedComponent.find('ContactItem').length).toEqual(0);
      expect(renderedComponent.text()).toMatch('No added contacts')
    })
  })

  describe('when contacts prop is an empty array', () => {
    it('render No contacts', () => {
      const renderedComponent = shallow(<ContactList contacts={[]} />);
      expect(renderedComponent.find('ContactItem').length).toEqual(0);
      expect(renderedComponent.text()).toMatch('No added contacts')
    })
  })

  describe('when contacts list is given', () => {
    it('render contact items', () => {
      const contacts = [{id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}]
      const renderedComponent = mount(<ContactList contacts={contacts}  />)

      expect(renderedComponent.find('ContactItem').length).toEqual(1);

      expect(renderedComponent.text()).toMatch(/A B/)
      expect(renderedComponent.text()).toMatch(/Email: C/)
      expect(renderedComponent.text()).toMatch(/Phone: 123/)
    })
  })
})