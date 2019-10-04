require 'rails_helper'

RSpec.describe 'Contacts', type: :request do

  before(:each) do
    @contact = Contact.create({
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane_doe@yahoo.com',
      phone: '+1 512 925 9406'
    })
  end

  describe 'INDEX /api/v1/contacts' do
    it 'renders a list of contacts' do
      get api_v1_contacts_path
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json.length).to eq(1)
      expect(json[0]['email']).to eq('jane_doe@yahoo.com')
    end
  end

  describe 'CREATE /api/v1/contacts' do
    it 'creates a new contact' do
      post api_v1_contacts_path(contact: {
        first_name: 'Max',
        last_name: 'Mustermann',
        email: 'mmustermann@t-online.de',
        phone: '+49 30 53705081'
      })
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json['email']).to eq('mmustermann@t-online.de')

      get api_v1_contacts_path
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json.length).to eq(2)
    end

    it 'returns an error for incomplete contact' do
      post api_v1_contacts_path(contact: {
        first_name: 'Max',
        last_name: '',
        email: 'mmustermann@t-online.de'
      })
      expect(response).to have_http_status(422)

      error_msg = response.body
      expect(error_msg).to match(/Last name can\'t be blank/)
      expect(error_msg).to match(/Phone can\'t be blank/)

      get api_v1_contacts_path
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json.length).to eq(1)
    end

    it 'returns an error for non-unique email address' do
      post api_v1_contacts_path(contact: {
        first_name: 'Max',
        last_name: 'Mustermann',
        email: 'jane_doe@yahoo.com',
        phone: '+49 30 53705081'
      })
      expect(response).to have_http_status(422)

      error_msg = response.body
      expect(error_msg).to match(/Email has already been taken/)

      get api_v1_contacts_path
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json.length).to eq(1)
    end
  end

  describe 'UPDATE /api/v1/contacts/:id' do
    it 'updates a contact' do
      patch api_v1_contact_path(id: @contact.id, contact: {first_name: 'Janet'})
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json['first_name']).to eq('Janet')

      get api_v1_contacts_path
      expect(response).to have_http_status(200)

      json = JSON.parse(response.body)
      expect(json.length).to eq(1)
    end

    it 'returns an error for incomplete contact' do
      patch api_v1_contact_path(id: @contact.id, contact: {first_name: ''})
      expect(response).to have_http_status(422)

      error_msg = response.body
      expect(error_msg).to match(/First name can\'t be blank/)
    end

    it 'returns an error for non-unique email address' do
      other_contact = Contact.create({
        first_name: 'Max',
        last_name: 'Mustermann',
        email: 'mmustermann@t-online.de',
        phone: '+49 30 53705081'
      })

      patch api_v1_contact_path(id: other_contact.id, contact: {email: @contact.email})
      expect(response).to have_http_status(422)

      error_msg = response.body
      expect(error_msg).to match(/Email has already been taken/)
    end
  end

  describe 'DESTROY /api/v1/contacts/:id' do
    it 'deletes a contact' do
      delete api_v1_contact_path(id: @contact.id)
      expect(response).to have_http_status(204)
    end

    it 'returns an error for unknown contact id' do
      delete api_v1_contact_path(id: 'x')
      expect(response).to have_http_status(404)
    end
  end

end
