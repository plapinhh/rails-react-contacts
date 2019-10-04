export const fetchContacts = jest.fn()
  .mockImplementationOnce(() => ([
      { id: 1, first_name: 'A', last_name: 'B', email: 'C', phone: 12345 },
      { id: 2, first_name: 'X', last_name: 'Y', email: 'Z', phone: 67890 },
  ]))
  .mockImplementationOnce(() => {
    throw(new Error('Error loading contacts'))
  })

export const createContact = jest.fn()
  .mockImplementationOnce(() => (
  	{ id: 1, first_name: 'A', last_name: 'B', email: 'C', phone: 12345 }
  ))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding contact'))
  })

export const updateContact = jest.fn()
  .mockImplementationOnce(() => (
  	{ id: 1, first_name: 'A', last_name: 'B', email: 'C', phone: 12345 }
  ))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding contact'))
  })

export const deleteContact = jest.fn()
  .mockImplementationOnce(() => (
  	{}
  ))
  .mockImplementationOnce(() => {
    throw(new Error('Error deleting contact'))
  })