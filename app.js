

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//   import { getDatabase ,ref, onChildAdded,set,child }

//  from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyADJmsBe1Me_75aWuYLHlPRNEpdTG3X9NU",
//     authDomain: "todoappdb-4666f.firebaseapp.com",
//     databaseURL: "https://todoappdb-4666f-default-rtdb.firebaseio.com",
//     projectId: "todoappdb-4666f",
//     storageBucket: "todoappdb-4666f.appspot.com",
//     messagingSenderId: "891489527644",
//     appId: "1:891489527644:web:de61413bb8016df6200399",
//     measurementId: "G-8E32TY51SZ"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//    const database = getDatabase(app);


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getDatabase ,ref, onChildAdded,set,child }

 from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADJmsBe1Me_75aWuYLHlPRNEpdTG3X9NU",
    authDomain: "todoappdb-4666f.firebaseapp.com",
    databaseURL: "https://todoappdb-4666f-default-rtdb.firebaseio.com",
    projectId: "todoappdb-4666f",
    storageBucket: "todoappdb-4666f.appspot.com",
    messagingSenderId: "891489527644",
    appId: "1:891489527644:web:de61413bb8016df6200399",
    measurementId: "G-8E32TY51SZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);



// miss start

const db = getDatabase();
const commentsRef = ref(db, 'todos');
onChildAdded(commentsRef, (data) => {
 // writing done 
//  sirghous




// end


//  // todoitem

 var li = document.createElement('li')
 var lip = document.createElement('p')
 lip.innerHTML = (data.val().value)
 console.log(lip)
 li.appendChild(lip)
 li.setAttribute("class", "liii")
 

 // edit icon
 editIcon = document.createElement("i")
 editIcon.setAttribute("class", "fa-regular  fa-pen-to-square editbtn")
 editIcon.setAttribute("id", data.val().key)
//  editIcon.setAttribute("id", 'EditData')
//  editIcon.setAttribute('click',"editItem(this)")
editIcon.addEventListener("click",function(e){
    console.log("lmba" + e.srcElement.parentNode.firstChild.nodeValue)
    var key =e.srcElement.id
console.log("ki"+key)
    var editValue = prompt("Enter edit value", e.srcElement.parentNode.firstChild.nodeValue)
   console.log(editValue)
    var editTodo = {
        value: editValue,
        key: key
    }
    console.log("edittodo"+editTodo)
    console.log("edittodo"+editTodo.value)
    console.log("edittodo"+editTodo.key)
    const dbRef = ref(getDatabase());
    set(child(dbRef,`todos/${key}`),editTodo)
     e.srcElement.parentNode.firstChild.nodeValue = editValue
     lip.innerHTML = (editValue)

})

 li.appendChild(editIcon)

 // dlt icon
 dltBtn = document.createElement("i")
 dltBtn.setAttribute("class", "fa-solid fa-trash-can")
  
 dltBtn.setAttribute("id", data.val().key)
 dltBtn.addEventListener("click",function(e) {
    var db=getDatabase()
    console.log((e.srcElement.id))
     remove(child(ref(db,'todos'),e.srcElement.id))
     e.srcElement.parentNode.remove()
    
})

    // dltBtn.setAttribute('onclick',deleteItem(dltKey));

 li.appendChild(dltBtn)

 list.appendChild(li)



})


// miss end


// var todoItem = document.getElementById('todoItem')
var writeData=document.getElementById('writeData')

writeData.addEventListener('click',function(e){
    
    // var db=getDatabase()
    // console.log("db" + db)
    // var database =ref(getDatabase(),'todos')
    // console.log("database" + database)

    var key = push(ref(getDatabase(),'todos'));
     
   var todo = {
        value: todoItem.value,
        key: key.key
    }
//  console.log("todo"+todo)
    set(key,todo)
 
    todoItem.value =""

})

// function deleteItem(e){
//     console.log('last')
// }

// var dltTodo=document.getElementsByClassName("fa-trash-can")
// console.log(dltTodo)
// dltTodo.addEventListener('click',function(){
//     console.log("Gggg")
// })


// console.log(editIcon)




var dltBtn=document.getElementById('dltBtn')
console.log("yeh   "+dltBtn)

dltBtn.addEventListener('click',function(e){
    console.log("uff")
})














// dltBtn.addEventListener('click',function(e){
//     console.log('here')
//     // console.log(e)
//     var db=getDatabase()
//     // remove(child(ref(db,'todos')))
//     // remove(e) 
//     // remove(ref(db, 'todoItem/' + key))
// } )
// {
//     var db=getDatabase()
//     remove(child(ref(db,'todos')))
    
// }

var deleteAll=document.getElementById('deleteAll')
console.log("yh" +deleteAll)
deleteAll.addEventListener('click', function (e) {
    console.log("andar")
    list.innerHTML = ""
    // ref(getDatabase(),'todos')
 remove(   ref(getDatabase(),'todos') )
})

 
// function editItem(e){
//     var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
//     var editTodo = {
//         value: editValue,
//         key: e.id
//     }
//     firebase.database().ref('todos').child(e.id).set(editTodo)

//     e.parentNode.firstChild.nodeValue = editValue

// }



// mera apne yeh tha
// writeData.addEventListener('click', function (e) {
//     key++;
//     var db = getDatabase();

//     set(ref(db, 'todoItem/' + key), {
//         todoItem: todoItem.value,

//     })
//         .then(function (e) {
//             // alert('data stored succesfully')
//         })
//         .catch(function (error) {
//             alert('data is not stored')
//         })

//         // writing done

//     var li = document.createElement('li')
     
//     // todoitem
//     var lip = document.createElement('p')
//     lip.innerHTML = (todoItem.value)
//     console.log(lip)
//     li.appendChild(lip)
//     li.setAttribute("class", "liii")

//     // edit icon
//     editIcon = document.createElement("i")
//     editIcon.setAttribute("class", "fa-regular  fa-pen-to-square editbtn")
//     editIcon.setAttribute("id", "todoEdit")
//     li.appendChild(editIcon)

//     // dlt icon
//     dltBtn = document.createElement("i")
//     dltBtn.setAttribute("class", "fa-solid fa-trash-can")
//     dltBtn.setAttribute("id", "todoDlt")
//     li.appendChild(dltBtn)

//     list.appendChild(li)

//     todoItem.value = ""

//     console.log("dltbtn"+dltBtn)
//     // dlt
//     todoDlt.addEventListener('click', function (e) {
//         dltBtn.parentNode.remove();
//         const db = getDatabase();
//         remove(ref(db, 'todoItem/' + key))
//             .then(function () {
//                 alert('data remove successfully')
//             })
//     })
// // edit
// var todoEdit=document.getElementById('todoEdit')
//     todoEdit.addEventListener('click', function (e) {
//         console.log(list)
//         var val = prompt("enter edit value", lip.innerHTML)
//         lip.innerHTML = val;
//         var todoItem = document.getElementById('todoItem')
//         todoItem.value = val;
//         const db = getDatabase();

//         update(ref(db, 'todoItem/' + key), {
//             todoItem: todoItem.value,
//         })
//             .then(function (snapshot) {
//                 alert('data updated successfully')

//             })
//             .catch(function (error) {
//                 alert('data is not updated')
//             })
//     })


// })
// // dlt
// var todoDlt=document.getElementById('todoDlt')
// todoDlt.addEventListener('click', function (e) {
//     dltBtn.parentNode.remove();
//     const db = getDatabase();
//     remove(ref(db, 'todoItem/' + key))
//         .then(function () {
//             alert('data remove successfully')
//         })
// })


 
