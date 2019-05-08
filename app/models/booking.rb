class Booking < ApplicationRecord
  belongs_to :time_slot
  belongs_to :user
  belongs_to :restaurant

  validates :time_slot, :restaurant, :name, :email, :number, :time, :date, :discount, :table_size, presence: true
end
