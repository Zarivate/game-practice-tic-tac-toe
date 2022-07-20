import "./App.css";
import { useState } from "react";

function App() {
  // 9 squares in a tic tac toe board so 9 empty strings. Can be either empty, "X", or "O".
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
