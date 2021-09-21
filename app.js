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
    id: "b0",
    color: "Blue",
    value: 0,
    url: "uno_assets_2d/PNGs/small/blue_0.png",
  },
  {
    id: "b1",
    color: "Blue",
    value: 1,
    url: "uno_assets_2d/PNGs/small/blue_1.png",
  },
  {
    id: "b2",
    color: "Blue",
    value: 2,
    url: "uno_assets_2d/PNGs/small/blue_2.png",
  },
  {
    id: "b3",
    color: "Blue",
    value: 3,
    url: "uno_assets_2d/PNGs/small/blue_3.png",
  },
  {
    id: "b4",
    color: "Blue",
    value: 4,
    url: "uno_assets_2d/PNGs/small/blue_4.png",
  },
  {
    id: "b5",
    color: "Blue",
    value: 5,
    url: "uno_assets_2d/PNGs/small/blue_5.png",
  },
  {
    id: "b6",
    color: "Blue",
    value: 6,
    url: "uno_assets_2d/PNGs/small/blue_6.png",
  },
  {
    id: "b7",
    color: "Blue",
    value: 7,
    url: "uno_assets_2d/PNGs/small/blue_7.png",
  },
  {
    id: "b8",
    color: "Blue",
    value: 8,
    url: "uno_assets_2d/PNGs/small/blue_8.png",
  },
  {
    id: "b9",
    color: "Blue",
    value: 9,
    url: "uno_assets_2d/PNGs/small/blue_9.png",
  },
  {
    id: "b10",
    color: "Blue",
    value: 10,
    url: "uno_assets_2d/PNGs/small/blue_picker.png",
  },
  {
    id: "b11",
    color: "Blue",
    value: 11,
    url: "uno_assets_2d/PNGs/small/blue_reverse.png",
  },
  {
    id: "b12",
    color: "Blue",
    value: 12,
    url: "uno_assets_2d/PNGs/small/blue_skip.png",
  },
  {
    id: "g0",
    color: "Green",
    value: 20,
    url: "uno_assets_2d/PNGs/small/green_0.png",
  },
  {
    id: "g1",
    color: "Green",
    value: 21,
    url: "uno_assets_2d/PNGs/small/green_1.png",
  },
  {
    id: "g2",
    color: "Green",
    value: 22,
    url: "uno_assets_2d/PNGs/small/green_2.png",
  },
  {
    id: "g3",
    color: "Green",
    value: 23,
    url: "uno_assets_2d/PNGs/small/green_3.png",
  },
  {
    id: "g4",
    color: "Green",
    value: 24,
    url: "uno_assets_2d/PNGs/small/green_4.png",
  },
  {
    id: "g5",
    color: "Green",
    value: 25,
    url: "uno_assets_2d/PNGs/small/green_5.png",
  },
  {
    id: "g6",
    color: "Green",
    value: 26,
    url: "uno_assets_2d/PNGs/small/green_6.png",
  },
  {
    id: "g7",
    color: "Green",
    value: 27,
    url: "uno_assets_2d/PNGs/small/green_7.png",
  },
  {
    id: "g8",
    color: "Green",
    value: 28,
    url: "uno_assets_2d/PNGs/small/green_8.png",
  },
  {
    id: "g9",
    color: "Green",
    value: 29,
    url: "uno_assets_2d/PNGs/small/green_9.png", 
  },
  {
    id: "g10",
    color: "Green",
    value: 30,
    url: "uno_assets_2d/PNGs/small/green_picker.png",
  },
  {
    id: "g11",
    color: "Green",
    value: 31,
    url: "uno_assets_2d/PNGs/small/green_reverse.png",
  },
  {
    id: "g12",
    color: "Green",
    value: 32,
    url: "uno_assets_2d/PNGs/small/green_skip.png",
  },
  {
    id: "r0",
    color: "Red",
    value: 40,
    url: "uno_assets_2d/PNGs/small/red_0.png",
  },
  {
    id: "r1",
    color: "Red",
    value: 41,
    url: "uno_assets_2d/PNGs/small/red_1.png",
  },
  {
    id: "r2",
    color: "Red",
    value: 42,
    url: "uno_assets_2d/PNGs/small/red_2.png",
  },
  {
    id: "r3",
    color: "Red",
    value: 43,
    url: "uno_assets_2d/PNGs/small/red_3.png",
  },
  {
    id: "r4",
    color: "Red",
    value: 44,
    url: "uno_assets_2d/PNGs/small/red_4.png",
  },
  {
    id: "r5",
    color: "Red",
    value: 45,
    url: "uno_assets_2d/PNGs/small/red_5.png",
  },
  {
    id: "r6",
    color: "Red",
    value: 46,
    url: "uno_assets_2d/PNGs/small/red_6.png",
  },
  {
    id: "r7",
    color: "Red",
    value: 47,
    url: "uno_assets_2d/PNGs/small/red_7.png",
  },
  {
    id: "r8",
    color: "Red",
    value: 48,
    url: "uno_assets_2d/PNGs/small/red_8.png",
  },
  {
    id: "r9",
    color: "Red",
    value: 49,
    url: "uno_assets_2d/PNGs/small/red_9.png", 
  },
  {
    id: "r10",
    color: "Red",
    value: 50,
    url: "uno_assets_2d/PNGs/small/red_picker.png",
  },
  {
    id: "r11",
    color: "Red",
    value: 51,
    url: "uno_assets_2d/PNGs/small/red_reverse.png",
  },
  {
    id: "r12",
    color: "Red",
    value: 52,
    url: "uno_assets_2d/PNGs/small/red_skip.png",
  },
  {
    id: "y0",
    color: "Yellow",
    value: 60,
    url: "uno_assets_2d/PNGs/small/yellow_0.png",
  },
  {
    id: "y1",
    color: "Yellow",
    value: 61,
    url: "uno_assets_2d/PNGs/small/yellow_1.png",
  },
  {
    id: "y2",
    color: "Yellow",
    value: 62,
    url: "uno_assets_2d/PNGs/small/yellow_2.png",
  },
  {
    id: "y3",
    color: "Yellow",
    value: 63,
    url: "uno_assets_2d/PNGs/small/yellow_3.png",
  },
  {
    id: "y4",
    color: "Yellow",
    value: 64,
    url: "uno_assets_2d/PNGs/small/yellow_4.png",
  },
  {
    id: "y5",
    color: "Yellow",
    value: 65,
    url: "uno_assets_2d/PNGs/small/yellow_5.png",
  },
  {
    id: "y6",
    color: "Yellow",
    value: 66,
    url: "uno_assets_2d/PNGs/small/yellow_6.png",
  },
  {
    id: "y7",
    color: "Yellow",
    value: 67,
    url: "uno_assets_2d/PNGs/small/yellow_7.png",
  },
  {
    id: "y8",
    color: "Yellow",
    value: 68,
    url: "uno_assets_2d/PNGs/small/yellow_8.png",
  },
  {
    id: "y9",
    color: "Yellow",
    value: 69,
    url: "uno_assets_2d/PNGs/small/yellow_9.png", 
  },
  {
    id: "y10",
    color: "Yellow",
    value: 70,
    url: "uno_assets_2d/PNGs/small/yellow_picker.png",
  },
  {
    id: "y11",
    color: "Yellow",
    value: 71,
    url: "uno_assets_2d/PNGs/small/yellow_reverse.png",
  },
  {
    id: "y12",
    color: "Yellow",
    value: 72,
    url: "uno_assets_2d/PNGs/small/yellow_skip.png",
  },
  {
    id: "wild1",
    color: "RGBY",
    value: 80,
    url: "uno_assets_2d/PNGs/small/wild_color_changer.png",
  },
  {
    id: "wild4",
    color: "RGBY",
    value: 81,
    url: "uno_assets_2d/PNGs/small/wild_pick_four.png",
  },
  //remember to add in other special cards after designing them
];



