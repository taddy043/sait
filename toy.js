function toy(num) {
  let adr = "img/s" + num + ".png";
  let table = document.querySelector("#content");
  let nimg = document.createElement('img');
  let box = table.getBoundingClientRect();
  nimg.setAttribute('src', adr);
  nimg.setAttribute('class', 'draggableb');
  nimg.style.left = Math.floor(Math.random() * 70) +  box.left + "px";
  nimg.style.top = Math.floor(Math.random() * 300 + 75) + box.top + "px";
  table.appendChild(nimg);
}

function nam() {
  let arr = [[1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1],
             [1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1],
             [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 
             [1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1], 
             [1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1]];
let list = document.querySelectorAll(".draggableb");
    let k = 0;
  for (let i = 0; i < 17; i++) {
      for (let j = 0; j < 5; j++) {
          if (arr[j][i] == 1) { 
              list.item(k).style.left = (i + 1) * 60 + "px";
              list.item(k).style.top = (j + 1) * 60 + "px";
              k++;
          }
          if (k == list.length) break;
      }
      if (k == list.length) break;
  }
}

function init() {
  let table = document.querySelector("#sidebar");
  let box = table.getBoundingClientRect();
  let tree = document.querySelector(".draggabletr");
  tree.style.left = 100 + box.left + "px";
  tree.style.top = 25 + box.top + "px";
}
