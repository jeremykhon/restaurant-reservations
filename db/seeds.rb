RestaurantPhoto.destroy_all
Booking.destroy_all
TimeSlot.destroy_all
Restaurant.destroy_all
Cuisine.destroy_all
User.destroy_all

User.create!(email: "jeremy@eatigo.com", name: "jeremy", password: "1234qwer93", admin: true)

international = Cuisine.create!(name: "International")
european = Cuisine.create!(name: "European")
german = Cuisine.create!(name: "German")
chinese = Cuisine.create!(name: "Chinese")
japanese = Cuisine.create!(name: "Japanese")
indian = Cuisine.create!(name: "Indian")
korean = Cuisine.create!(name: "Korean")
french = Cuisine.create!(name: "French")
italian = Cuisine.create!(name: "Italian")
mongolian = Cuisine.create!(name: "Mongolian")
steakhouse = Cuisine.create!(name: "Steakhouse")
thai = Cuisine.create!(name: "Thai")

Restaurant.create!(
  name: "The Continental",
  description: "Designed to capture the sophisticated charm of grand European cafés, the Continental’s menu offers European cuisine, serving pastas, food from the josper – a combination of grill and oven – and signature dishes, like the crab puttanesca or the red snapper fillet. To complement them, sommelier Eric Chan will give his recommendation on the best wine pairings.",
  user: User.first,
  cuisine: european,
  location: "Admiralty",
  capacity: 50,
  price_level: 4
)

Restaurant.create!(
  name: "Mr and Mrs Fox",
  description: "Mr and Mrs Fox sports playful interiors, characteristics of the titular animal. Menu highlights include applewood smoked free-range chicken and their signature steaks, all of which are black angus, 270-day grain-fed, dry-aged for 35 days and has a marbling score of at least M5. There are also small plate options like beef and black bean chili tortilla chips for those who want lighter bites.",
  user: User.first,
  cuisine: steakhouse,
  location: "Quarry Bay",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Pizza Express",
  description: "PizzaExpress is really proud of its pizzas, its love for music and supporting meaningful causes in the community. Since 1965 the restaurants have been serving hand-crafted pizzas made with the freshest ingredients. Each pizza is made to order by skilled Pizzaiolos (pizza chefs). Beautiful pizza served in a socially-responsible and creative environment; this truly is ‘Pizza in Style’",
  user: User.first,
  cuisine: italian,
  location: "Kennedy Town",
  capacity: 50,
  price_level: 2
)

Restaurant.create!(
  name: "Dodam Chicken",
  description: "Bringing one of South Korea’s most sought after food to Hong Kong is Dodam Chicken, which serves authentic Korean chicken at the Lee Theatre Plaza on Percival Street, Causeway Bay. Its signature here is, of course, its mouthwatering crispy chicken. Their Hot Mania Chicken and Dodam Maekom cheese chicken (boneless) are must-try items here. Beyond chicken, diners must go for the Hwaggaduk fries, using Korean-style cheese that has a satisfying tinge of sweetness to it.",
  user: User.first,
  cuisine: korean,
  location: "Causeway Bay",
  capacity: 50,
  price_level: 2
)

Restaurant.create!(
  name: "Kamameshi",
  description: "Located on Tang Lung Street, Kamameshi brings authentic Japanese Kamameshi dishes to Hong Kong with its exclusive menu of remarkable crab sets, providing a perfect choice for Japanese fine dining in Causeway Bay. Offering guests a wonderfully relaxing atmosphere, Kamameshi presents an excellent selection of Kamameshi, a classic Japanese rice dish originally from the historical city of Nara, along with many other options including Deep Fried Sea Uni Tempura, Aji Fry, Hotaruika-Okitsuke, Simmered Hamachi Jaw with Japanese sauce, etc. Don’t miss out on an opportunity to witness the unique menu at Kamameshi and treat your taste buds to an unforgettable dining experience.",
  user: User.first,
  cuisine: japanese,
  location: "Causeway Bay",
  capacity: 50,
  price_level: 2
)

