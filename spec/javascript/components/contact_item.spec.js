import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactItem from 'components/ContactItem'

describe('ContactItem component', () => {
  describe('render contact in show or edit mode', () => {
    it('render show component by default', () => {
      const wrapper = shallow(<ContactItem />)

      expect(wrapper.find('ContactShow').length).toBe(1)
      expect(wrapper.find('ContactEdit').length).toBe(0)
    })

    it('render edit/show forms in change after toggling', async () => {
      const contact = {id: 0, first_name: 'A', last_name: 'B', phone: 123, email: 'C'}
      const wrapper = mount(<ContactItem contact={contact} />)
      const instance = wrapper.instance()

      instance.toggleEdit()
      wrapper.update()

      expect(wrapper.find('ContactEdit').length).toBe(1)
      expect(wrapper.find('ContactShow').length).toBe(0)

      instance.toggleEdit()
      wrapper.update()

      expect(wrapper.find('ContactEdit').length).toBe(0)
      expect(wrapper.find('ContactShow').length).toBe(1)
    })
  })
})