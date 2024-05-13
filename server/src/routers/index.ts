 import {Express} from 'express'
import { todoRoute } from './todo.route'
 
 const  rootRoute = (app : Express) => {
    todoRoute(app)
}

export default rootRoute