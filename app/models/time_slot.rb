class TimeSlot < ApplicationRecord
  belongs_to :restaurant

  validates :time, :date, :discount, :capacity, :restaurant, presence: true
end
