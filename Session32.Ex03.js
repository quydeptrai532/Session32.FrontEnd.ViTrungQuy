let but = document.getElementsByTagName("button")[0]
let ol = document.getElementsByTagName("ol")[0]
let input= document.getElementById("sub")

but.addEventListener("click", function () {
    event.preventDefault()
    let inputValue = input.value
    if(inputValue===""){
        alert(`Tên môn học ko được để trống`)
    } 
    else{
        ol.innerHTML+=`<li>${inputValue}</li>`
        inputValue=""
    }
    
})