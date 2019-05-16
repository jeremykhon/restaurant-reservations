class RestaurantPhoto < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  belongs_to :restaurant
  belongs_to :user

  validates :alt_name, :restaurant, :user, presence: true
end
