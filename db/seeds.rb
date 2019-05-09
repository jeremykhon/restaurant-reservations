# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "jeremy@eatigo.com", name: "jeremy", password: "testtest")
User.create!(email: "maya@eatigo.com", name: "maya", password: "testtest")

Cuisine.create!(name: "Italian")
Cuisine.create!(name: "German")
Cuisine.create!(name: "Chinese")
Cuisine.create!(name: "Japanese")
Cuisine.create!(name: "Indian")
Cuisine.create!(name: "Korean")
Cuisine.create!(name: "French")

Restaurant.create!(name: "Mcdonalds", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 50, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Burger King", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 50, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Mos Burger", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 40, allowed_table_sizes: [2, 4, 6], booking_window: 7)
Restaurant.create!(name: "Shake Shack", description: "the ol burger place", user: User.all.sample, cuisine: Cuisine.all.sample, location: "central", capacity: 40, allowed_table_sizes: [2, 4, 6], booking_window: 7)

TimeSlot.create!(time: Time.parse('12:30'), date: Date.parse("2019-05-08"), discount: 50, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('13:30'), date: Date.parse("2019-05-08"), discount: 40, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('14:30'), date: Date.parse("2019-05-08"), discount: 30, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('15:30'), date: Date.parse("2019-05-08"), discount: 20, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('16:30'), date: Date.parse("2019-05-08"), discount: 10, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('17:30'), date: Date.parse("2019-05-08"), discount: 40, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('18:30'), date: Date.parse("2019-05-08"), discount: 50, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('19:30'), date: Date.parse("2019-05-08"), discount: 40, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('12:00'), date: Date.parse("2019-05-08"), discount: 50, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('13:00'), date: Date.parse("2019-05-08"), discount: 40, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('14:00'), date: Date.parse("2019-05-08"), discount: 30, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('15:00'), date: Date.parse("2019-05-08"), discount: 20, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('16:00'), date: Date.parse("2019-05-08"), discount: 10, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('17:00'), date: Date.parse("2019-05-08"), discount: 40, capacity: 10, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('18:00'), date: Date.parse("2019-05-08"), discount: 50, capacity: 20, restaurant: Restaurant.all.sample)
TimeSlot.create!(time: Time.parse('19:00'), date: Date.parse("2019-05-08"), discount: 40, capacity: 20, restaurant: Restaurant.all.sample)
