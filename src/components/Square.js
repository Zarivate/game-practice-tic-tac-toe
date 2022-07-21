import React from "react";
import "../App.css";

// The "value" here represents whatever string, "", "X", or "O" happens to be in that square at the moment. While the
// chooseSquare function will be called every time the square is clicked
function Square({ value, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {/* Whatever the value is, will be displayed in the square */}
      {value}
    </div>
  );
}

export default Square;
