# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
link1 = open('https://toasty-dev.s3-us-west-1.amazonaws.com/eggplant_bag_1.jpg')
link2 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/wall_wooden_map.jpg")
link3 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/ideas.jpg")
link4 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/lui_planter.jpg")
link5 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/succulent_planter_schnauzer.jpg")
link6 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/pastel_botanical.jpg")
link7 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/surfing_pikachu_1.jpg")
link8 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/concrete_planter.jpg")
link9 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/geek_planter.jpg")
link10 = open('https://toasty-dev.s3-us-west-1.amazonaws.com/oil_painting.jpg')
link11 = open('https://toasty-dev.s3-us-west-1.amazonaws.com/toast.jpg')

user1 = User.create!({name: 'Wilson', email: 'wilson@gmail.com', password: 'password'})
user2 = User.create!({name: "Bob", email: "bob@gmail.com", password: "password"})
user3 = User.create!({name: "May", email: "may@gmail.com", password: "password"})
user4 = User.create!({name: "Ryan", email: "ryan@gmail.com", password: "password"})
user5 = User.create!({name: "Melissa", email: "melissa@gmail.com", password: "password"})
user6 = User.create!({name: "Priscilla", email: "priscilla@gmail.com", password: "password"})
user7 = User.create!({name: "Karissa", email: "karissa@gmail.com", password: "password"})

product1 = Product.create!({name: 'Eggplant Bag', description: "Honestly, why wouldn't you want this?", price: 25, artist_id: User.find_by(name: 'Wilson').id})
product2 = Product.create!({name: "Wooden Wall Map", description: "It's the perfect piece for when you want to see the world but don't have time!", price: 70, artist_id: User.find_by(name: 'Wilson').id})
product3 = Product.create!({name: "Bouquet Painting", description: "Great painting for the living room, done on canvas. We deliver all over the world and your order will ship in 2-3 business days. Allow at least 30 days for this item to clear customs.", 
price: 40, artist_id: User.find_by(name: 'Wilson').id})
product4 = Product.create!({name: "Lui Planter - Modern Ceramic Planter", description: "Beige, taupe, and navy color scheme. Great for small plants, such as air plants and succulents. Does not have a drainage hole.", 
price: 13.50, artist_id: User.find_by(name: 'May').id})
product5 = Product.create({name: "Schnauzer Succulent Planter, Shiba Inu Animal Planter, Corgi Gifts, Sausage Dog Planter, Akita Pug Gift Dachshund Gifts,Siberian Husky Gifts", description: "Yes, you really do get all of them. Ideal for succulents, air plants, and cacti. 
    There is a drainage hole in every planter. Plants are not included.", price: 60, artist_id: User.find_by(name: 'May').id})
product6 = Product.create({name: "Botanical Print Set", description: "Frames are included!", 
price: 40, artist_id: User.find_by(name: "Ryan").id})
product7 = Product.create({name: "Surfing Pikachu Postcard", description: "Gotta catch 'em all!", price: 10, artist_id: User.find_by(name: "Wilson").id})
product8 = Product.create({name: 'HORTUM 10ø | Concrete Planter - Plant Pot - Diameter 10cm (4 inch)', description: "Perfect for your houseplants! There is cork protection at the base to prevent scratches and the surface is sealed with a non-toxic product to make it waterproof.", price: 45, artist_id: User.find_by(name: "Melissa").id})
product9 = Product.create({name: 'Glasses Succulent Planter', description: "Brighten up your room with this super cute succulent planter!", price: 13, artist_id: User.find_by(name: "Melissa").id})
product10 = Product.create({name: 'Bright Color Brush Strokes Contemporary Artwork Extra Large Square Colorful Modern Abstract Oversize Wall Art Hand Made Canvas Oil Painting', description: "I really this painting! Check out 'EARTITALY' on Etsy to find more of their artwork!", price: 700, artist_id: User.find_by(name: "Priscilla").id})
product11 = Product.create({name: 'Toast', description: "I asked for toast and got this drawn and sent to me within two minutes. Shout-out to Karissa!", price: 999, artist_id: User.find_by(name: "Karissa").id})


product1.photo.attach(io: link1, filename: 'eggplant.jpg')
product2.photo.attach(io: link2, filename: 'wooden_wall_map.jpg')
product3.photo.attach(io: link3, filename: 'idea.jpg')
product4.photo.attach(io: link4, filename: 'lui_planter.jpg')
product5.photo.attach(io: link5, filename: 'dog_planters.jpg')
product6.photo.attach(io: link6, filename: 'pastel_botanical.jpg')
product7.photo.attach(io: link7, filename: 'surfing_pikachu_1.jpg')
product8.photo.attach(io: link8, filename: 'concrete_planter.jpg')
product9.photo.attach(io: link9, filename: 'geek_planter.jpg')
product10.photo.attach(io: link10, filename: 'oil_painting.jpg')
product11.photo.attach(io: link11, filename: 'toast.jpg')
