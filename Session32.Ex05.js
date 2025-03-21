let todoList=[]
let input = document.getElementById("quest");
let but = document.getElementsByTagName("button")[0];
let taskList=document.getElementsByTagName("div")[0]

function displayTodo(){
    taskList.innerHTML = todoList.map(todo=>`<p>${todo} <span class="delete">X</span> </p>`).join("")
    let delQuest=document.querySelectorAll(".delete")
    delQuest.forEach((x,i)=>{
        x.addEventListener("click",function(){
           let confirmDel=confirm(`Bạn có chắc muốn xóa ${todoList[i]} hay ko`)
           if(confirmDel){
            todoList.splice(i,1)
            displayTodo()
           }
        })
    })
}
but.addEventListener("click", function () {
    event.preventDefault();
    let inputValue = input.value;
    if(inputValue===""){
        alert(`Dữ liệu nhập vào ko được để trống`)
        return
    }
    todoList.push(inputValue)
    displayTodo()
    inputValue=""
});
