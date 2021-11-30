import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <>

            <div id="title">
                <h2>ToDo App (React)</h2>

            </div>


            <input id="inputBox" type="text" name="q" placeholder="Add your new Todo..." />

            <button className="btn" id="add" onClick = {this.addTodo}><i className="fa fa-plus"></i></button>


            

        </>
    );
  }



  addTodo(){
      var data = {text:""};
      var newtodo = document.getElementById("inputBox");
      data.text = newtodo.value;


      var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                var todo = JSON.parse(this.responseText);
                window.location.reload();
                console.log(todo);
                document.getElementById("inputBox").value = "";
            } else if (this.readyState === 4){
                console.log(this.responseText);
            }

        };
    xhttp.open("POST", 'https://cse204.work/todos', true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
    xhttp.send(JSON.stringify(data))

  }


}

export default NewTodo;
