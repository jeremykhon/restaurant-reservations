class Restaurant < ApplicationRecord
  belongs_to :user
  belongs_to :cuisine
  has_many :time_slots
  has_many :reviews, -> { order('created_at DESC') }
  has_many :restaurant_photos

  validates :user, :cuisine, :name, :location, :description, :capacity, presence: true
end
