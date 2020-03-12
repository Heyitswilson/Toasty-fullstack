# current_user.cart_items.each do |cart_item|
#     json.set! cart_item.id do 
#         json.extract! :customer_id
#     end
# end

@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item, :customer_id, :quantity
        json.product do 
            json.partial! "api/products/product", product: cart_item.product
            json.photoUrl url_for(cart_item.product.photo)
        end
    end
end  