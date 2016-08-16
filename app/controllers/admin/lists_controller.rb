class Admin::ListsController < Admin::AdminController
  def index
    @lists = List.order("created_at DESC")
  end

  def new
    @list = List.new

  end

  def create
    @list = List.new(params.require(:list).permit(
      :title_en,
      :title_ko,
      :description_ko,
      :description_en))
   
    
    if @list.save
      flash[:notice] = 'Successfully updated.'
      redirect_to edit_admin_list_path(@list)
    else

      flash[:alert] = "#{@list.errors.messages.values.join(' ')}"
      redirect_to request.referer
    end

  end
  
  def edit
    @list = List.find params[:id]
  end

  def update
    @list = List.find params[:id]
   
    
    if @list.update_attributes(params.require(:list).permit(
      :title_en,
      :title_ko,
      :idx,
      :description_ko,
      :description_en))

      flash[:notice] = 'Successfully updated.'
      redirect_to request.referer
    else

      flash[:alert] = "#{@list.errors.messages.values.join(' ')}"
      redirect_to request.referer
    end

  end


  def destroy
    @list= List.find params[:id]
    @list.destroy
    redirect_to admin_lists_path, :notice => 'Successfully destroyed'
  end

end
