import { createContext, useState } from "react";
import { v4 as randomUUID } from 'uuid'

export const TaskContext = createContext();

const EDITABLE_TASK_FIELD = ["title","description"];

const TaskProvider = ({children})=>{

    const [tasklist,settasklist] = useState([]);

    let addNewTask = (task) => {
        settasklist([
            ...tasklist,{...task,createdDate : new Date(),taskID : randomUUID() }
        ]);
        console.log(tasklist);
    }

    let deleteTask = (taskID) => {
        settasklist(tasklist.filter((task) => (task.taskID !== taskID)))
    }

    const editTask = (task) => {
        let templist = [...tasklist];
        templist.forEach((t) => {
            if (t.taskID === task.taskID) {
                EDITABLE_TASK_FIELD.forEach((field) => {
                    t[field] = task[field];
                });
            }
        });
        settasklist(templist);
    };
    

    return(
        <TaskContext.Provider value={{ tasklist , addNewTask , deleteTask , editTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;