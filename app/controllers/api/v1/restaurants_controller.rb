class Api::V1::RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: %i[index show]

  def index
    @restaurants = Restaurant.all
    render json: @restaurants, include: %i[restaurant_photos cuisine]
  end

  def create
    # TODO
  end

  def show
    @restaurant = Restaurant.find_by!(id: params[:id])
    render json: @restaurant, include: [:restaurant_photos, :cuisine, reviews: { include: [user: { only: :name }] }]
  end
end
