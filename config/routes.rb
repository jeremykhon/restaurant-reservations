Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      post 'return_user', to: 'authentication#return_user'
      resources :users, only: [ :create ]
      resources :restaurants, only: [ :index, :show, :create ] do
        resources :default_time_slots, only: [ :index, :create ]
        resources :reviews, only: [ :index, :create ]
        resources :time_slots, only: [ :index ]
        resources :restaurant_photos, only: [ :index, :show, :create, :destroy ]
      end
      resources :bookings , only: [ :index, :create ]
    end
  end

  get '/restaurants/:id', to: 'restaurants#index'
  root to: 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