Restaurant.create!(
  name: "The Square",
  description: "At the Square restaurant, you will find a world of International cuisines in a relaxing and casual ambiance with emphasis on seafood and seasonal ingredients along with healthy balanced choices. In addition, business luncheons, afternoon tea, after hour drinks are served to cater to your different tastes. The Square’s regular lunch and dinner buffet themes includes seafood on ice, fresh salads, Asian and Western hot dishes, Indian curries, delightful desserts, gourmet ice-creams and healthy options for kids, or simply go for the a-la-carte menu for a lighter option.",
  user: User.first,
  cuisine: korean,
  location: "Jordan",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Nomads",
  description: "Set in a casual and comfortable atmosphere, the restaurant is paved with earth tone tiles splashed with a burnt orange wash, exuding a warm ambience. An all-you-can-eat Mongolian style buffet where you can create your own main course from a wide range of fresh meats, vegetables, sauces and spices.",
  user: User.first,
  cuisine: mongolian,
  location: "Tsim Sha Tsui",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Red House",
  description: "Redhouse, the sister restaurant of Gaia Group’s newly opened SHÈ in Lane Crawford ifc mall, is benchmarked to set the trend for Modern Chinese cuisine that is rooted upon authenticity instead of traditionalism. With an extensive menu that ranges from Redhouse Signature Roast Meats and Premium Seafood Dishes to Vegetarian Bites and Dim Sum, guests are encouraged to embrace the customary approach of sharing dishes that is deeply rooted in the Chinese culture.",
  user: User.first,
  cuisine: chinese,
  location: "Central",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Feast",
  description: "Feast (Food by EAST) is their big bustling café on the 1st floor. Brimming with authentic Asian specialties with an Asian and Western focus, Feast’s philosophy is “simple things, done well”. Here, you can enjoy a great selection of delicious comfort food, from a tasty breakfast and lunch to a relaxing dinner.",
  user: User.first,
  cuisine: international,
  location: "Tai Koo",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Porterhouse",
  description: "Porterhouse brings a new concept of steakhouse dining to the California Tower. Re-establishing with sleek new interiors and a new menu. Their highlight here are the different quality cuts and family-friendly weekend brunch buffet, led by executive chef Angelo Vecchio. Check with the in-house sommelier for recommended wine pairings with your food, or enjoy one of their signature cocktails, handcrafted by the professional mixologists at the bar.",
  user: User.first,
  cuisine: steakhouse,
  location: "Tai Koo",
  capacity: 50,
  price_level: 3
)

Restaurant.create!(
  name: "Wang Jia Sha",
  description: "Infused with a younger and trendy dining concept, Wang Jia Sha Mong Kok offers casual all-day dining serving authentic Shanghainese cuisine with a modern touch, serving signatures like Iberico pork chop, Shanghainese fried rice rolls and abalone stone pot rice. Interiors are expectedly oriental, but given a sleek, modern interpretation, resulting in a comfortable, stylish environment befitting of the cuisine’s quality.",
  user: User.first,
  cuisine: chinese,
  location: "Kowloon Tong",
  capacity: 50,
  price_level: 2
)

Restaurant.create!(
  name: "New Bangkok",
  description: "Located in iSquare, New Bangkok Restaurant serves up a wide range of innovative Thai fare at the heart of Tsim Sha Tsui. The restaurant features a cosy yet modern dining experience, serving quality Thai cuisine which includes Crispy Fried king Prawn with Garlic, Baked Seafood Fried Rice in Thai Young Coconut, Deep Fried Thai's Sprig Rolls, Tom Yum Goong Spicy Hot & Sour Soup and Curry Crab. Determined to serve customers hearty Thai dishes just the way they should be but in a contemporary setting, New Bangkok Restaurant is a no-frills Thai eatery that impresses with their healthy Thai flavours.",
  user: User.first,
  cuisine: thai,
  location: "Jordan",
  capacity: 50,
  price_level: 2
)

Restaurant.all.each do |restaurant|
  d = Time.now.beginning_of_hour
  d -= 1440.minutes
  (1..200).each do |i|
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
  end
  puts "----------------"
end 

# Restaurant.all.each do |restaurant|
#   (1..20).each do |i|
#     Review.create!(user: User.first, restaurant: restaurant, content: Faker::TvShows::Simpsons.quote, rating: [1,2,3,4,5].sample)
#   end
# end