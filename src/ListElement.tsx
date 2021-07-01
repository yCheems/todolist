import {observer} from "mobx-react";
import React, {Component} from "react";
import { List } from "./App.js";

interface ListElementProps{
    list: List;
    value: string;
}
@observer
class ListElement extends Component<ListElementProps> {
    checkHandler = () => {
        alert('checked');
    }
    render(){
        return(
            <div className='listElement'>
                <input type='checkbox' onChange={this.checkHandler}></input>
                {this.props.value}
                <button onClick={() => this.props.list.removeFromList(this.props.value)}></button>
            </div>
        )
    }
}
export default ListElement;