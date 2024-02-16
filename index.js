// Variables //

const players = [];

const spaces = [];

const form = document.getElementById("spaces");

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");

var space1 = document.getElementById("space1");
space1.id = 1;
var space2 = document.getElementById("space2");
space2.id = 2;
var space3 = document.getElementById("space3");
space3.id = 3;
var space4 = document.getElementById("space4");
space4.id = 4;
var space5 = document.getElementById("space5");
space5.id = 5;
var space6 = document.getElementById("space6");
space6.id = 6;
var space7 = document.getElementById("space7");
space7.id = 7;
var space8 = document.getElementById("space8");
space8.id = 8;
var space9 = document.getElementById("space9");
space9.id = 9;

var gameStatus = document.getElementById("gameStatus");
gameStatus.textContent = "Let's play!";

var currentPlayer = "";

var playButton = document.getElementById("play");
var inputs = document.querySelectorAll(`.inputMove`);

// End Variables //

// Classes //

class Move {
  constructor(id, move) {
    this.id = id;
    this.move = move;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }

  addPlayer1() {
    form1.addEventListener("submit", (event) => {
      event.preventDefault();
      name1.disabled = true;
      this.name = name1.value;
      console.log(players);
    });
  }
  addPlayer2() {
    form2.addEventListener("submit", (event) => {
      event.preventDefault();
      name2.disabled = true;
      this.name = name2.value;
      console.log(players);
    });
  }
}

class Gameboard {
  constructor(players, spaces) {
    try {
      this.players = players;
      this.spaces = spaces;
    } catch (error) {
      console.log(error);
    }
  }

  gameSet() {
    space1.disabled = true;
    spaces.push(move1);

    space2.disabled = true;
    spaces.push(move2);

    space3.disabled = true;
    spaces.push(move3);

    space4.disabled = true;
    spaces.push(move4);

    space5.disabled = true;
    spaces.push(move5);

    space6.disabled = true;
    spaces.push(move6);

    space7.disabled = true;
    spaces.push(move7);

    space8.disabled = true;
    spaces.push(move8);

    space9.disabled = true;
    spaces.push(move9);
  }

  play() {
    //querySelectorAll requires CSS terminology

    playButton.addEventListener("click", (event) => {
      if (player1.name != undefined && player2.name != undefined) {
        //un-grey boxes//
        event.preventDefault();
        space1.disabled = false;
        space2.disabled = false;
        space3.disabled = false;
        space4.disabled = false;
        space5.disabled = false;
        space6.disabled = false;
        space7.disabled = false;
        space8.disabled = false;
        space9.disabled = false;
        playButton.textContent = "RESET";
        inputs.forEach((input) => (input.value = ``));
        spaces.forEach((space) => (space.move = ``));
        currentPlayer = this.players[0].name;
        gameStatus.textContent = `${currentPlayer}'s turn`;
      } else {
        gameStatus.textContent = "Please input player names";
      }
    });
  }

  newMove(id, value) {
    spaces.forEach((space) => {
      if (id == space.id) {
        space.move = value;
      }
    });
  }

  greyOut() {
    space1.disabled = true;
    space2.disabled = true;
    space3.disabled = true;
    space4.disabled = true;
    space5.disabled = true;
    space6.disabled = true;
    space7.disabled = true;
    space8.disabled = true;
    space9.disabled = true;
  }

  gameOver() {
    form.addEventListener("keyup", (event) => {
      for (let i = 0; i <= 8; i++) {
        if (
          ((i === 0 || i === 3 || i === 6) &&
            spaces[i].move == "x" &&
            spaces[i + 1].move == "x" &&
            spaces[i + 2].move == "x") ||
          (i === 0 &&
            spaces[i].move == "x" &&
            spaces[i + 4].move == "x" &&
            spaces[i + 8].move == "x") ||
          (i === 2 &&
            spaces[i].move == "x" &&
            spaces[i + 2].move == "x" &&
            spaces[i + 4].move == "x") ||
          ((i === 0 || i === 1 || i === 2) &&
            spaces[i].move == "x" &&
            spaces[i + 3].move == "x" &&
            spaces[i + 6].move == "x")
        ) {
          this.greyOut();
          currentPlayer =
            currentPlayer == player1.name ? player2.name : player1.name;
          gameStatus.textContent = `${currentPlayer} wins!`;
        } else {
          if (
            ((i === 0 || i === 3 || i === 6) &&
              spaces[i].move == "o" &&
              spaces[i + 1].move == "o" &&
              spaces[i + 2].move == "o") ||
            (i === 0 &&
              spaces[i].move == "o" &&
              spaces[i + 4].move == "o" &&
              spaces[i + 8].move == "o") ||
            (i === 2 &&
              spaces[i].move == "o" &&
              spaces[i + 2].move == "o" &&
              spaces[i + 4].move == "o") ||
            ((i === 0 || i === 1 || i === 2) &&
              spaces[i].move == "o" &&
              spaces[i + 3].move == "o" &&
              spaces[i + 6].move == "o")
          ) {
            this.greyOut();
            currentPlayer =
              currentPlayer == player1.name ? player2.name : player1.name;
            gameStatus.textContent = `${currentPlayer} wins!`;
          } else {
            if (
              i === 0 &&
              spaces[i].move != "" &&
              spaces[i + 1].move != "" &&
              spaces[i + 2].move != "" &&
              spaces[i + 3].move != "" &&
              spaces[i + 4].move != "" &&
              spaces[i + 5].move != "" &&
              spaces[i + 6].move != "" &&
              spaces[i + 7].move != "" &&
              spaces[i + 8].move != ""
            ) {
              this.greyOut();
              gameStatus.textContent = "It's a draw!";
            }
          }
        }
      }
    });
  }
}

// End Classes //

// Calls //

var move1 = new Move(1, space1.value);
var move2 = new Move(2, space2.value);
var move3 = new Move(3, space3.value);
var move4 = new Move(4, space4.value);
var move5 = new Move(5, space5.value);
var move6 = new Move(6, space6.value);
var move7 = new Move(7, space7.value);
var move8 = new Move(8, space8.value);
var move9 = new Move(9, space9.value);

const player1 = new Player();

player1.addPlayer1();

players.push(player1);

const player2 = new Player();

player2.addPlayer2();

players.push(player2);

const gameboard = new Gameboard(players, spaces);

gameboard.gameSet();

gameboard.play();

form.addEventListener("keyup", (event) => {
  if (event.target.value === "x" || event.target.value === "o") {
    console.log(event.target.value);
    gameboard.newMove(event.target.id, event.target.value);
    event.target.disabled = true;
    currentPlayer = currentPlayer == player1.name ? player2.name : player1.name;
    gameStatus.textContent = `${currentPlayer}'s turn`;
  } else {
    return;
  }
});

gameboard.gameOver();