////////////////////// * Functions !! ////////////////////
//function for players to draw cards
const draw = () => {
  let card = Math.floor(Math.random() * deck.length);
  console.log($draw, deck[card]);
  $img1 = $("<img>").attr("src", `${deck[card].url}`);
  $(".player1").append($img1);
};
$draw = $("<div>").addClass("draw");
$("body").append($draw);


////////* start game with 3 players and their random cards! //////////

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

  //create cardsPlayed area to start with one random card like player
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
  //
};

////////////* Check function! ////////////////

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
    
  } else {
    //this is where a player puts a card into the playedCards pile
    

    nextPlayer(direction);
  }
};
//make the 2 players play their cards and the players to draw card when parameters not fulfilled
//setInterval















//declaring win/lose message
const playerWinMessage = "You win!";
const playerLoseMessage = "You lose";

//function to restart game after game end



//make the cardplayed only show the top card
//replace?


//make sure the nextplayer func is called repeatedly if its not my turn


//make sure no duplicates to be drawn
//can use Array.pop()
//but before this, shuffle the cards before pop so there will be no duplicates in drawpile


//add specials/wild cards in


//change player 2 and 3 to backofcards.png
//assigning a different class as priority in css so that it can be removed to show the actual card when thrown
//need to remove css when card thrown
// prioritise class and toggle between the 2 classes



