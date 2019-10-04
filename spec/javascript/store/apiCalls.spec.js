import { fetchContacts, createContact, deleteContact } from 'store/apiCalls'

describe('apiCalls', () => {
  describe('fetchContacts', () => {
    it('returns an array if status code is ok', () => {
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

  describe('createContact', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({})
        }),
      }))

      expect(createContact()).resolves.toEqual({})
    })

    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }))

      expect(createContact()).rejects.toEqual(Error('Error adding contact'))
    })
  })

  describe('deleteContact', () => {
    it('returns status 204 if contact is deleted', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 204,
        json: () => new Promise((resolve, reject) => {
          resolve()
        })
      }))

      expect(deleteContact()).resolves.toEqual()
    })

    it('throws an error if contact is not found', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 404,
      }))

      expect(deleteContact()).rejects.toEqual(Error('Error deleting contact'))
    })
  })
})