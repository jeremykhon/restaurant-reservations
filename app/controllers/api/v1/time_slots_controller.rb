class Api::V1::TimeSlotsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    time_slots = TimeSlot.where(
      'restaurant_id = ? AND time > ? AND time < ?',
      params[:restaurant_id], DateTime.strptime(params[:start], '%Q'), DateTime.strptime(params[:end], '%Q')
    )
    render json: time_slots
  end

  def create
  end
end
