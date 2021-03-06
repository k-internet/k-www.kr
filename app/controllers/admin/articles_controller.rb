class Admin::ArticlesController < Admin::AdminController
  def index
    @articles = Article.order("created_at DESC")
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(params.require(:article).permit(
      :title_ko,
      :title_en,
      :description_ko,
      :description_en,
      :author_ko,
      :author_en,
      :background_color,
      :color))
   
    
    if @article.save
      flash[:notice] = 'Successfully updated.'
      redirect_to edit_admin_article_path(@article)
    else

      flash[:alert] = "#{@article.errors.messages.values.join(' ')}"
      redirect_to request.referer
    end

  end
  
  def edit
    @article = Article.find params[:id]
  end

  def update
    @article = Article.find params[:id]
   
    
    if @article.update_attributes(params.require(:article).permit(
      :title_ko,
      :title_en,
      :description_ko,
      :description_en,
      :author_ko,
      :author_en,
      :idx,
      :background_color,
      :color))
      flash[:notice] = 'Successfully updated.'
      redirect_to request.referer
    else

      flash[:alert] = "#{@article.errors.messages.values.join(' ')}"
      redirect_to request.referer
    end

  end


  def destroy
    @article= Article.find params[:id]
    @article.destroy
    redirect_to admin_articles_path, :notice => 'Successfully destroyed'
  end

end
