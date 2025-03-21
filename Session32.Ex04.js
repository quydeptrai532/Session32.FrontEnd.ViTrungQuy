let but=document.getElementsByTagName("button")[0]
let input = document.getElementById("email")
let p = document.getElementsByTagName("p")[0]

function mailCheck(email) {
    if (email.slice(email.length - 4) !== ".com" && email.slice(email.length - 3) !== ".vn") {
        return false
    }
    let checkMail=false
    for (let i=0;i<email.length;i++) {
           if(email[i]==='@'){
                checkMail=true;
                break;
           }
    }
   return checkMail
}

but.addEventListener("click",function(){
    event.preventDefault()
    let inputValue = input.value
    if(mailCheck(inputValue)){
         p.innerHTML=`email hợp lệ`
         p.style.color="green"
     } else{
          p.innerHTML=`email không hợp lệ `
          p.style.color="red"
     }
})
 
