import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// var baseUrl = 'https://cse204.work/todos';

// function getToDoList(){
//     var xhttp = new XMLHttpRequest();
//     var list = document.getElementById("todoList");
//     list.innerHTML = "";

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200) {
//             var todos = JSON.parse(this.responseText);
//             console.log(todos);
//             var i = 0;
//             while (i < todos.length){
                

//                 var tr = document.createElement("tr");
//                 var checkBox = document.createElement("td");
//                 var inner = document.createElement("td");
//                 var button = document.createElement("td");
//                 var button2 = document.createElement("td");

//                 var check = document.createElement("input");
//                 check.setAttribute("type", "checkbox")
//                 check.setAttribute("id", "@" + todos[i].id);
                
//                 var innerText = document.createTextNode(todos[i].text)
//                 inner.setAttribute("id", "$" + todos[i].id);
//                 if(todos[i].completed == true){
//                     check.checked = true;
//                     inner.style.fontWeight = "lighter";
//                     inner.style.color = "grey";
//                 } else {
//                     inner.style.fontWeight = "bold";
//                     inner.style.color = "black";



//                 }

//                 var deleteButton = document.createElement("button");
//                 deleteButton.setAttribute("id", todos[i].id);
//                 deleteButton.setAttribute("class", "remove");
//                 deleteButton.innerHTML = "<i class='fa fa-trash'></i>";

//                 var editButton = document.createElement("button");
//                 editButton.setAttribute("id", "#" + todos[i].id);
//                 editButton.setAttribute("class", "edit");
//                 editButton.innerHTML = "<i class='fa fa-edit'></i>";
                

//                 checkBox.appendChild(check);
//                 inner.appendChild(innerText);
//                 button.appendChild(deleteButton);
//                 button2.appendChild(editButton);
                
//                 tr.appendChild(checkBox);
//                 tr.appendChild(inner);
//                 tr.appendChild(button);
//                 tr.appendChild(button2);

//                 list.appendChild(tr);
//                 list.appendChild(document.createElement("hr"));


//                 document.getElementById(todos[i].id).addEventListener("click", deleteToDo, false);
//                 document.getElementById("@" + todos[i].id).addEventListener("click", ifChecked, false);
//                 document.getElementById("#" + todos[i].id).addEventListener("click", editToDo, false);


                
//                 i++;

//             }
//         }
//     };

//     xhttp.open("GET", baseUrl, true);
//     xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//     xhttp.send();
// }


// function addToDo(){

//     var data = {text:""};
//     var newtodo = document.getElementById("inputBox");
//     data.text = newtodo.value;


//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             var todo = JSON.parse(this.responseText);
//             getToDoList();
//             document.getElementById("inputBox").value = "";
//             console.log(todo);
//         } else if (this.readyState == 4){
//             console.log(this.responseText);
//         }

//     };
//     xhttp.open("POST", baseUrl, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//     xhttp.send(JSON.stringify(data))

    
// }



// function deleteToDo(){
//     var id = this.getAttribute("id");
//     var newUrl = baseUrl + '/' + id;
    
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             getToDoList();
//             console.log(this.responseText);
            
//         } else if (this.readyState == 404){
//             console.log(this.responseText);
//         }

        

//     };
//     xhttp.open("DELETE", newUrl, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//     xhttp.send();


    
// }

// function ifChecked(){
//     if (this.checked){
//         var complete = {completed:true};
//         var checkBoxID = this.getAttribute("id");
//         var realID = checkBoxID.slice(-36);
//         console.log(realID + " is set to true");
//         var title = document.getElementById("$" + realID);
//         title.style.color = "grey";
//         title.style.fontWeight = "lighter";

//         var newUrl = baseUrl + '/' + realID;


//         var xhttp = new XMLHttpRequest();

//         xhttp.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 console.log(this.responseText);
//             } else if (this.readyState == 4){
//                 console.log(this.responseText);
//             }

//         };
//         xhttp.open("PUT", newUrl, true);
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//         xhttp.send(JSON.stringify(complete));

//     } else {
//         var complete = {completed:false};
//         var checkBoxID = this.getAttribute("id");
//         var realID = checkBoxID.slice(-36);
//         //console.log(realID) + " is set to false";
//         var title = document.getElementById("$" + realID);
//         title.style.color = "black";
//         title.style.fontWeight = "bold";

//         var newUrl = baseUrl + '/' + realID;


//         var xhttp = new XMLHttpRequest();

//         xhttp.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 console.log(this.responseText);
//             } else if (this.readyState == 4){
//                 console.log(this.responseText);
//             }

//         };
//         xhttp.open("PUT", newUrl, true);
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//         xhttp.send(JSON.stringify(complete));
//     }
    


// }


// function editToDo(){
//     var data = {text:""};
//     var editID = this.getAttribute("id");
//     var realEditID = editID.slice(-36);

//     var newUrl = baseUrl + '/' + realEditID;

//     var newText = prompt("Rename your ToDo: ");
//     data.text = newText;

//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             getToDoList();
//             console.log(this.responseText);
//         } else if (this.readyState == 4){
//             console.log(this.responseText);
//         }

//     };
//     xhttp.open("PUT", newUrl, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("x-api-key", "4da60e-dea483-73cb33-fe957a-0cc53c");
//     xhttp.send(JSON.stringify(data));


// }



// document.addEventListener("DOMContentLoaded", getToDoList, false);
// document.getElementById("add").addEventListener("click", addToDo, false);


