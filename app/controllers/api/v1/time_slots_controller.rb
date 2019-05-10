class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    bookings = Booking.where(
      'restaurant_id = ? AND time > ? AND time < ?',
      params[:restaurant_id], DateTime.strptime(params[:start], '%Q'), DateTime.strptime(params[:end], '%Q')
    )
    render json: time_slots
  end

  def create
  end
end
