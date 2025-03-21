let body=document.body
let but=document.getElementsByTagName("button")[0]

but.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.background = `rgb(${r}, ${g}, ${b})`; 
});
