class Api::V1::ReviewsController < ApplicationController
  before_action :set_restaurant

  def create
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find_by(id: params[:restaurant_id])
  end
end
