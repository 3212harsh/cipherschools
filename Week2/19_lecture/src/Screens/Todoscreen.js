import {Component} from 'react'

class Todolist extends Component{
    state = {
        taskcount : 0
    }
    render(){
        return(
            <div className='screen'>
                <h1 className='ui heading center'>Welcome to Todolist</h1>
                <button className='ui secondary button' 
                onClick={(e) =>{
                    this.setState({
                        ...this.state,
                        taskcount: this.state.taskcount + 1
                    })
                    console.log(this.state.taskcount
                    );
                }}>Add Task</button><br/><br/>
                <p>Number of Tasks : {this.state.taskcount}</p>
            </div>
        )
    }
}

export default Todolist;