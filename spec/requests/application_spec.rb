require 'rails_helper'

RSpec.describe "Application", type: :request do
  describe 'GET /' do
    it 'renders react container' do
      get root_path
      expect(response).to have_http_status(200)
      expect(response.body).to include('data-react-class="Application"')
    end
  end
end
