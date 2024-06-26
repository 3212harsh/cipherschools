import React,{useContext} from 'react'
import Task from '../components/Task';
import { TaskContext } from '../context/Taskcontext';
import { useNavigate } from 'react-router-dom';


const Todoscreen = () => {

    const {tasklist} = useContext(TaskContext);

    const navigate = useNavigate();
    
  return (
    <>
    <div>
      <div className='screen'>
                <h1 className='ui heading center'>Welcome to Todolist</h1>
                <div>
                    <button
                     onClick={(e)=>{
                        navigate('/add-task')
                    }} className='ui secondary button'>Add Task</button>
                </div><br/>

                  <div className='ui cards'>
                        {tasklist.map((task,i)=> <Task task={task} key={task.taskID}/>)}
                  </div>
                  <br/>
            </div>
    </div>
    </>
  )
}

export default Todoscreen
