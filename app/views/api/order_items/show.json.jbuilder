json.set! @order_item.id do
    json.partial! "api/products/product", product: @order_item.product
    json.extract! @order_item, :orderer_id, :order_item_id, :quantity, :id
    json.created_at @order_item.created_at.strftime(" %b %d, %Y")
    json.photoUrl url_for(@order_item.product.photo)
end