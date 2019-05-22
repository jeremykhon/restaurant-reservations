class Api::V1::BookingsController < ApplicationController
  def index
    case params[:only]
    when 'upcoming'
      bookings = Booking.where('user_id = ? AND time > ?', current_user.id, Time.now).order(time: :asc)
    when 'historical'
      bookings = Booking.where('user_id = ? AND time < ?', current_user.id, Time.now).order(time: :asc)
    else
      bookings = Booking.where('user_id = ?', current_user.id).order(time: :asc)
    end
    render json: bookings, include: [restaurant: { include: [:restaurant_photos] }]
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
      discount: params[:selectedTimeSlot][:discount],
      user: current_user
    )
    if booking.save!
      render json: booking
    else
      render json: booking.errors, status: :unprocessable_entity
    end
  end
end
