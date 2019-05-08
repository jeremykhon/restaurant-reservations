class Restaurant < ApplicationRecord
  belongs_to :user
  belongs_to :cuisine

  validates :user, :cuisine, :name, :location, :capacity, :booking_window, presence: true
end
