"use client"

import React, { useState, createContext, useEffect } from 'react'
import "@styles/TaskHolder.css";
import Form from '@components/Form';
import Tasks from '@components/Tasks';

export type TaskData = {
  id: number,
  task: string,
  is_active:boolean,
  time: number,
  email: string
}

interface TaskContext {
  taskData: TaskData[];
  addTask: (item:TaskData)=>void;
};

let TaskContext = createContext<TaskContext|null>(null);

function TaskHolder(){
  let [taskData,setTaskData] = useState<TaskData[]>([]);

  useEffect(()=>{
    const getData = async() => {
      const query = await fetch("https://tracky-tracker.vercel.app//api/tasks");
      let response = await query.json();
      response.result.forEach((data:TaskData)=>{
        addTask(data);
      })
    }
    getData();
  },[]);

  const addTask =(item:TaskData)=>{
    setTaskData(prevArray => [...prevArray, item]);
  }

  return (
    <TaskContext.Provider value={{taskData,addTask}}>
      <div className='taskHolder'>
          <Form></Form>
          <Tasks></Tasks>
      </div>
    </TaskContext.Provider>
  )
}

export {TaskHolder,TaskContext}