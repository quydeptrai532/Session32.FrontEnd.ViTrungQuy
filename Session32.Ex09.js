let but1 = document.getElementsByTagName("button")[0];
let but2 = document.getElementsByTagName("button")[1];
let progress = document.getElementsByClassName("progress-bar")[0];
let body=document.body
let currentWidth = 10; 
let currentOpacity = 0.7
but1.addEventListener("click", function () {
    if (currentWidth < 100) { 
        currentWidth += 10;
        progress.style.width = currentWidth + "%";
    }
    if( currentOpacity <=1){
        currentOpacity +=0.1
        body.style.opacity=currentOpacity
    }

});

but2.addEventListener("click", function () {
    if (currentWidth > 0) { 
        currentWidth -= 10;
        progress.style.width = currentWidth + "%";
    }
    if( currentOpacity >=0.7){
        currentOpacity -=0.1
        body.style.opacity=currentOpacity
    }
});