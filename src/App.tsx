import './App.css';
import  React, { Component } from 'react';
import { observable, action} from 'mobx';
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

export class List {
  list:string[] = observable([]);
  s: string;
  constructor() {
    this.s = (localStorage.getItem('list')??'');
    this.s = this.s.replace(/[\[\]]/g,'');
    this.s = this.s.replace(/"/g,'');
    (this.s === '') ? this.list = observable([]) : this.list = observable(this.s.split(','));
    };

  @action
  public removeFromList = (index: number): void =>{
    this.list.splice(index,1);
    localStorage.setItem('list',JSON.stringify(this.list));
    console.log(this.list)
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
      <div className='appDiv'>
        <div>What to do:</div>
        <ToDoList list={appList}/>
        <AddToDo list={appList}/>
      </div>
    );
  }
}

export default App;