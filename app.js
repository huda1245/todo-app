var list = document.getElementById('todo-list') 
function addlist(){

    var li = document.createElement("li");
    var inputValue = document.getElementById("list-item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.setAttribute('class', 'btnlist')
    if (inputValue === '') {
      alert("Fill empty space ");
    } else {
      document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("list-item").value = "";
    


    var editbtn = document.createElement('button')
    var editnode = document.createTextNode('Edit')
    editbtn.appendChild(editnode)
    editbtn.setAttribute('class', 'editbtn')
    editbtn.setAttribute('onclick' , 'editItem(this)')
    li.appendChild(editbtn)

 

    var delbtn = document.createElement('button')
    var btnnode = document.createTextNode('Delete')
    delbtn.appendChild(btnnode)
    delbtn.setAttribute('class', 'delbtn')
    delbtn.setAttribute('onclick','deleteitem(this)')
    li.appendChild(delbtn) 


}

function editItem(e){
    var v = e.parentNode.firstChild.nodeValue
    var edit = prompt("Enter updated value ", e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = edit
}

function deleteitem(e){
    e.parentNode.remove()
}

function alldel(){
    list.innerHTML = ""
}
