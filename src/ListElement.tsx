import {observer} from "mobx-react";
import React, {Component} from "react";
import { List } from "./App.js";
import styled from './ListElement.css';
import { Icon } from '@skbkontur/react-icons';



interface ListElementProps{
    list: List;
    value: string;
    index: number;
}
interface ListElementState{
    checked: boolean;
}

@observer
class ListElement extends Component<ListElementProps,ListElementState> {
    constructor(props:ListElementProps) {
        super(props);
        this.state = {
            checked: false
        }
    }

    checkHandler = () => this.setState({checked: !this.state.checked})
    changeHandler = () => {
        this.props.list.changeListElement(this.props.index,
            (document.getElementsByName('elementText')[this.props.index] as HTMLInputElement).value)}

    render(){
        return(
            <div className='listElement' >
                <input className={styled.checkbox} type='checkbox' onChange={this.checkHandler} />
                <input className='elementText' name='elementText' type='textarea' onChange={this.changeHandler} value={this.props.value} disabled={this.state.checked}/>
                <button onClick={() => this.props.list.removeFromList(this.props.index)}><Icon.Trash/> </button>
            </div>
        )
    }
}
export default ListElement;