import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/Taskcontext'
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const {addNewTask} = useContext(TaskContext);

    const navigate = useNavigate();

    const [task,settask] = useState({
        title:"",
        description : ""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        settask({});
        navigate('/');
    }

    const handleInputChange = (e) => {
        settask({
            ...task,
            [e.target.name]:e.target.value
        }
        )
    }

  return (
    <section className='screen'>
        <h1 className='ui heading center'>Add New Task</h1>
        <div className='ui form '>
            <form onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" spellCheck={false} placeholder='Task Title' name='title' value={task.title} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <label>Discription</label>
                    <textarea rows="2" placeholder='Task Discription' spellCheck={false} name='description' value={task.description} onChange={handleInputChange} />
                </div>
                <button className="ui primary button" type='submit'>
                Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default AddTask
