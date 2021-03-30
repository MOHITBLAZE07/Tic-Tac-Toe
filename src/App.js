import { useReducer, useState } from 'react';
import './App.css';
import useSound from 'use-sound';
import sound from './sound.mp3';
import winnerSound from './winner.mp3';

let draw = 0;
function App() {

const [turn,setTurn] = useState("x");
const [box,setBox] = useState(["","","","","","","","",""]);
const [userWin,setUserWin] = useState(0);

const toggle = (track) => {
  playOn();
  let tempArray = [...box];
  if(tempArray[track] === "")
  {
    draw++;
    checkWin(track);
    tempArray[track] = turn;
    setBox([...tempArray])
    setTurn(turn==='x'? 'o':'x');
  }

}

const checkWin = (track) => {
  
   let tempArray = [...box];
   tempArray[track]=turn;

   if(checkWinForEach('x',tempArray) === 'x')
   {
    setUserWin(1)
    winnerOn();
    return;
   }
  
  if(checkWinForEach('o',tempArray) === 'o')
  {
    setUserWin(2);
    winnerOn();
    return;
  }

  if(draw===9)
  alert("Oops! Its a Draw!")
//   if( (tempArray[0]==='x' && tempArray[1]==='x' && tempArray[2]==='x') || 
//       (tempArray[3]==='x' && tempArray[4]==='x' && tempArray[5]==='x') ||
//       (tempArray[6]==='x' && tempArray[7]==='x' && tempArray[8]==='x') ||

//       (tempArray[0]==='x' && tempArray[3]==='x' && tempArray[6]==='x') ||
//       (tempArray[1]==='x' && tempArray[4]==='x' && tempArray[7]==='x') ||
//       (tempArray[2]==='x' && tempArray[5]==='x' && tempArray[8]==='x') ||

//       (tempArray[0]==='x' && tempArray[4]==='x' && tempArray[8]==='x') ||
//       (tempArray[2]==='x' && tempArray[4]==='x' && tempArray[6]==='x')
//   ){
//     return 'x';
//   } 

//   if( (tempArray[0]==='o' && tempArray[1]==='o' && tempArray[2]==='o') || 
//       (tempArray[3]==='o' && tempArray[4]==='o' && tempArray[5]==='o') ||
//       (tempArray[6]==='o' && tempArray[7]==='o' && tempArray[8]==='o') ||

//       (tempArray[0]==='o' && tempArray[3]==='o' && tempArray[6]==='o') ||
//       (tempArray[1]==='o' && tempArray[4]==='o' && tempArray[7]==='o') ||
//       (tempArray[2]==='o' && tempArray[5]==='o' && tempArray[8]==='o') ||

//       (tempArray[0]==='o' && tempArray[4]==='o' && tempArray[8]==='o') ||
//       (tempArray[2]==='o' && tempArray[4]==='o' && tempArray[6]==='o')
//   ){
//     return 'o';
//   }
//   return -1;
 }

const checkWinForEach = (current,tempArray) => {
  if( (tempArray[0]===current && tempArray[1]===current && tempArray[2]===current) || 
      (tempArray[3]===current && tempArray[4]===current && tempArray[5]===current) ||
      (tempArray[6]===current && tempArray[7]===current && tempArray[8]===current) ||

      (tempArray[0]===current && tempArray[3]===current && tempArray[6]===current) ||
      (tempArray[1]===current && tempArray[4]===current && tempArray[7]===current) ||
      (tempArray[2]===current && tempArray[5]===current && tempArray[8]===current) ||

      (tempArray[0]===current && tempArray[4]===current && tempArray[8]===current) ||
      (tempArray[2]===current && tempArray[4]===current && tempArray[6]===current)
  ){
    return current;
  }
  return -1;
}


const playAgain = () => {

  setTurn('x');
  setBox(["","","","","","","","",""]);
  setUserWin(0);
  draw=0;
}

const [playOn] = useSound(sound);
const [winnerOn] = useSound(winnerSound);
  return (
    <div className="App">
      <div className="main-box">
        {userWin===0?
        <>
          <div onClick={()=>toggle(0)}>
            {box[0]}
          </div>
          <div onClick={()=>toggle(1)}>
          {box[1]}
          </div>
          <div onClick={()=>toggle(2)}>
          {box[2]}
          </div>
          <div onClick={()=>toggle(3)}>
          {box[3]}
          </div>
          <div onClick={()=>toggle(4)}>
          {box[4]}
          </div>
          <div onClick={()=>toggle(5)}>
          {box[5]}
          </div>
          <div onClick={()=>toggle(6)}>
          {box[6]}
          </div>
          <div onClick={()=>toggle(7)}>
          {box[7]}
          </div>
          <div onClick={()=>toggle(8)}>
          {box[8]}
          </div>
        </>:<button onClick={playAgain}>Play Again?</button>
        }
        
            <section>{userWin===0? <span>It's {turn} 's Turn.</span>:userWin===1 ? "X WON!": "O WON!"}</section>
      </div>
      <footer>MOKO™ @All Rights Reserved.</footer>
    </div>
  );
}

export default App;
