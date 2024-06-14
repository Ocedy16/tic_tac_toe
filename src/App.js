import { useState } from 'react';
import './App.css';
import Square from './Components/Square';

function App() {

  const [board, setBoard] = useState([" "," "," "," "," "," "," "," "," "]);
  const [player,setPlayer] = useState('X');

const pickSquare = (square) => {
  setBoard(board.map((val,index)=> {if (index===square && val === " "){return player}
  return val;}
));
if (player === "X"){setPlayer("O")}
else {setPlayer('X')}
}

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val = {board[0]} pickSquare = {()=>pickSquare(0)} />
          <Square val = {board[1]} pickSquare = {()=>pickSquare(1)} />
          <Square val = {board[2]} pickSquare = {()=>pickSquare(2)} />
        </div>
        <div className='row'>
          <Square val={board[3]} pickSquare={() =>pickSquare(3)} />
          <Square val={board[4]} pickSquare={() => pickSquare(4)} />
          <Square val={board[5]} pickSquare={() => pickSquare(5)} />
        </div>
        <div className='row'>
          <Square val={board[6]} pickSquare={() => pickSquare(6)} />
          <Square val={board[7]} pickSquare={() => pickSquare(7)} />
          <Square val={board[8]} pickSquare={() =>pickSquare(8)} />
        </div>
      </div>
     
    </div>
  );
}

export default App;
