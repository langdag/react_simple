Rails.application.routes.draw do
	root to: 'welcome#index'

	namespace :api, defaults: { format: :json } do 
		resources :post
	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
