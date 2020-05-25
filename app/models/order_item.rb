class OrderItem < ApplicationRecord
    validates :order_item_id, presence: true

    belongs_to :product,
    foreign_key: :order_item_id,
    class_name: :Product

    belongs_to :orderer,
    foreign_key: :orderer_id,
    class_name: :User
end
