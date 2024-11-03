import './boardstyle.css'
import { useState } from 'react';



function Square({value, onSquareClick}) {
  
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function calculateWinners(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for( let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a]===squares[c]) {
      return squares[a]
      


  } 

} return null
}

function Board(){
  
  const [squares, setSquares] = useState(Array(9).fill(null)) 
  const [oIsNext, setOIsNext] = useState(true)
  
  function onHandleClick(i){
    

    const nextSquares = squares.slice();
    if(nextSquares[i] || calculateWinners(squares)){
      return
    }
    if(oIsNext){
      nextSquares[i] = "O";
      
    }
    else{
      nextSquares[i] = "X";
    }
    
    
    setSquares(nextSquares);
    setOIsNext(!oIsNext)
  }

  const winner = calculateWinners(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
      
    } else {
      status = "Next Player: " + (oIsNext ? "O" : "X")
      
    }
    console.log(status)

  
  
    return(
        <>
        <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={()=>onHandleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>onHandleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>onHandleClick(2)}/>
      

      </div>
      <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=>onHandleClick(3)} />
      <Square value={squares[4]} onSquareClick={()=>onHandleClick(4)} />
      <Square value={squares[5]} onSquareClick={()=>onHandleClick(5)} />

      </div>
      <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=>onHandleClick(6)} />
      <Square value={squares[7]} onSquareClick={()=>onHandleClick(7)} />
      <Square value={squares[8]} onSquareClick={()=>onHandleClick(8)} />

      </div>
      
      
        </>
        
    )

}

export default Board