//Global to store players
let players = [];
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];

//To track current card played
let cardPlayed = [];

//amount of players in game
let amtPlayers = 3;

//starting amount of cards
let initialCards = 7;

//turn tracker
let gameTurn = 0;

//set direction of game, 1 for forward, -1 for backward
let gameDirection = 1;

//Board
//create the deck object array so it can be looped through
const deck = [
  {
    color: "Yellow",
    value: 1,
    url: "uno_assets_2d/PNGs/small/yellow_1.png",
  },
  {
    color: "Red",
    value: 2,
    url: "uno_assets_2d/PNGs/small/red_2.png",
  },
  {
    color: "Green",
    value: 3,
    url: "uno_assets_2d/PNGs/small/green_3.png",
  },
  {
    color: "Blue",
    value: 4,
    url: "uno_assets_2d/PNGs/small/blue_4.png",
  },
];

//function to draw cards to players
const draw = () => {
  let card = Math.floor(Math.random() * deck.length);
  console.log($draw, deck[card]);
  $img1 = $("<img>").attr("src", `${deck[card].url}`);
  $(".player1").append($img1);
};
$draw = $("<div>").addClass("draw");
$("body").append($draw);

//start game
const start = () => {
  $div = $("<div>").addClass("player1");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);
    //to allow player1 cards to be clickable
    //remove the card to push it to the discarded pile
    $img = $("<img>")
      .attr("src", `${deck[randomCard].url}`)
      .on("click", (event) => {
        console.log(event.target.src.split("/", 4));
        event.currentTarget.classList.add("chosenCard");
        $(".chosenCard").appendTo($(".playedCard")).removeClass("chosenCard");
        // event.target.remove();
      });
    player1Hand.push(deck[randomCard]); //because only this needs to be clicked so it needs to be outside
    console.log(deck[randomCard].url);
    $(".player1").append($img);
  }
  $div = $("<div>").addClass("player2");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);

    $img = $("<img>").attr("src", `${deck[randomCard].url}`);
    //so i can loop through the array of player1Hand
    player2Hand.push(deck[randomCard]);
    console.log(deck[randomCard].url);
    $(".player2").append($img);
  }
  $div = $("<div>").addClass("player3");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);

    $img = $("<img>").attr("src", `${deck[randomCard].url}`);
    player3Hand.push(deck[randomCard]);
    console.log(deck[randomCard].url);
    $(".player3").append($img);
  }
  $div = $("<div>").addClass("playedCard");
  $(".players").append($div);
  let randomCard = Math.floor(Math.random() * deck.length);

  $img = $("<img>").attr("src", `${deck[randomCard].url}`);
  console.log(deck[randomCard].url);
  $(".playedCard").append($img);
};

//check if player hand
const checkForColor = (card, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (card.color === playerHand.color) {
      // return colorCompared
    }
  }
};

const checkForValue = (card, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (card.value === playerHand.value) {
      //return valueCompared
    }
  }
};

//auto-playing players






//declaring win/lose message
const playerWinMessage = "You win!";
const playerLoseMessage = "You lose";

//function to restart game after game end
