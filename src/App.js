import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {

  

  constructor(){
    super()
    this.state = {
      todoArray: []
    }



  }


  componentDidMount(){
    var self = this; // prevent overwrite 'this', now 'self' is 'app.this'
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        var todos = JSON.parse(this.responseText);
        console.log(todos);
        var i = 0;
        while (i < todos.length){
          self.setState({ todoArray: [...self.state.todoArray, todos[i]]})
          i++;
        }
        var toOrder = self.state.todoArray;
        toOrder.sort(function (a,b){
          return a.text.localeCompare(b.text);
        })
        self.setState({todoArray:toOrder});
      }
    }
    xhttp.open("GET", 'https://cse204.work/todos', true);
    xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
    xhttp.send();
  }


  remove(e){
    var self = this;
    var id = e.currentTarget.id;
    var newUrl = 'https://cse204.work/todos' + '/' + id;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
          window.location.reload();
            console.log(this.responseText);
            
        } else if (this.readyState === 404){
            console.log(this.responseText);
        }

        

    };
    xhttp.open("DELETE", newUrl, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
    xhttp.send();
  }





  render() {
    return (
      <><div id="content">

        <NewTodo addTodo={this.addTodo}/>

        {this.state.todoArray.map((todo) =>  // iterate through the array and render multi Todo
          <Todo key={todo.id}
                id={todo.id}
                completed={todo.completed}
                remove={this.remove}
                text={todo.text}/>
        )}

        </div></>
    );
  }
}

export default App;
