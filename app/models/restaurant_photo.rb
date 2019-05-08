class RestaurantPhoto < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user

  validates :alt_name, :restaurant, :user, presence: true
end
