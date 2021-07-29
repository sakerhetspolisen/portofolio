import React from "react";

// Component: GameOver
// Shows after user dies in Snake-Game

const GameOver = (props?: any) => {
  return (
    <div
      id="GameBoard"
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}
    >
      <div id="GameOver" style={{ fontSize: props.width / 15 }}>
        <div id="GameOverText">GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div id="PressSpaceText">Press Space to restart</div>
      </div>
    </div>
  );
}

export default GameOver;
