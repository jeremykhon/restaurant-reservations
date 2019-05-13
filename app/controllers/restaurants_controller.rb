class RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index]

  def index
    @hi = "hi"
  end

  def show
    @show = "show"
  end
end
