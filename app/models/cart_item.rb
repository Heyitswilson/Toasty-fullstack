class CartItem < ApplicationRecord
    validates :product_id, :quantity, presence: true

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

    belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User
end
