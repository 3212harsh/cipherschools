import React from 'react'
import {formatdate} from '../utils/DateUtils'

const Task = ({task,i}) => {
  return (
    <div className="card" key={i}>
    <div className="content">
      <div className="header">
        {task.title}
      </div>
      <div className="meta">
        {formatdate(task.createdDate)}
      </div>
      <div className="description">
        {task.description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
  )
}

export default Task