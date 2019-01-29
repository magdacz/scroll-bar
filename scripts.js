const div = document.createElement('div');
document.body.appendChild(div);

let size = 0;
let grow = true;

document.body.style.height = 10000 + "px";
div.style.width = 100 +"%";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;
div.style.background = "green";
div.style.height = size + "px";

function changeHeight() {
  if ( size >= window.innerHeight/2) {
    grow = false;
  } else if (size <= 0) {
    grow = true;
  }
  
  if(grow) {
    size +=5;
    div.style.height = size + "px";
    div.style.background = "green";
  } else {
    size -=5;
    div.style.background = "red";
    div.style.height = size + "px";
  }
}

window.document.addEventListener('scroll', changeHeight);