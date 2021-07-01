import './App.css';
import  React, { Component } from 'react';
import { observable, action} from 'mobx';
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

export class List {
  list:string[] = observable([]);
  s: string;
  constructor() {
    this.s = (localStorage.getItem('list')??' ');
    this.s = this.s.replace(/[\[\]]/g,'');
    this.s = this.s.replace(/"/g,'');
    this.list = observable(this.s.split(','));
    };
  


  @action
  public removeFromList = (value: string): void =>{
    this.list.splice(this.list.indexOf(value),1); 
    localStorage.setItem('list',JSON.stringify(this.list));
  }
  @action
  addToList = (value:string): void =>{
    this.list.push(value);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
}

const appList = new List();


class App extends Component<{}>{
  render(){
    return (
      <div>
        <ToDoList list={appList}/>
        <AddToDo list={appList}/>
        <div>hi</div>
      </div>
    );
  }
}

export default App;