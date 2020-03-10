json.extract! product, :id, :name, :description, :price, :artist_id
json.photoUrl url_for(product.photo)
