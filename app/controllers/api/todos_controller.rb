class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find_by(id: params[:id])
    if @todo
      render json: @todo
    else
      render json: ["Todo doesn't exist"], status: 404
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
  end
  
  def destroy

  end

  def todo_params
    params.require(:todo).permit(:body, :title, :done)
  end
end
