import React, {Component} from "react";
import {List} from "./App";
import {resetGlobalState} from "mobx/dist/core/globalstate";

interface AddToDoProps{
    list: List;
}
interface AddToDoState{
    taskInput: string;
}
class AddToDo extends Component<AddToDoProps,AddToDoState>{
    inputHandler = () => {
        this.setState({taskInput: (document.getElementsByName('newTask')[0] as HTMLInputElement).value})
    }
    render(){

        return(
            <div>
                <input type='text' name='newTask' onChange={() => this.inputHandler()}/>
                <button onClick={() => this.props.list.addToList(this.state.taskInput)}></button>
            </div>
        )
    }
}
export default AddToDo;