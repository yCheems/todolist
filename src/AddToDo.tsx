import React, {Component} from "react";
import {List} from "./App";
import './AddToDo.css';
import {Icon} from "@skbkontur/react-icons";
interface AddToDoProps{
    list: List;
}
interface AddToDoState{
    taskInput: string;
}
class AddToDo extends Component<AddToDoProps,AddToDoState>{
    constructor(props:AddToDoProps) {
        super(props);
        this.state = {
            taskInput: ''
        }
    }
    inputHandler = ():void => {
        this.setState({taskInput: (document.getElementsByName('newTask')[0] as HTMLInputElement).value})
    }

    render(){
        return(
            <div className='addDiv'>
                <form onSubmit={() => this.props.list.addToList(this.state.taskInput)}>
                    <input type='text' placeholder='Новая задача...' name='newTask' onChange={(event) => this.inputHandler()}/>
                    <button type='submit'><Icon.Add /></button>
                </form>
            </div>
        )
    }
}
export default AddToDo;