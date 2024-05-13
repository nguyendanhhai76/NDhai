import {connection} from '../mysql.config'

class TodoService {
    private db : any 

    constructor () {
        this.db = connection();
    }
    async createTodo (todo : any) {
        return new Promise ((resolve, reject) => {
            this.db.query("INSERT INTO task SET ?", todo, (err : Error, result : any)=> {
                if(err) {
                    reject(err)
                }
                resolve(result)
            
            })
        })
    }
    async getAllTodo () {
        return new Promise ((resolve, reject) => {
            this.db.query("SELECT * FROM  task",  (err : Error, result : any)=> {
                if(err) {
                    reject(err)
                }
                resolve(result)
            
            })
        })
    }
    async getTodobyId (id : string) {
        return new Promise ((resolve, reject) => {
            this.db.query("SELECT * FROM  task WHERE id = ?" , id , (err : Error, result : any)=> {
                if(err) {
                    reject(err)
                }
                resolve(result)
            
            })
        })
    }
    async updateTodo (data : any, id : string) {
        return new Promise ((resolve, reject) => {
            this.db.query("UPDATE task SET ? WHERE id = ?" ,[{...data}, id] , (err : Error, result : any)=> {
                if(err) {
                    reject(err)
                }
                resolve(result)
            
            })
        })
    }
    async deleteTodo (id : string) {
        return new Promise((resolve, reject) => {
            this.db.query("DELETE FROM task WHERE id = ?", id, (error :  Error, result : any) => {
                if(error) {
                    reject(error)
                }
                resolve(result)
            })
        })
    }
}

export const todoService = new TodoService();