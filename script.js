let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 1;
for(div of divs){
    div.innerText = `unique vale ${idx}`;
    idx++;
}


