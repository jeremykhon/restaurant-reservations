class DefaultTimeSlot < ApplicationRecord
  belongs_to :restaurant

  validates :time, :weekday, :discount, :capacity, :restaurant, presence: true
end
