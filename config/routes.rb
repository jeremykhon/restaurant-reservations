Rails.application.routes.draw do
  root to: 'restaurants#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      get 'return_user', to: 'authentication#return_user'
      resources :users, only: [ :create ]
      resources :restaurants, only: [ :index, :show, :create ] do
        resources :default_time_slots, only: [ :index, :create ]
        resources :reviews, only: [ :index, :create ]
        resources :time_slots, only: [ :index ]
        resources :restaurant_photos, only: [ :index, :destroy ]
      end
      resources :bookings , only: [ :index, :create, :destroy ]
    end
  end
  post '/api/v1/restaurants/:restaurant_id/restaurant_photos', to: 'api/v1/restaurant_photos#create'

  get '/restaurants/:id', to: 'restaurants#index'
  get '/reservations', to: 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
