class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    render html: nil, layout: true
  end
end
