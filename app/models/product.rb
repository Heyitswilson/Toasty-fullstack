class Product < ApplicationRecord
    validates :name, :price, :description, :category, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_many :cart_items, 
    foreign_key: :product_id,
    class_name: :CartItem

    has_one :customer, 
    through: :cart_items,
    source: :customer

    has_many :order_items,
    foreign_key: :order_item_id,
    class_name: :OrderItem

    has_many :orderers,
    through: :order_items,
    source: :orderer

    has_one_attached :photo

    def self.search(input)
        searched = self.where("search LIKE ?", "%" + input + "%")
        if searched != []
            searched
        else
            Product.all
        end
    end
end
