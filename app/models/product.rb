class Product < ApplicationRecord
    validates :name, :price, :description, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_many :cart_items, 
    foreign_key: :product_id,
    class_name: :CartItem

    has_one :customer, 
    through: :cart_items,
    source: :customer

    has_one_attached :photo
end
