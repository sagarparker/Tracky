import "@styles/Tasks.css"
import { useContext } from "react"
import { TaskContext } from "./TaskHolder/TaskHolder"

function Tasks() {
  let taskContext = useContext(TaskContext);
  return (
    <div className="tasksList">
      {taskContext?.taskData.sort((a, b) => b.time-a.time) .map((item,index)=>{
        let date = new Date(item?.time*1)
        return <div className="task" key={index}>
          <div className="grid grid-cols-12">
            <div className="col-span-6 timeDate">
            {date.toDateString()}
            </div>
            <div className="col-span-6 flex justify-end timeDate">
            {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
          <div className="mt-3">
          {item.task}
          </div>
        </div>
      })}
    </div>
  )
}

export default Tasks