class User < ApplicationRecord
  has_many :bookings
  has_many :restaurants
  has_many :reviews
  has_many :restaurant_photos

  validates :name, presence: true
end
