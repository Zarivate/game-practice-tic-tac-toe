import "./App.css";
import { useState, useEffect } from "react";
import Square from "./components/Square";
import { Patterns } from "./Patterns";

function App() {
  // 9 squares in a tic tac toe board so 9 empty strings. Can be either empty, "X", or "O".
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  // Whoever decides to play first will have their value that fills up the board initalized to an "X"
  const [player, setPlayer] = useState("O");

  // State to hold the winner and current state of the game, set to change upon game completion
  const [result, setResult] = useState({ winner: "none", state: "none" });

  // Whenever the board is changed/somebody chooses a square. Checks for a winner
  useEffect(() => {
    checkWin();
    checkTie();
    // Logic to change what gets placed on the board from an "X" to an "O" and vice-versa
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  // Whenever a result is achieved/changed, an alert is sent
  useEffect(() => {
    // Since useEffects are called upon rendering, need to check that doesn't make alert at start by checking to see if the result
    // variables are still how they were at start
    if (result.state !== "none") {
      alert(`Game Over. Winning Player was ${result.winner}`);
      restart();
    }
  }, [result]);

  // Method for changing the value to the appropriate one depending on the player currently playing/choosing a square.
  // Updates the corresponding value in the board above.
  const chooseSquare = (square) => {
    // setBoard is updated with board being mapped where for every element in the board, the value and index in the board/square is retrieved and
    setBoard(
      board.map((val, idx) => {
        // If the current index is equal to the square, then it is updated
        if (idx === square && val === "") {
          // Here the matching index in the board state above is set to the player value
          return player;
        }
        return val;
      })
    );
  };

  // Function that gets called every turn to check for a winner
  const checkWin = () => {
    // First the Patterns array is looped through, where each pattern is grabbed
    // and for each pattern, those indexes are checked to see if they are all filled by the same player.
    Patterns.forEach((currPattern) => {
      // The value at the game board that's at the same position as the value in first position of the currPattern array is found
      // For instance, the first array in Patterns would be [0, 1, 2] so in this example firstPlayer = board[0]. Could be "X" or "O"
      const firstPlayer = board[currPattern[0]];

      // If the board space is blank, then don't even bother continuing with rest of function
      if (firstPlayer === "") return;

      let foundWin = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWin = false;
        }
      });
      if (foundWin) {
        // Broken at the moment, displays wrong winner at times. To be fixed soon
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  // Function to check if nobody wins
  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "Nobody", state: "Tie" });
    }
  };

  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
