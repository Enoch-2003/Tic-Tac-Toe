let boxes = document.querySelectorAll(".g");
let rstB = document.querySelector(".reset");
let newG = document.querySelector(".New");

count = 0;
w_check = false;
turn0 = true;

const W_pat = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

document.querySelector(".inp").value = "New Game";

boxes.forEach((box) =>{
  box.addEventListener("click", () =>{
    if(box.innerText == ""){
      if(turn0){
        box.innerText = "X";
        turn0 = false;
        count = count + 1;
        document.querySelector(".inp").value = "Turn for Player O";
        draw();
      }
      else{
        box.innerText = "O";
        turn0 = true;
        count = count + 1;
        document.querySelector(".inp").value = "Turn for Player X";
        draw();
      }
    }
    checkWin();
  })
}) 
const draw = () =>{
   if(count == 9 && w_check == false){
   document.querySelector(".inp").value = "Match Draw";
  } 
}

 const dis = () =>{
   turn0 = true;
   for(let box of boxes){
     box.disabled = true;
   }
 }
const reset = () =>{
  turn0 = true;
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
  document.querySelector(".inp").value = "New Game";
}
const checkWin = () => {
  for(let pattern of W_pat){
    let p1val = boxes[pattern[0]].innerText;
    let p2val = boxes[pattern[1]].innerText;
    let p3val = boxes[pattern[2]].innerText;
    if(p1val != "" && p2val != "" && p3val!=""){
      if(p1val == p2val && p2val == p3val){
        document.querySelector(".inp").value = "Player "+p1val + " Won";
        dis();
        w_check = true;
      }
    }
  }
}
  
rstB.addEventListener("click", reset);
newG.addEventListener("click", reset);

