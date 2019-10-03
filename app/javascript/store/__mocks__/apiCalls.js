export const fetchContacts = jest.fn()
  .mockImplementationOnce(() => ([
      { id: 1, first_name: 'A', last_name: 'B', email: 'C', phone: 12345 },
      { id: 2, first_name: 'X', last_name: 'Y', email: 'Z', phone: 67890 },
  ]))
  .mockImplementationOnce(() => {
    throw(new Error('Error loading contacts'))
  })