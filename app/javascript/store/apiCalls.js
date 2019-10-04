export const fetchContacts = async () => {
  const response = await fetch('/api/v1/contacts.json')
  if(response.status >= 400) {
    throw(new Error('Error loading contacts'))
  } else {
    return await response.json()
  }
}

export const createContact = async (attrs) => {
  let json = JSON.stringify({contact: attrs })
  const response = await fetch('/api/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json,
  })
  if(response.status >= 400) {
    throw(new Error('Error adding contact'))
  } else {
    return await response.json()
  }
}

export const deleteContact = async (id) => {
  const response = await fetch(`/api/v1/contacts/${id}`, {
    method: 'DELETE'
  })
  if(response.status >= 400) {
    throw(new Error('Error deleting contact'))
  } else {
    return
  }
}
