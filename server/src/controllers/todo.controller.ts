import { Request, Response} from 'express'
import { todoService } from '../sevices/todo.sevice'

 class TodoController {
    async createTodo (req : Request, res : Response){
        try {
            const result = await todoService.createTodo(req.body);
            console.log(req.body);
            

            res.status(201).json({
                message : 'Tao moi thanh cong !!'
            })
            
        } catch (error : any) {
            res.status(500).json({
                message : error.message
            })
        }
    }

    async getAll( req : Request, res : Response) {
        try {
            const result = await todoService.getAllTodo();
        res.status(200).json(result)
        } catch (error : any) {
            res.status(500).json({
                message : error.message
            })
        }
    }

    async getOne(req : Request, res : Response) {
        try {
            const {id} = req.params
            const result : any  = await todoService.getTodobyId(id)
            if (result.length === 0){
                return res.status(404).json({
                    message : "không tìm thấy dữ liệu !!!"
                })
            }
            res.status(200).json(result[0])
        } catch (error : any
            ) {
            res.status(500).json({
                message : error.message
            })
        }
    }

    async updateTodo(req : Request, res : Response) {
        try {
            const { id } = req.params
            await todoService.updateTodo(req.body, id)
            res.status(200).json({
                message : "cập nhật thành công !!!"
            })
        } catch (error : any) {
            res.status(500).json({
                message : error.message
            })
        }
    }

    async deleteTodo (req : Request, res : Response) {
        try {
            const { id } = req.params
            await todoService.deleteTodo(id)
            res.status(200).json({
                message : "Xóa thành công !!"
            })
        } catch (error : any) {
            res.status(500).json({
                message : error.message
            })
        }
    }
}

export const todoController = new TodoController()