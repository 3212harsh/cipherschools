import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({children})=>{

    const [tasklist,settasklist] = useState([]);

    let addNewTask = (task) => {
        settasklist([
            ...tasklist,{...task,createdDate : new Date()}
        ]);
    }

    return(
        <TaskContext.Provider value={{ tasklist , addNewTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;