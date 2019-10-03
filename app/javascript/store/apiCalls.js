export const fetchContacts = async () => {
  const response = await fetch('/api/v1/contacts.json')
  if(response.status >= 400) {
    throw(new Error('Error loading contacts'))
  } else {
    return await response.json()
  }
}