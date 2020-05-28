# json.partial! "cart_item", cart_item: @cart_item

# @current_user.product

# json.extract! @cart_item, :id, :customer_id, :product_id, :product, :quantity

json.extract! @cart_item, :id, :customer_id, :quantity
json.product do 
    json.partial! "api/products/product", product: @cart_item.product
    json.photoUrl url_for(@cart_item.product.photo)
end
json.deleted false
