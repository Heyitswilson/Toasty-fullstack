class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :description, presence: true
    # validates :category, presence: true, uniqueness: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User
end
