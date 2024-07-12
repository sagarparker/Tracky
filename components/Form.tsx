import React, { ChangeEvent, useContext, useState } from 'react'
import '@styles/Form.css';
import { TaskContext, TaskData } from './TaskHolder/TaskHolder';
import { useSession } from 'next-auth/react';


function Form() {
  let taskContext = useContext(TaskContext);
  let [input,setInput] = useState("");
  const {data:session} = useSession();

  let handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setInput(e.target.value);
  }

  let addTaskToList = async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let email = session?.user?.email;

    const raw = JSON.stringify({
      "task": input,
      "email": email
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    let response: TaskData = await (await fetch("https://tracky-tracker.vercel.app/api/addTask", requestOptions)).json();
    

    taskContext?.addTask({
      id:response.id,
      is_active:response.is_active,
      task:response.task,
      time:response.time,
      email: email!
    });
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