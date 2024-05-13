import {Express} from 'express'
import { todoController } from '../controllers/todo.controller'


export const todoRoute = (app :Express) => {
    app.post("/api/v1/tasks", todoController.createTodo)
    
    app.get("/api/v1/tasks", todoController.getAll)
    
    app.get("/api/v1/tasks/:id", todoController.getOne)
    
    app.put("/api/v1/tasks/:id",todoController.updateTodo)

    app.delete("/api/v1/tasks/:id", todoController.deleteTodo)
    
}