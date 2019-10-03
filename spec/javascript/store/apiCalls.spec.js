import { fetchContacts } from 'store/apiCalls'

describe('apiCalls', () => {
  it('returns an object if status code is ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve([])
      }),
    }))

    expect(fetchContacts()).resolves.toEqual([])
  })

  it('throws an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(fetchContacts()).rejects.toEqual(Error('Error loading contacts'))
  })
})