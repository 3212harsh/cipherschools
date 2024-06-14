import React, { useState } from 'react'

const AddTask = () => {

    const [task,settask] = useState({
        title:"",
        description : ""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
    }

    const handleInputChange = (e) => {
        settask({
            ...task,
            [e.target.name]:e.target.value
        }
        )
    }

  return (
    <>
        <h1 className='ui heading center'>Add New Task</h1>
        <div className='ui form '>
            <form onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" spellCheck={false} placeholder='Task Title' name='title' onChange={handleInputChange} />
                </div>
                <div className="field">
                    <label>Discription</label>
                    <textarea rows="2" placeholder='Task Discription' spellCheck={false} name='description' onChange={handleInputChange} />
                </div>
                <button className="ui primary button" type='submit'>
                Submit
                </button>
            </form>
        </div>
    </>
  )
}

export default AddTask
