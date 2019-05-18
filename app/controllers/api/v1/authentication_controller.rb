class Api::V1::AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:authenticate]
  include ActiveModel::Serialization

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def return_user
    render json: current_user, only: [:name, :email, :admin]
  end
end
