"use client"

import React, { useState, createContext, useEffect } from 'react'
import "@styles/TaskHolder.css";
import Form from '@components/Form';
import Tasks from '@components/Tasks';

interface TaskContext {
  task: string[];
  addTask: (item:string)=>void;
};

type ApiResponse = {
  id: number,
  task: string,
  is_active:string,
  time: bigint
}

let TaskContext = createContext<TaskContext|null>(null);

function TaskHolder(){
  let [task,setTask] = useState<string[]>([]);

  useEffect(()=>{
    const getData = async() => {
      const query = await fetch("http://localhost:3000/api/tasks");
      let response = await query.json();
      response.result.forEach((data:ApiResponse)=>{
        addTask(data.task);
      })
    }
    getData();
  },[]);

  const addTask =(item:string)=>{
    setTask(prevArray => [...prevArray, item]);
  }

  return (
    <TaskContext.Provider value={{task,addTask}}>
      <div className='taskHolder'>
          <Form></Form>
          <Tasks></Tasks>
      </div>
    </TaskContext.Provider>
  )
}

export {TaskHolder,TaskContext}