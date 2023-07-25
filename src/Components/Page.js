import React, { Component } from 'react'

class Page extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:"Learn HTML Basics",index:1},{task:"Learn Styling by CSS",index:2},{task:"Learn JavaScript",index:3}],
            currTask:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            currTask:e.target.value
        })
        
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,index:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handleDelete=(id)=>{
        let arr=this.state.tasks.filter((taskobj)=>{
            return taskobj.index!=id;
        })
        this.setState({
            tasks:[...arr]
        })
    }
    render() {
        return (
        <div className='rootDiv'>
            <h1>Enter your work to be done :</h1>
            <input className="InputField" type="text" value={this.state.currTask} onChange={this.handleChange}></input>
            <button className="SubButton" onClick={this.handleSubmit}>Submit</button>
            {
                this.state.tasks.map((taskobj)=>(
                    <ul>
                        <li>
                            <div className="todoItem" key={taskobj.index}>
                                <p className="todoText"> {taskobj.task}</p>
                                <button className="delButton" onClick={()=>this.handleDelete(taskobj.index)}>Delete</button>
                            </div>
                        </li> 
                    </ul>
                    
                ))
            }
        </div>
        )
    }
}

export default Page;