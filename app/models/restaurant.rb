class Restaurant < ApplicationRecord
  belongs_to :user
  belongs_to :cuisine
  has_many :time_slots
  has_many :reviews
  has_many :restaurant_photos

  validates :user, :cuisine, :name, :location, :capacity, :booking_window, presence: true
end
