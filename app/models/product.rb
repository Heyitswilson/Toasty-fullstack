class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :description, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_one_attached :photo
end
