class TimeSlot < ApplicationRecord
  belongs_to :restaurant
  has_many :bookings

  validates :time, :discount, :capacity, :restaurant, presence: true
end
