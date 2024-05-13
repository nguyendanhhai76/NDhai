import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import axios from 'axios'

interface ITodoListProps {
  todo : any
}

const Todo = (props : ITodoListProps) => {
  
  const handleOnChangeStatus =  async (e : any, props : any) => {
    console.log(props.id);    try {
      const checked = e.target.checked
      if (checked) {
        await axios.put(`http://localhost:8080/api/v1/tasks/${props.id}`,{
          _status : 1
        })}
        else {  
          await axios.put(`http://localhost:8080/api/v1/tasks/${props.id}`,{
            _status : 0
          })}
          props.handleCallApi()
    }
     catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async ( id : string) => {
    try {
      alert("bạn có muốn xóa không ?")
      await axios.delete(`http://localhost:8080/api/v1/tasks/${id}`)
      props.handleCallApi()
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className=' flex justify-between text-white bg-red-400 border mb-1 py-2 px-3 rounded'>
        <h1 className={props.status==1 ? 'line-through' : ''}>{props.name}</h1>
        <div className=' flex'>
        <input type="checkbox" 
        onChange={(e) => handleOnChangeStatus(e, props)}
        value={props.status}
        />
        <div className=' mx-1'></div>
        <DeleteOutlined onClick={() => handleDelete(props.id)} />
        </div>
    </div>
  )
}

export default Todo