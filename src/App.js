import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import { useState } from 'react';

 function App() {

 const [ squares, setSquares] = useState(Array(9).fill(null));
const [xisNext, setXisnext ] = useState(true);

function handleClick(i){

  if(squares[i] || calculateWinner(squares)){
    return;
  }
  let userEnterArray = [...squares];
  if(xisNext){
    userEnterArray[i] = "X";
  }
  else{
    userEnterArray[i] = "O";
  }  
  setSquares(userEnterArray); 
  setXisnext(!xisNext);
 
 }

 function calculateWinner(squares){
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i =0; i< lines.length; i++){
     const[a,b,c] =lines[i];
     if(squares[a]  && squares[a]=== squares[b] && squares[a] === squares[c]){
      console.log("winner is" + squares[a])
       return squares[a];

     }
    }
  return null;
}
return (
 <>
 <div className='game'>
     <div className="board-row">
         <Squares squareValue = {squares[0]} handleClick={() =>handleClick(0)}/>
         <Squares squareValue = {squares[1]} handleClick={() =>handleClick(1)}/>
        <Squares squareValue = {squares[2]} handleClick={() =>handleClick(2)}/>
    </div>
    <div className="board-row">
     <Squares squareValue ={squares[3]} handleClick={() =>handleClick(3)}/>
    <Squares squareValue = {squares[4]} handleClick={() =>handleClick(4)}/>
    <Squares squareValue = {squares[5]} handleClick={() =>handleClick(5)}/>
    </div>
    <div className="board-row">
    <Squares squareValue = {squares[6]} handleClick={() =>handleClick(6)}/>
    <Squares squareValue = {squares[7]} handleClick={() =>handleClick(7)}/>
    <Squares squareValue = {squares[8]} handleClick={() =>handleClick(8)}/>
     </div>
     </div>
 </>
   );
}

export default App;
    