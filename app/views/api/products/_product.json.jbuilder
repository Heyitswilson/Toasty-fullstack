json.extract! product, :id, :name, :description, :price, :artist_id, :keep, :category, :search
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end
