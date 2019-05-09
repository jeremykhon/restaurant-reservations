class Api::V1::TimeSlotsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    time_slots = TimeSlot.where(restaurant_id: params[:restaurant_id], date: Date.today.all_day)
    render json: time_slots
  end

  def create
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
