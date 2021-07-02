import {observer} from "mobx-react";
import React, {Component} from "react";
import ListElement from "./ListElement";
import {List} from "./App";

interface ToDoListProps{
    list: List;
}

@observer
class ToDoList extends Component<ToDoListProps>{
    render() {
        const { list } = this.props;
        return(
            <div className='listDiv'>
                {list.list.map((e:string,index: number) => <ListElement index={index} key={index} value={e} list={list}/>)}
            </div>
        )
    }
}
export default ToDoList;