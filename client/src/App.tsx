import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/todos'
import axios from 'axios'

function App() {
  const [todo, setTodo] = useState<any>([])
  const [inputValue, setInputValue] = useState("")

  const handleCallApi = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/tasks')
      setTodo(res.data)   
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/tasks',{
        _name : inputValue
      })
      handleCallApi()
      alert ("tạo mới thành công !!")
       
      return
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCallApi()
  },[])
  return ( 
    <>
      <div className='  flex items-center justify-center h-screen	' >
        <div className=' sshadow-lg w-1/4 min-h-[32rem] bg-red-500 text-white px-8 py-8'>
        <h1 className='text-5xl'>Todo List</h1>
        <p>Get things done. One item at a time.</p>
        <span>______________________________________</span>
        <div className='my-8'>
        {
          todo?.map((item : any) => {
            return <Todo id={item.id} key={item.id} name={item._name} handleCallApi={handleCallApi} status={item._status}/>
          })
        }
        </div>
        <span className=' block my-1 text-lg'>Add to the todo list :</span> <br />
        <input type="text" className=' text-black py-3 px-2 rounded border-inherit mr-0.5' onChange={handleOnChange} />
        <button className=' border px-2 py-2.5 rounded-sm' onClick={handleSubmit}>ADD ITEM</button>

        </div>
      </div>
    </>
  )
}

export default App
