Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :notes
    end
  end
  root "notes#index"
end
