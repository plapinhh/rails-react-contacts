class Contact < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email, :phone

  validates :email, uniqueness: true, format: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
