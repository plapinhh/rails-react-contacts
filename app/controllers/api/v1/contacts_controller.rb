class Api::V1::ContactsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

  def index
    render json: Contact.all
  end

  def create
    contact = Contact.create!(contact_params)
    render json: contact
  end

  def update
    contact = Contact.find(params[:id])
    contact.update_attributes!(contact_params)
    render json: contact
  end

  def destroy
    Contact.destroy(params[:id])
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone)
  end

  def unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors}, status: :unprocessable_entity
  end

  def not_found_response(exception)
    render json: {error: exception.message}, status: :not_found
  end

end