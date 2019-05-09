class TimeSlot < ApplicationRecord
  belongs_to :restaurant

  validates :time, :discount, :capacity, :restaurant, presence: true
end
