class Users::RegistrationsController < Devise::RegistrationsController
# before_filter :configure_sign_up_params, only: [:create]
# before_filter :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  def check_for_account(params)
    if params[:account].blank?
      gflash :error => "Account can not be blank."
    else
      @account =Account.where(:name=>"#{params['account']}").first || Account.new(:name => params[:account])
    end
  end

  def save_user
    @account.status = "approved"
    @account.save
    @user.save
    AccountUserRoleMapping.create(:user_id => @user.id, :account_id => @account.id, :role_id => 1)
  end

  # POST /resource
  def create
    @user = User.new(params[:user])
    @account = Account.new
    resource.valid?
    check_for_account(params)
    if resource.errors.blank?
      save_user
      gflash :success => "You successfully created account"
      redirect_to user_root_path
    else
      resource.errors.full_messages.each do |error|
        gflash :error => error
      end
      respond_with resource
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # You can put the params you want to permit in the empty array.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.for(:sign_up) << :attribute
  # end

  # You can put the params you want to permit in the empty array.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.for(:account_update) << :attribute
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
