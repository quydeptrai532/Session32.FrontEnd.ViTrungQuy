let but=document.getElementsByTagName("button")[0]
let count=0
let p=document.getElementsByTagName("p")[0]

but.addEventListener("click",function(){
    count++;
    p.innerText=`Số lần bấm ${count}`
    if(count>30){
        p.innerText=`Bấm ít thôi không hỏng chuột`
    }
})

