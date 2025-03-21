let but = document.getElementsByTagName("button")[0]
let input = document.getElementById("quest")
let taskList = document.getElementsByTagName("div")[0]
let todoList = []
function todo() {
    taskList.innerHTML = 
    todoList.map(quest => 
        `<p>${quest} <span> <button type="submit" class="fix">Sửa</button><button type="submit" class="delete">Xóa</button> </span> </p> `).join("")

    let delQuest=document.querySelectorAll(".delete")
    delQuest.forEach((x,i)=>{
        x.addEventListener("click",function(){
             let confirmDel=confirm(`Bạn có chắc chắn muốn xóa ${todoList[i]} hay không`)
             if(confirmDel){
                todoList.splice(i,1)
                todo()
             }
        })
    }) 
    let fixQuest=document.querySelectorAll(".fix")
    fixQuest.forEach((x,i)=>{
        x.addEventListener("click",function(){
            let n=prompt(`Mời bạn nhập nội dung muốn sửa`)
            todoList[i]=n
            todo()
        })
    }) 
}
but.addEventListener("click", function () {
    event.preventDefault()
    let inputValue = input.value
    if (inputValue === "") {
        alert(`Dữ liệu nhập vào không được để trống`)
    } else {
        todoList.push(inputValue)
        todo()
        input.value = ""
    }

})