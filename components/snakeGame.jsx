import React from "react";
import styles from "../styles/snakeGame.module.css";
import GameOver from "./gameOver.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

// Component: SnakeGame
// Game that can be played on home page. Uses the HTML canvas element.

class SnakeGame extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      width: 0,
      height: 0,
      appleheight: 0,
      blockWidth: 0,
      blockHeight: 0,
      gameLoopTimeout: 70,
      timeoutId: 0,
      startSnakeSize: 0,
      snake: [],
      apple: {},
      direction: "right",
      directionChanged: false,
      isGameOver: false,
      score: 0,
    };
  }

  componentDidMount() {
    this.initGame();
    window.addEventListener("keydown", this.handleKeyDown);
    this.gameLoop();
  }

  initGame() {
    // Game size initialization
    let width = Math.floor(window.innerWidth / 20) * 20;
    let height = Math.floor(window.innerHeight / 20) * 20;
    let appleheight = Math.floor(((window.innerHeight / 100) * 90) / 20) * 20;
    let blockWidth = 20;
    let blockHeight = 20;

    // snake initialization
    let startSnakeSize = 6;
    let snake = [];
    let Xpos = width / 2;
    let Ypos = height / 2;
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 };
    snake.push(snakeHead);
    for (let i = 1; i < startSnakeSize; i++) {
      Xpos -= blockWidth;
      let snakePart = { Xpos: Xpos, Ypos: Ypos };
      snake.push(snakePart);
    }

    // apple position initialization
    let appleXpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth;
    let appleYpos =
      Math.floor(
        Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
      ) * blockHeight;
    while (appleYpos === snake[0].Ypos) {
      appleYpos =
        Math.floor(
          Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
        ) * blockHeight;
    }

    this.setState({
      width,
      height,
      appleheight,
      blockWidth,
      blockHeight,
      startSnakeSize,
      snake,
      apple: { Xpos: appleXpos, Ypos: appleYpos },
    });
  }

  gameLoop() {
    let timeoutId = setTimeout(() => {
      if (!this.state.isGameOver) {
        this.moveSnake();
        this.tryToEatSnake();
        this.tryToEatApple();
        this.setState({ directionChanged: false });
      }

      this.gameLoop();
    }, this.state.gameLoopTimeout);

    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  resetGame() {
    let width = this.state.width;
    let height = this.state.height;
    let appleheight = this.state.appleheight;
    let blockWidth = this.state.blockWidth;
    let blockHeight = this.state.blockHeight;
    let apple = this.state.apple;

    // snake reset
    let snake = [];
    let Xpos = width / 2;
    let Ypos = height / 2;
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 };
    snake.push(snakeHead);
    for (let i = 1; i < this.state.startSnakeSize; i++) {
      Xpos -= blockWidth;
      let snakePart = { Xpos: Xpos, Ypos: Ypos };
      snake.push(snakePart);
    }

    // apple position reset
    apple.Xpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth;
    apple.Ypos =
      Math.floor(
        Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
      ) * blockHeight;
    while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
      apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth;
      apple.Ypos =
        Math.floor(
          Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
        ) * blockHeight;
    }

    this.setState({
      snake,
      apple,
      direction: "right",
      directionChanged: false,
      isGameOver: false,
      gameLoopTimeout: 80,
      score: 0,
    });
  }

  moveSnake() {
    let snake = this.state.snake;
    let previousPartX = this.state.snake[0].Xpos;
    let previousPartY = this.state.snake[0].Ypos;
    let tmpPartX = previousPartX;
    let tmpPartY = previousPartY;
    this.moveHead();
    for (let i = 1; i < snake.length; i++) {
      tmpPartX = snake[i].Xpos;
      tmpPartY = snake[i].Ypos;
      snake[i].Xpos = previousPartX;
      snake[i].Ypos = previousPartY;
      previousPartX = tmpPartX;
      previousPartY = tmpPartY;
    }
    this.setState({ snake });
  }

  tryToEatApple() {
    let snake = this.state.snake;
    let apple = this.state.apple;

    // if the snake's head is on an apple
    if (snake[0].Xpos === apple.Xpos && snake[0].Ypos === apple.Ypos) {
      let width = this.state.width;
      let height = this.state.height;
      let appleheight = this.state.appleheight;
      let blockWidth = this.state.blockWidth;
      let blockHeight = this.state.blockHeight;
      let newTail = { Xpos: apple.Xpos, Ypos: apple.Ypos };
      let gameLoopTimeout = this.state.gameLoopTimeout;

      // increase snake size
      snake.push(newTail);

      // create another apple
      apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth;
      apple.Ypos =
        Math.floor(
          Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
        ) * blockHeight;
      while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
        apple.Xpos =
          Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
          blockWidth;
        apple.Ypos =
          Math.floor(
            Math.random() * ((appleheight - blockHeight) / blockHeight + 1)
          ) * blockHeight;
      }

      this.animateHead();

      // decrease the game loop timeout
      if (gameLoopTimeout > 25) gameLoopTimeout -= 0.5;

      this.setState({
        snake,
        apple,
        score: this.state.score + 1,
        gameLoopTimeout,
      });
    }
  }

  animateHead() {
    let head = document.getElementById("snakeHead");
    head.classList.remove("animate");
    head.classList.add("animate");
    setTimeout(function () {
      if (head) {
        head.classList.remove("animate");
      }
    }, 1000);
  }

  tryToEatSnake() {
    let snake = this.state.snake;

    for (let i = 1; i < snake.length; i++) {
      if (snake[0].Xpos === snake[i].Xpos && snake[0].Ypos === snake[i].Ypos)
        this.setState({ isGameOver: true });
    }
  }

  isAppleOnSnake(appleXpos, appleYpos) {
    let snake = this.state.snake;
    for (let i = 0; i < snake.length; i++) {
      if (appleXpos === snake[i].Xpos && appleYpos === snake[i].Ypos)
        return true;
    }
    return false;
  }

  moveHead() {
    switch (this.state.direction) {
      case "left":
        this.moveHeadLeft();
        break;
      case "up":
        this.moveHeadUp();
        break;
      case "right":
        this.moveHeadRight();
        break;
      default:
        this.moveHeadDown();
    }
  }

  moveHeadLeft() {
    let width = this.state.width;
    let blockWidth = this.state.blockWidth;
    let snake = this.state.snake;
    snake[0].Xpos =
      snake[0].Xpos <= 0 ? width - blockWidth : snake[0].Xpos - blockWidth;
    this.setState({ snake });
  }

  moveHeadUp() {
    let height = this.state.height;
    let blockHeight = this.state.blockHeight;
    let snake = this.state.snake;
    snake[0].Ypos =
      snake[0].Ypos <= 0 ? height - blockHeight : snake[0].Ypos - blockHeight;
    this.setState({ snake });
  }

  moveHeadRight() {
    let width = this.state.width;
    let blockWidth = this.state.blockWidth;
    let snake = this.state.snake;
    snake[0].Xpos =
      snake[0].Xpos >= width - blockWidth ? 0 : snake[0].Xpos + blockWidth;
    this.setState({ snake });
  }

  moveHeadDown() {
    let height = this.state.height;
    let blockHeight = this.state.blockHeight;
    let snake = this.state.snake;
    snake[0].Ypos =
      snake[0].Ypos >= height - blockHeight ? 0 : snake[0].Ypos + blockHeight;
    this.setState({ snake });
  }

  handleKeyDown(event) {
    event.preventDefault();
    // if spacebar is pressed to run a new game
    if (this.state.isGameOver && event.keyCode === 32) {
      this.resetGame();
      return;
    }

    if (!document.getElementById(styles.instructions).classList.contains(styles.hideInGame)) {
      document.getElementById(styles.instructions).classList.add(styles.hideInGame);
      this.props.gameHasStartedState(true);
    }

    if (this.state.directionChanged) return;

    switch (event.keyCode) {
      case 37:
      case 65:
        this.goLeft();
        break;
      case 38:
      case 87:
        this.goUp();
        break;
      case 39:
      case 68:
        this.goRight();
        break;
      case 40:
      case 83:
        this.goDown();
        break;
      default:
    }
    this.setState({ directionChanged: true });
  }

  goLeft() {
    let newDirection = this.state.direction === "right" ? "right" : "left";
    this.setState({ direction: newDirection });
  }

  goUp() {
    let newDirection = this.state.direction === "down" ? "down" : "up";
    this.setState({ direction: newDirection });
  }

  goRight() {
    let newDirection = this.state.direction === "left" ? "left" : "right";
    this.setState({ direction: newDirection });
  }

  goDown() {
    let newDirection = this.state.direction === "up" ? "up" : "down";
    this.setState({ direction: newDirection });
  }

  render() {
    // Game over
    if (this.state.isGameOver) {
      return (
        <GameOver
          width={this.state.width}
          height={this.state.height}
          score={this.state.score}
        />
      );
    }

    return (
      <div className={`${styles.container} hide-on-mobile`}>
        <div
          id={styles.gameBoard}
          style={{
            width: this.state.width,
            height: this.state.height,
          }}
        >
          {this.state.snake.map((snakePart, index) => {
            return (
              <div
                key={index}
                className={styles.snakeBlock}
                id={`${index == 0 ? "snakeHead" : ""}`}
                style={{
                  width: this.state.blockWidth,
                  height: this.state.blockHeight,
                  left: snakePart.Xpos,
                  top: snakePart.Ypos,
                }}
              />
            );
          })}
          <div
            className={styles.appleBlock}
            style={{
              width: this.state.blockWidth,
              height: this.state.blockHeight,
              left: this.state.apple.Xpos,
              top: this.state.apple.Ypos,
            }}
          />
          <div id={styles.score}>
            You have eaten {this.state.score}
            <div id={styles.exampleApple}></div>
          </div>
          <div id={styles.instructions}>
            <span><FontAwesomeIcon icon={faKeyboard}/> Press arrow keys to play</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SnakeGame;
