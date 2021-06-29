import './App.css';
import  React, { Component } from 'react';
import { observable, action} from 'mobx';
import { observer } from 'mobx-react';

class List {
  list:string[] = observable(['1','2']);
  
  @action removeFromList = function (this: any,value: string): any {
    this.list.splice(this.list.indexOf(value),1); 
  }
  @action addToList = function (this: any,value:string): any {
    this.list.push(value);
  }
}

const appList = new List();

@observer class ListElement extends Component<any,any> {
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

@observer class ToDoList extends Component<any,any>{
  render() {
    const { list } = this.props;
    return(
      <div className='listDiv'>
        {list.list.map((e:string,i:number = 0) => <ListElement key={i++} value={e} list={appList}/>)}
      </div>
    )
    }
}
class AddToDo extends Component<any,any>{
  render(){
    return(
      <div>
        <input type='text' name='newTask' />
        <button onClick={() => this.props.list.addToList((document.getElementsByName('newTask')[0] as HTMLInputElement).value)}></button>
      </div>
    )
  }
}
class App extends Component<{}>{
  render(){
    return (
      <div>
        <ToDoList list={appList}/>
        <AddToDo list={appList}/>
      </div>
    );
  }
}

export default App;