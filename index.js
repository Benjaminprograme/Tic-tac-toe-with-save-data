//Game data
let boardValue=[1,2,3,4,5,6,7,8,9];
let Win=false;
//Player data
let whoIsPlaying="X";
let timesPlayed=0;
const playingInfoText=document.getElementById("Playing-info");
//HTML elements data
playingInfoText.innerHTML=whoIsPlaying+playingInfoText.innerHTML;
const createText=document.createElement("p");
const winLoseDataBoard=document.getElementById("Win-lose-data");
const infoText=document.getElementById("Info-text");
const board=document.getElementById("board");


//Creating the board
for(i=0;i<9;i++){
const createDiv=document.createElement("div");
createDiv.className="Block";
createDiv.id=i+1
board.appendChild(createDiv);
//Block data
let idOfBlocks=document.getElementsByTagName("div")[i+1].id;
const blocks=document.getElementsByClassName("Block");
//Adding event handeling
function  placeSymbol(){
//Starting a new rounde
 if(timesPlayed==9 || Win==1){
   clearData();}
//Placing symbols 
 if (boardValue[idOfBlocks-1] !== "X" && boardValue[idOfBlocks-1] !== "O"){
//Visual chanchegs
document.getElementById(idOfBlocks).innerText=whoIsPlaying; 
boardValue[idOfBlocks-1]=whoIsPlaying;
playingInfoText.innerHTML=" is playing";
//Backgrounde chanchegs
timesPlayed++;
 checkTheSymbols() 
if(whoIsPlaying=="X") 
{whoIsPlaying="O"} 
else{
whoIsPlaying="X"}
playingInfoText.innerHTML=whoIsPlaying+playingInfoText.innerHTML;}}
blocks[i].addEventListener("click",placeSymbol);}

//Win or draw logic
//Reseting the board and data
function clearData(){
    board.style.opacity="1"
     for(i=0;i<9;i++){
        boardValue=[1,2,3,4,5,6,7,8,9];
        document.getElementById(i+1).innerText="";
        timesPlayed=0;
        Win=false;
        infoText.innerHTML=""; }}
//Win logic
function checkForWin(x,y,z){
    if(boardValue[x]==boardValue[y] && boardValue[y]==boardValue[z]){
    addMatchData("win")
    Win=true; 
    board.style.opacity="0.5"
    infoText.innerHTML="Click on the board to start playing"}}
//Draw logic
  function checkForDraw(){
    if(timesPlayed==9 && Win!=true){
  addMatchData("draw");
  board.style.opacity="0.5";}}
//Combinansions
function checkTheSymbols() {
    checkForWin(0,1,2);
    checkForWin(0,3,6);
    checkForWin(2,5,8);
    checkForWin(6,7,8);
  if(boardValue[4]!=null){
    checkForWin(0,8,4);
    checkForWin(1,7,4);
    checkForWin(2,6,4);
    checkForWin(3,5,4);}
    checkForDraw();}

    function addMatchData(WinOrDraw){
      if(WinOrDraw=="draw"){
          createText.className="winLoseData-draw"
          createText.innerHTML="Draw"
          winLoseDataBoard.appendChild(createText);
      }
      else{
          createText.className="winLoseData-draw"
          createText.innerHTML="Win "+whoIsPlaying;
          winLoseDataBoard.appendChild(createText);
      }
      }
//Ajax learning
let historyToRead=3;
const history = document.getElementById("Rounde-history");
const winnerDisplay = document.getElementsByClassName("Winner-of-rounde");
const numberOfRounde = document.getElementsByClassName("Number-of-rounde");
const xttp = new XMLHttpRequest();
const url = "http://localhost:3000/roundeData";
//Get the history
xttp.open("GET", url, true);
xttp.send();
//Add to history
let newRoundeObj = {
  number:4,
  winner:"X"
}
let xhr = new XMLHttpRequest()
let newRounde = JSON.stringify(newRoundeObj)
xhr.open('POST', url, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(newRounde);

//Display history
xttp.onload =readHistory;

function readHistory() {
  for(i=0;i<historyToRead;i++){
  if (xttp.status === 200) {
    try {

const creatNumberOfRoundeText=document.createElement("div");
creatNumberOfRoundeText.className="Number-of-rounde"
history.appendChild(creatNumberOfRoundeText);

const creatWinnerOfRoundeText=document.createElement("div");
creatWinnerOfRoundeText.className="Winner-of-rounde"
history.appendChild(creatWinnerOfRoundeText);



 let roundeHistoryData = JSON.parse(xttp.responseText);
      let roundeNumber = roundeHistoryData[i].number;
      let winnerData = roundeHistoryData[i].winner;
      

      numberOfRounde[i].innerText = roundeNumber + ".";
      if (winnerData !== null) {
        winnerDisplay[i].innerText = "The winner was: " + winnerData;
     } else {
        winnerDisplay[i].innerText = "Draw";}} 
        catch (error) {
      alert("There was an error in reading JSON: "+error+". Status is: "+xttp.status);
      }}
    }}

   




      
