import {Component} from 'react'

class Todolist extends Component{
    state = {
        taskcount : 0
    };
    render(){
        return(
            <div className='screen'>
                <h1 className='ui heading center'>Welcome to Todolist</h1>
                <div>
                    <button onClick={(e)=>{
                        this.setState({
                            ...this.state,
                            taskcount:this.state.taskcount+1

                        })
                        console.log(this.state.taskcount);
                    }} className='ui secondary button'>Add Task</button>
                </div><br/>
                <div>
                    <p>The Number of tasks : {this.state.taskcount}</p>
                </div>
            </div>
        )
    }
}

export default Todolist;