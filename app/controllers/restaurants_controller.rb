class RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index]

  def index
  end

  def show
  end
end
