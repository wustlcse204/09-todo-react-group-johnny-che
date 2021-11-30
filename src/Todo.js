import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    

  render() {

    if(this.props.completed){
      return(
        <>
          <table id="todoList">
            <tbody>
              <tr className = 'tr'>
 
                <td><input type = 'checkbox' id = {this.props.id} checked = {this.props.completed} onChange={this.isChecked}></input></td>

                <td>{this.props.text}</td>
                <td><button className = 'remove' id = {this.props.id} onClick={this.props.remove}><i className='fa fa-trash'></i></button></td>
                <td><button className = 'edit' id = {this.props.id} onClick={this.edit}><i className='fa fa-edit'></i></button></td>
      
              </tr>
            </tbody>
          </table>
        </>
      )

    } else {

      return (
        <>
          <table id="todoList">
            <tbody>
              <tr className = 'tr'>
 
                <td><input type = 'checkbox' id = {this.props.id} checked = {this.props.completed} onChange={this.isChecked}></input></td>

                <td><b>{this.props.text}</b></td>
                <td><button className = 'remove' id = {this.props.id} onClick={this.props.remove}><i className='fa fa-trash'></i></button></td>
                <td><button className = 'edit' id = {this.props.id} onClick={this.edit}><i className='fa fa-edit'></i></button></td>
      
              </tr>
            </tbody>
          </table>
        </>
    );

    }
      
    
    
  }




  edit(e){
    var data = {text:""};
    var editID = e.currentTarget.id;
    var newUrl = 'https://cse204.work/todos' + '/' + editID;
    var newText = prompt("Rename your ToDo: ");
    data.text = newText;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
          window.location.reload();
            console.log(this.responseText);
        } else if (this.readyState === 4){
            console.log(this.responseText);
        }

    };
    xhttp.open("PUT", newUrl, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
    xhttp.send(JSON.stringify(data));


  }





  isChecked(e){
    if(e.currentTarget.checked){
      var complete = {completed:true};
      var id = e.currentTarget.id;
      var newUrl = 'https://cse204.work/todos' + '/' + id;

      var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              window.location.reload();
                console.log(this.responseText);
            } else if (this.readyState == 4){
                console.log(this.responseText);
            }

        };
        xhttp.open("PUT", newUrl, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
        xhttp.send(JSON.stringify(complete));

    } else {
      var complete = {completed:false};
      var id = e.currentTarget.id;
      var newUrl = 'https://cse204.work/todos' + '/' + id;

      var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              window.location.reload();
                console.log(this.responseText);
            } else if (this.readyState == 4){
                console.log(this.responseText);
            }

        };
        xhttp.open("PUT", newUrl, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
        xhttp.send(JSON.stringify(complete));
    }
  }


  
}

export default Todo;
