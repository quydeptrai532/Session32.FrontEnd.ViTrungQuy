let img1=document.getElementsByTagName("img")[0]
let img2=document.getElementsByTagName("img")[1]
let img3=document.getElementsByTagName("img")[2]

function bigImg(img){
    img.style.height="100%"
    img.style.width="100%"
    
}
function smallImg(img){
    img.style.height="300px"
    img.style.width="300px"
}
function imgClick(img){
  img.addEventListener("click",function(){
    bigImg(img)
    event.stopPropagation()
  })
  document.addEventListener("click",function(){
    smallImg(img)
  })
}
imgClick(img1)
imgClick(img2)
imgClick(img3)