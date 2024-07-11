import "@styles/Tasks.css"
import { useContext } from "react"
import { TaskContext } from "./TaskHolder/TaskHolder"

function Tasks() {
  let taskContext = useContext(TaskContext);
  return (
    <div className="tasksList">
      {taskContext?.task.map((item,index)=>{
        return <div className="task" key={index}>
          {item}
        </div>
      })}
    </div>
  )
}

export default Tasks