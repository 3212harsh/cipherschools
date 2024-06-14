import React,{useState} from 'react'
import Task from '../components/Task';
import AddTask from '../components/AddTask';


const Todoscreen = () => {
    const [tasklist,settasklist] = useState([]);
  return (
    <>
    <div>
      <div className='screen'>
                <h1 className='ui heading center'>Welcome to Todolist</h1>
                <div>
                    <button onClick={(e)=>{
                        settasklist([
                            ...tasklist,
                            {
                            title:"Going to gym",
                            discription : "Going to gym is good for muscle growth",
                            createdDate : new Date(),
                            },
                        ])

                    }} className='ui secondary button'>Add Task</button>
                </div><br/>

                  <div className='ui cards'>
                        {tasklist.map((task,i)=> <Task task={task} key={i}/>)}
                  </div>
                  <br/>

                <AddTask />
            </div>
    </div>
    </>
  )
}

export default Todoscreen
