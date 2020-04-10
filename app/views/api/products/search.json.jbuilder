json.array!(@products) do |product|
    json.(product, *Product.column_names)
    # json.extract! product, :id, :name, :description, :price, :artist_id
end