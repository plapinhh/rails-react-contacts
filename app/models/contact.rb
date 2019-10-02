class Contact < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email, :phone

  validates_uniqueness_of :email
end
