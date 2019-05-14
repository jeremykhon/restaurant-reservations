class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index, :create]

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

    unless request.headers["authorization"] == "null"
      authenticate_request
      booking.user = current_user
    end

    if booking.save!
      render json: booking
    else
      render json: { message: "something went wrong" }, status: :internal_server_error
    end
  end
end
