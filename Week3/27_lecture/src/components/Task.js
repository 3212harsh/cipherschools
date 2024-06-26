import React,{ useContext , useState } from 'react'
import {formatdate} from '../utils/DateUtils'
import { TaskContext } from '../context/Taskcontext'

const Task = ( { task : incomingTask } ) => {

  const {title , description , createdDate , taskID } = incomingTask;

  const [ isediting , setisediting ] = useState(false);

  const {deleteTask,editTask} = useContext(TaskContext);

  const [tasks,settasks] = useState(incomingTask);

  const handleInputChange = (e) => {
    settasks({
        ...tasks,
        [e.target.name]:e.target.value
    }
    )
}

  if(isediting){
    return (
      <div className="card" key={taskID}>
    <div className="content">
      <div className='ui form '>
        <div className="field">
            <input type="text" spellCheck={false} placeholder='Task Title' name='title' value={tasks.title} onChange={handleInputChange} />
        </div>
      </div>
      <br/>
      <div className='ui form '>
        <div className="field">
            <input type="text" spellCheck={false} placeholder='Task Description' name='description' value={tasks.description} onChange={handleInputChange} />
        </div>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={() => {editTask(tasks);setisediting(false)} }>Save</div>
        <div className="ui basic red button" onClick={() => setisediting(false)} >Cancel</div>
      </div>
    </div>
  </div>
  )

  } else {

    
    return (
      <div className="card" key={taskID}>
    <div className="content">
      <div className="header">
        {title}
      </div>
      <div className="meta">
        {formatdate(createdDate)}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={() => setisediting(true)}>Edit</div>
        <div className="ui basic red button" onClick={() => deleteTask(taskID)} >Delete</div>
      </div>
    </div>
  </div>
  )
  }
}

export default Task