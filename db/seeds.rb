# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

contacts = [
  {
    first_name: "Alexander",
    last_name: "Ivanov",
    email: "ivanoff@mail.ru",
    phone: "+7 757 5995725"
  },
  {
    first_name: "Max",
    last_name: "Mustermann",
    email: "mmustermann@t-online.de",
    phone: "+49 30 53705081"
  },
  {
    first_name: "Pavel",
    last_name: "Lapin",
    email: "plapinhh@gmail.com",
    phone: "+49 157 34280491"
  },
  {
    first_name: "Juan",
    last_name: "Pérez",
    email: "juan.perez@movistar.es",
    phone: "+34 605 993 374"
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    email: "jane_doe@yahoo.com",
    phone: "+1 512 925 9406"
  }
]

contacts.each{|contact| Contact.create(contact)}