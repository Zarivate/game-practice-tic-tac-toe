import "./App.css";
import { useState } from "react";
import Square from "./components/Square";

function App() {
  // 9 squares in a tic tac toe board so 9 empty strings. Can be either empty, "X", or "O".
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              alert(0);
            }}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              alert(1);
            }}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              alert(2);
            }}
          />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
