class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authenticate_request, only: :index
  before_action :set_restaurant, only: :create

  def create
    review = Review.new(
      restaurant: @restaurant,
      rating: params[:rating],
      content: params[:content],
      user: current_user
    )
    review.save!
    calc_average_rating
    render json: review, include: :user
  end

  private

  def calc_average_rating
    reviews = @restaurant.reviews
    sum = 0
    reviews.each { |review| sum += review.rating }
    @restaurant.avg_rating = sum.fdiv(reviews.length)
    @restaurant.save!
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end
end
