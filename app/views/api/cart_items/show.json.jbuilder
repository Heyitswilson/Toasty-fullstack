# json.partial! "cart_item", cart_item: @cart_item

# @current_user.product

json.extract! @cart_item, :id, :customer_id, :product_id, :product, :quantity