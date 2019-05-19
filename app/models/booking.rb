class Booking < ApplicationRecord
  belongs_to :time_slot
  belongs_to :restaurant
  belongs_to :user

  validates :time_slot, :restaurant, :user, :name, :email, :number, :time, :discount, :table_size, presence: true
end
