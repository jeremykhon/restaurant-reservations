class Api::V1::BookingsController < ApplicationController
  def index
    render json: current_user.bookings, include: [restaurant: { include: [:restaurant_photos] }]
  end

  def destroy
    booking = Booking.find_by(id: params[:id])

    if booking.destroy
      render json: booking
    else
      render booking.errors, status: :unprocessable_entity
    end
  end

  def create
    booking = Booking.new(
      table_size: params[:tableSize],
      time_slot_id: params[:selectedTimeSlot][:id],
      restaurant_id: params[:selectedTimeSlot][:restaurant_id],
      time: Time.parse(params[:selectedTimeSlot][:time]),
      name: params[:name],
      email: params[:email],
      number: params[:number],
      discount: params[:selectedTimeSlot][:discount]
    )
    puts "%%%%%%%%%%%%%%%%"
    puts current_user
    booking.user = current_user
    puts "$$$$$$$$$$$$$$$$"
    puts booking.user

    if booking.save!
      render json: booking
    else
      render json: booking.errors, status: :unprocessable_entity
    end
  end
end
