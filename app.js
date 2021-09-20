//build the deck
const deck = [
        "uno_assets_2d/PNGs/small/blue_0.png",
        "uno_assets_2d/PNGs/small/blue_1.png",
        "uno_assets_2d/PNGs/small/blue_2.png",
        "uno_assets_2d/PNGs/small/blue_3.png",
        "uno_assets_2d/PNGs/small/blue_4.png",
        "uno_assets_2d/PNGs/small/blue_5.png",
        "uno_assets_2d/PNGs/small/blue_6.png",
        "uno_assets_2d/PNGs/small/blue_7.png",
        "uno_assets_2d/PNGs/small/blue_8.png",
        "uno_assets_2d/PNGs/small/blue_9.png",
        "uno_assets_2d/PNGs/small/blue_reverse.png",
        "uno_assets_2d/PNGs/small/blue_skip.png",
        "uno_assets_2d/PNGs/small/green_0.png",
        "uno_assets_2d/PNGs/small/green_1.png",
        "uno_assets_2d/PNGs/small/green_2.png",
        "uno_assets_2d/PNGs/small/green_3.png",
        "uno_assets_2d/PNGs/small/green_4.png",
        "uno_assets_2d/PNGs/small/green_5.png",
        "uno_assets_2d/PNGs/small/green_6.png",
        "uno_assets_2d/PNGs/small/green_7.png",
        "uno_assets_2d/PNGs/small/green_8.png",
        "uno_assets_2d/PNGs/small/green_9.png",
        "uno_assets_2d/PNGs/small/green_reverse.png",
        "uno_assets_2d/PNGs/small/green_skip.png",
        "uno_assets_2d/PNGs/small/red_0.png",
        "uno_assets_2d/PNGs/small/red_1.png",
        "uno_assets_2d/PNGs/small/red_2.png",
        "uno_assets_2d/PNGs/small/red_3.png",
        "uno_assets_2d/PNGs/small/red_4.png",
        "uno_assets_2d/PNGs/small/red_5.png",
        "uno_assets_2d/PNGs/small/red_6.png",
        "uno_assets_2d/PNGs/small/red_7.png",
        "uno_assets_2d/PNGs/small/red_8.png",
        "uno_assets_2d/PNGs/small/red_9.png",
        "uno_assets_2d/PNGs/small/red_reverse.png",
        "uno_assets_2d/PNGs/small/red_skip.png",
        "uno_assets_2d/PNGs/small/yellow_0.png",
        "uno_assets_2d/PNGs/small/yellow_1.png",
        "uno_assets_2d/PNGs/small/yellow_2.png",
        "uno_assets_2d/PNGs/small/yellow_3.png",
        "uno_assets_2d/PNGs/small/yellow_4.png",
        "uno_assets_2d/PNGs/small/yellow_5.png",
        "uno_assets_2d/PNGs/small/yellow_6.png",
        "uno_assets_2d/PNGs/small/yellow_7.png",
        "uno_assets_2d/PNGs/small/yellow_8.png",
        "uno_assets_2d/PNGs/small/yellow_9.png",
        "uno_assets_2d/PNGs/small/yellow_reverse.png",
        "uno_assets_2d/PNGs/small/yellow_skip.png",
        "uno_assets_2d/PNGs/small/wild_pick_four.png",
        "uno_assets_2d/PNGs/small/wild_color_changer.png"];


//randomise/shuffle the deck
const randomCard = (deck) => {
    return Math.floor(Math.random()*deck.length);
    }

//creating the players
const player1StartCards = 7;
const player2StartCards = 7;
const player3StartCards = 7;



//event click handler to all player card elements


//function that executes when card is clicked to be discarded/played


//function to show card



//function to compare cards


//function to draw cards
$(() => {
    const draw = $('#draw');
    console.log($draw);
})


//declaring win/lose message
const playerWinMessage = "You win!";
const playerLoseMessage = "You lose";

//function to restart game after game end

