class Booking < ApplicationRecord
  belongs_to :time_slot
  belongs_to :restaurant
  belongs_to :user

  validates :time_slot, :restaurant, :name, :email, :number, :time, :date, :discount, :table_size, presence: true
end
