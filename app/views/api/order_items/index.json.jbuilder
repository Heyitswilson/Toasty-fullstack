@order_items.each do |order_item|
    json.set! order_item.id do
        # json.partial! "api/products/product", product: order_item.product
        json.extract! order_item, :orderer_id, :order_item_id
        # json.photoUrl url_for(order_item.product.photo)
    end
end