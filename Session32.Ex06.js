let butPlus=document.getElementsByTagName("button")[0]
let butSub=document.getElementsByTagName("button")[1]
let h1=document.getElementsByTagName("h1")[0]
let font=40
function updateFont(){
    h1.style.fontSize=font+"px"
}
updateFont()
butPlus.addEventListener("click",function(){
       font+=2
       updateFont()
})
butSub.addEventListener("click",function(){
       font-=2
       updateFont()
})