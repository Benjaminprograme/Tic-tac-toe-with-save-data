//Creating the board
const board=document.getElementById("board");
for(i=0;i<9;i++){
    const createDiv=document.createElement("div");
    createDiv.className="Block";
    board.appendChild(createDiv);
}
//Adding funconality to blocks
const blocks=document.getElementsByClassName("Block")
for(i=0;i<9;i++){
 blocks[i].addEventListener("click",e=>{console.log(i)})
  
}