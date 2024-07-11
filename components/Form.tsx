import React, { ChangeEvent, useContext, useState } from 'react'
import '@styles/Form.css';
import { TaskContext } from './TaskHolder/TaskHolder';

function Form() {
  let taskContext = useContext(TaskContext);
  let [input,setInput] = useState("");

  let handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setInput(e.target.value);
  }

  let addTaskToList = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "task": input
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("https://tracky-ruddy.vercel.app/api/addTask", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    taskContext?.addTask(input);
    setInput('');
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        <input type="text" value={input} onChange={handleInputChange} placeholder='Enter a new task'  className='taskInput'/>
      </div>
      <div className="col-span-2">
        <button className='addButton' onClick={addTaskToList} disabled={!input}>Add</button>
      </div>
    </div>
  )
}

export default Form