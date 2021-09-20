//Global to store players
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];
let currentPlayer = 0; //means me
let players = [player1Hand, player2Hand, player3Hand];

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

//create the deck object array with id so we can identify and it can be looped through
const deck = [
  {
    id: 1,
    color: "Yellow",
    value: 1,
    url: "uno_assets_2d/PNGs/small/yellow_1.png",
  },
  {
    id: 2,
    color: "Red",
    value: 2,
    url: "uno_assets_2d/PNGs/small/red_2.png",
  },
  {
    id: 3,
    color: "Green",
    value: 3,
    url: "uno_assets_2d/PNGs/small/green_3.png",
  },
  {
    id: 4,
    color: "Blue",
    value: 4,
    url: "uno_assets_2d/PNGs/small/blue_4.png",
  },
];


//function for players to draw cards
const draw = () => {
  let card = Math.floor(Math.random() * deck.length);
  console.log($draw, deck[card]);
  $img1 = $("<img>").attr("src", `${deck[card].url}`);
  $(".player1").append($img1);
};
$draw = $("<div>").addClass("draw");
$("body").append($draw);


//start game with 3 players and their random cards
//function for player1 = me
const start = () => {
  $div = $("<div>").addClass("player1");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);
    //to allow player1 cards to be clickable and to remove the card to push it to the discarded pile
    //also make image tag with attribute source and source value = pic of randomcard drawn
    //attr is just the variable/value and to identify the card
    $img = $("<img>")
      .attr("src", `${deck[randomCard].url}`)
      .attr("color", `${deck[randomCard].color}`)
      .attr("value", `${deck[randomCard].value}`)
      .attr("cardId", `${deck[randomCard].id}`)
      .on("click", (event) => { //this is an event handler function
        //the if function puts a check so it wont play what it shouldnt play
        //add the condition to find out if the color of the chosenCard is the same as the color of the cardPlayed or the value of the chosenCard is the same value as the cardPlayed
        if ((cardPlayed[cardPlayed.length -1].color === event.target.getAttribute("color")) || (cardPlayed[cardPlayed.length -1].value === event.target.getAttribute("value"))) {
            console.log(event.target.getAttribute("cardId"));
            event.currentTarget.classList.add("chosenCard");
            $(".chosenCard").appendTo($(".cardPlayed")).removeClass("chosenCard");
            //add from hand to the drawnPile
            let tempId = parseInt(event.target.getAttribute("cardId"));
            // use i as a counter to add card from hand to cardPlayed pile and remove card from player hand
            // the i have to be the same because the card in player hand is the same
            for (let i = 0; i < player1Hand.length; i++) {
            if (tempId === player1Hand[i].id) {
                cardPlayed.push(player1Hand[i]); //push the card into the cardPlayed pile
                player1Hand.splice(i, 1); // remove 1 element in the index
                console.log(player1Hand);
                break; //break the if loop
            }
            }
            nextPlayer(gameDirection);
        }
      });
    player1Hand.push(deck[randomCard]); //because only my deck needs to be clicked so it needs to be outside
    console.log(deck[randomCard].url);
    $(".player1").append($img);
  }
  
  //adding player2 cards
  $div = $("<div>").addClass("player2");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);

    $img = $("<img>").attr("src", `${deck[randomCard].url}`)
    .attr("color", `${deck[randomCard].color}`)
    .attr("value", `${deck[randomCard].value}`)
    .attr("cardId", `${deck[randomCard].id}`);
    //so i can loop through the array of player1Hand
    player2Hand.push(deck[randomCard]);
    console.log(deck[randomCard].url);
    $(".player2").append($img);
  }

  //adding player3 cards
  $div = $("<div>").addClass("player3");
  $(".players").append($div);
  for (let i = 0; i < 5; i++) {
    let randomCard = Math.floor(Math.random() * deck.length);

    $img = $("<img>").attr("src", `${deck[randomCard].url}`)
    .attr("color", `${deck[randomCard].color}`)
    .attr("value", `${deck[randomCard].value}`)
    .attr("cardId", `${deck[randomCard].id}`);
    player3Hand.push(deck[randomCard]);
    console.log(deck[randomCard].url);
    $(".player3").append($img);
  }

  //create cardsPlayed area
  $div = $("<div>").addClass("cardPlayed");
  $(".players").append($div);
  let randomCard = Math.floor(Math.random() * deck.length);

  $img = $("<img>").attr("src", `${deck[randomCard].url}`)
  .attr("color", `${deck[randomCard].color}`)
  .attr("value", `${deck[randomCard].value}`)
  .attr("cardId", `${deck[randomCard].id}`);
  cardPlayed.push(deck[randomCard]);
  console.log(deck[randomCard].url);
  $(".cardPlayed").append($img);
};

//function to check against playerHands and color/value
const checkForColor = (color, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (color === playerHand[i].color) {
      return i;
    }
  }
  return -1;
};

const checkForValue = (value, playerHand) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (value === playerHand[i].value) {
        return i;
    }
  }
  return -1;
};

//Building the direction for the 2 players and also for reverse card
const nextPlayer = (direction) => {
  if (direction === 1) {
    currentPlayer += 1;
    if (currentPlayer > 2) { //because there's only 3 players so the loop wont go on forever
      currentPlayer = 0; //goes back to me so it can reset to the origin
    }
  } else if (direction === -1) { //reverse the direction (for reverse card also)
    currentPlayer -= 1;
    if (currentPlayer < 0) {
      currentPlayer = 2;
    }
  }
  if (currentPlayer === 0) {
    return; 
  }

  console.log(players);

  //get last element of the array which is the top played card so this array can find the first card suitable to play
  let chosenCard = checkForColor(
    cardPlayed[cardPlayed.length -1].color, players[currentPlayer]
  );
  console.log(chosenCard);

  if (chosenCard < 0) {
    //check top card with the hand, check color first, if dont have, check value
    chosenCard = checkForValue(
      cardPlayed[cardPlayed.length -1].value, players[currentPlayer]
    );
  }
  if (chosenCard < 0) {
    //this is where a player needs to draw card if both conditions not fulfilled
    console.log("Player " + (currentPlayer+1) + ": Draw a card!");
  } else {
    //this is where a player puts a card into the playedCards pile
    console.log("Player " + (currentPlayer+1) + ": Play a card!");

    nextPlayer(direction);
  }
};


//declaring win/lose message
const playerWinMessage = "You win!";
const playerLoseMessage = "You lose";

//function to restart game after game end


//make the 2 players play their cards and the players to draw card when parameters not fulfilled
//setInterval
//fill in 191-198

//make the cardplayed only show the top card


//make sure the nextplayer func is called repeatedly if its not my turn


//make sure no duplicates to be drawn
//can use Array.pop()
//but before this, shuffle the cards before pop so there will be no duplicates in drawpile


//add specials/wild cards in


//change player 2 and 3 to backofcards.png



