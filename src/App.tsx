import './App.css';
import  React, { Component } from 'react';
import {observable, action} from 'mobx';
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";


export class List {
  list:string[] = observable([]);
  s: string;
  constructor() {
    this.s = localStorage.getItem('list') ?? '';
    this.list = this.s === '' ? [] : JSON.parse(this.s);
  }

  @action
  public removeFromList = (index: number): void =>{
    this.list.splice(index,1);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
  @action
  public addToList = (value:string): void =>{
    this.list.push(value);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
  @action
  public changeListElement = (index:number,value:string): void =>{
    this.list.splice(index,1,value);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
}

const appList = new List();


class App extends Component<{}>{
  render(){
    return (
        <div className='App'>
          <div className='appDiv'>
            <div>What to do:</div>
            <AddToDo list={appList}/>
            <ToDoList list={appList}/>
          </div>
        </div>
    );
  }
}

export default App;