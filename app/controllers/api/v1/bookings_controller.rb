class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :create]

  def index
  end

  def create
    booking = Booking.new(date: params[:date],
                          table_size: params[:tableSize],
                          time_slot_id: params[:selectedTimeSlot][:id],
                          restaurant_id: params[:selectedTimeSlot][:restaurant_id],
                          time: Time.parse(params[:selectedTimeSlot][:time]),
                          name: params[:name],
                          email: params[:email],
                          number: params[:number],
                          discount: params[:selectedTimeSlot][:discount])
    booking.user = current_user if user_signed_in?
    p "$$$$$$$$$$$$$$"
    p booking
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
