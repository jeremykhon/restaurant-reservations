class RestaurantPhoto < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  belongs_to :restaurant
  belongs_to :user

  validates :restaurant, :user, :photo, presence: true
end
