import React from 'react'

const AddTask = () => {
  return (
    <>
        <h1 className='ui heading center'>Add New Task</h1>
        <div className='ui form '>
            <form>
                <div className="field">
                    <label>Title</label>
                    <input type="text" placeholder='Task Title' name='title' />
                </div>
                <div className="field">
                    <label>Discription</label>
                    <textarea rows="2" placeholder='Task Discription' name='description' />
                </div>
                <button className="ui primary button">
                Submit
                </button>
            </form>
        </div>
    </>
  )
}

export default AddTask
