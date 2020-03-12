json.extract! product, :id, :name, :description, :price, :artist_id
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end
