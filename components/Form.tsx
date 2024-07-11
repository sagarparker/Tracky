import React, { ChangeEvent, useContext, useState } from 'react'
import '@styles/Form.css';
import { TaskContext } from './TaskHolder/TaskHolder';

function Form() {
  let taskContext = useContext(TaskContext);
  let [input,setInput] = useState("");

  let handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value)
  }

  let addTaskToList = () => {
    taskContext?.addTask(input);
    setInput('');
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        <input type="text" value={input} onChange={handleInputChange} placeholder='Enter a new task'  className='taskInput'/>
      </div>
      <div className="col-span-2">
        <button className='addButton' onClick={addTaskToList}>Add</button>
      </div>
    </div>
  )
}

export default Form