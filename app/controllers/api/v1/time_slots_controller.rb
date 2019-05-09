class Api::V1::TimeSlotsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    # considering time zone difference
    puts "start=======#{DateTime.strptime(params[:start], '%Q')}"
    puts "end=======#{DateTime.strptime(params[:end], '%Q')}"
    time_slots = TimeSlot.where(
      'restaurant_id = ? AND time > ? AND time < ?',
      params[:restaurant_id], DateTime.strptime(params[:start], '%Q'), DateTime.strptime(params[:end], '%Q')
    )
    render json: time_slots
  end

  def create
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
