'use client'

import React, { useState, createContext } from 'react'
import "@styles/TaskHolder.css";
import Form from '@components/Form';
import Tasks from '@components/Tasks';

interface TaskContext {
  task: string[];
  addTask: (item:string)=>void;
};

let TaskContext = createContext<TaskContext|null>(null);

function TaskHolder(){
  let [task,setTask] = useState<string[]>([]);

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