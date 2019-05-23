Review.destroy_all
RestaurantPhoto.destroy_all
Booking.destroy_all
TimeSlot.destroy_all
Restaurant.destroy_all
Cuisine.destroy_all
User.destroy_all

p "destroyed all"

User.create!(email: "jeremy@eatigo.com", name: "Jeremy", password: ENV["ADMIN_PW"], admin: true)
User.create!(email: "kyle@eatigo.com", name: "Kyle", password: "testtest", admin: false)
User.create!(email: "steve@eatigo.com", name: "Steve", password: "testtest", admin: false)
User.create!(email: "jim@eatigo.com", name: "Jim", password: "testtest", admin: false)
User.create!(email: "bobby@eatigo.com", name: "Bobby", password: "testtest", admin: false)
User.create!(email: "kenny@eatigo.com", name: "Kenny", password: "testtest", admin: false)
User.create!(email: "stan@eatigo.com", name: "Stan", password: "testtest", admin: false)
User.create!(email: "jenny@eatigo.com", name: "Jenny", password: "testtest", admin: false)
User.create!(email: "richard@eatigo.com", name: "Richard", password: "testtest", admin: false)
User.create!(email: "dany@eatigo.com", name: "Dany", password: "testtest", admin: false)
User.create!(email: "bart@eatigo.com", name: "Bart", password: "testtest", admin: false)
User.create!(email: "homer@eatigo.com", name: "Homer", password: "testtest", admin: false)
User.create!(email: "nick@eatigo.com", name: "Nick", password: "testtest", admin: false)
User.create!(email: "jeffrey@eatigo.com", name: "Jeffrey", password: "testtest", admin: false)
User.create!(email: "david@eatigo.com", name: "David", password: "testtest", admin: false)
User.create!(email: "john@eatigo.com", name: "John", password: "testtest", admin: false)
User.create!(email: "lisa@eatigo.com", name: "Lisa", password: "testtest", admin: false)
User.create!(email: "terry@eatigo.com", name: "Terry", password: "testtest", admin: false)
User.create!(email: "joe@eatigo.com", name: "Joe", password: "testtest", admin: false)

p "created users"

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

p "created cuisines"

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

p "created restaurants"

reviews = [
  ["Good location, good service, excellent food, spectacular environment!", 5],
  ["The drink, food and service are all excellent. Exactly what to expect for an amazing date night.", 3],
  ["food was delicious but service needs to improve", 4],
  ["Good food and nice environment", 4],
  ["Food was decent overall and it was good value for money", 4],
  ["Delicious food matched with professional, efficient and friendly service.", 4],
  ["Tasty food at a good price, what more could you ask?", 4],
  ["THe chicken was a bit dry", 3],
  ["Very dissapointed to be honest, my food was overcooked and looked like a piece of coal", 1],
  ["mediocre food at a mediocre price", 3],
  ["one of the best restaurants for this type of food", 4],
  ["food was not bad", 2],
  ["really really good!", 4],
  ["amazing food, everything I expected and more. The staff was also friendly and very attentive", 4],
  ["Staff as attentive and I really like the decor", 4],
  ["the service could be better, but the food was okay", 3],
  ["Great food, excellent service and convenient location", 4],
  ["Not as good as I expected, really had my hopes up for this restaurant", 2],
  ["This place gave me food poisoning", 1],
  ["The staff made every effort to avoid taking my order. that otherwise, food was pretty good", 2],
  ["really good food if you have no tastebuds", 2],
  ["5 stars!~", 5],
  ["this is my new favorite place", 4],
  ["I just come here cos I'm rly cheap", 4],
  ["everything here tasted like poop. don't ask", 1],
  ["Can't wait to come back again", 5],
  ["I would not have come if not for the discount, but I was pleasantly surprised", 4],
  ["The food here is amazing and it was such a good deal, definitely recommend!", 4],
  ["Eating here cured my cancer", 5]
]

Restaurant.all.each do |restaurant|
  d = Time.now.beginning_of_day
  d += 90.minutes
  60.times do |i|
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 40, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 40, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 30, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 10, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 10, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 20, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 30, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 30, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 40, capacity: 20, restaurant: restaurant)
    d += 150.minutes

    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 30, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 10, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 10, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 10, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 20, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 30, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    d += 30.minutes
    timeslot = TimeSlot.create!(time: d, discount: 50, capacity: 20, restaurant: restaurant)
    
    d += 690.minutes
    p "created timeslot #{i}"
  end

  6.times do
    review = reviews.sample
    Review.create!(user: User.all.sample, content: review[0], rating: review[1], restaurant: restaurant )
  end

  p "-------------"
end