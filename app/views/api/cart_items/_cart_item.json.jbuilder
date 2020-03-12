# json.extract! product, :id, :name, :description, :price, :artist_id
# json.photoUrl url_for(product.photo)

# @current_user.cart_items.each do |cart_item|
#     json.set! cart_item.id do 
#         json.extract! cart_item, :id, :customer_id, :product_id
#     end
# end


# @current_user.cart_items.each do |cart_item|
#     json.set! cart_item.id do 
#         json.extract! cart_item.product
#     end
# end