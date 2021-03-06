class User < ApplicationRecord
    attr_reader :password

    validates :name, :password_digest, :session_token, presence: true
    validates :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :cart_items, 
    foreign_key: :customer_id,
    class_name: :CartItem

    has_many :crafted_products,
    foreign_key: :artist_id,
    class_name: :Product

    has_many :products,
    through: :cart_items,
    source: :product

    has_many :order_items,
    foreign_key: :orderer_id,
    class_name: :OrderItem

    has_many :ordered_products,
    through: :order_items,
    source: :product

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
