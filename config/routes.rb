DailyNeed::Application.routes.draw do
  

  resources :types


  devise_for :users, controllers: { sessions: "users/sessions", registrations: 'users/registrations'}

  devise_for :admins

  match "accounts/dashboards" => "accounts/dashboards#index", :as => :user_root
  get "accounts/types" => "accounts/types#index", :as => :account_types
  post "accounts/types" => "accounts/types#create", :as => :acount_type_create
  post "accounts/type/change_status/:id" => "accounts/types#change_status", :as => :account_type_change_status
  
  get "accounts/daily_expenses" => "accounts/daily_expenses#index", :as => :account_daily_expenses
  post "accounts/daily_expenses" => "accounts/daily_expenses#create", :as => :account_daily_expense_create

  get "dashboards/index"
  get "homes/index"

  get "homes/about_us"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'homes#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
