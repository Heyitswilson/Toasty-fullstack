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
link6 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/stone.jpg")
link7 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/falcon_carving.jpg")
link8 = open("https://toasty-dev.s3-us-west-1.amazonaws.com/magikarp_hat.jpg")

user1 = User.create!({name: 'Jack', email: 'jack@gmail.com', password: 'password'})
user2 = User.create!({name: "Bob", email: "bob@gmail.com", password: "password"})
user3 = User.create!({name: "May", email: "may@gmail.com", password: "password"})
user4 = User.create!({name: "Ryan", email: "ryan@gmail.com", password: "password"})

product1 = Product.create!({name: 'Eggplant Bag', description: "Honestly, why wouldn't you want this?", price: 25, artist_id: User.find_by(name: 'Jack').id, category: "Clothing & Shoes"})
product2 = Product.create!({name: "Wooden Wall Map", description: "It's the perfect piece for when you want to see the world but don't have time!", price: 70, artist_id: User.find_by(name: 'Jack').id, category: "Home & Living"})
product3 = Product.create!({name: "Bouquet Painting", description: "Great painting for the living room, done on canvas. We deliver all over the world and your order will ship in 2-3 business days. Allow at least 30 days for this item to clear customs.", 
price: 40, artist_id: User.find_by(name: 'Jack').id, category: "Home & Living"})
product4 = Product.create!({name: "Lui Planter - Modern Ceramic Planter", description: "Beige, taupe, and navy color scheme. Great for small plants, such as air plants and succulents. Does not have a drainage hole.", 
price: 13.50, artist_id: User.find_by(name: 'May').id, category: "Art & Collectibles"})
product5 = Product.create({name: "Schnauzer Succulent Planter, Shiba Inu Animal Planter, Corgi Gifts, Sausage Dog Planter, Akita Pug Gift Dachshund Gifts,Siberian Husky Gifts", description: "Yes, you really do get all of them. Ideal for succulents, air plants, and cacti. 
    There is a drainage hole in every planter. Plants are not included.", price: 60, artist_id: User.find_by(name: 'May').id, category: "Art & Collectibles"})
product6 = Product.create({name: "Medium-wrapped Stone", description: "Probably a fancy paperweight. Guaranteed to possibly be a good conversation starter", 
price: 65, artist_id: User.find_by(name: "Ryan").id, category: "Vintage"})
product7 = Product.create({name: "Handcarved Falcon", description: "Falcon woodcarving, made in one piece. It measures 15.7 x 4.7 x 4.7 inches.", price: 700, artist_id: User.find_by(name: "Ryan").id, category: "Art & Collectibles"})
product8 = Product.create({name: 'Magikarp Hat', description: "Magikarp hat to keep you warm!", price: 45, artist_id: User.find_by(name: "Ryan").id, category: "Clothing & Shoes"})


product1.photo.attach(io: link1, filename: 'eggplant.jpg')
product2.photo.attach(io: link2, filename: 'wooden_wall_map.jpg')
product3.photo.attach(io: link3, filename: 'idea.jpg')
product4.photo.attach(io: link4, filename: 'lui_planter.jpg')
product5.photo.attach(io: link5, filename: 'dog_planters.jpg')
product6.photo.attach(io: link6, filename: 'stone.jpg')
product7.photo.attach(io: link7, filename: 'falcon.jpg')
product8.photo.attach(io: link8, filename: 'magikarp.jpg')

