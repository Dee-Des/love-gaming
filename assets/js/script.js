console.log("Connected to script.js");


//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


document.addEventListener("COMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "sumit") {
                alert("You clicked Submit!");
            }else {
                let gameType = this .getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }

});


//Get data from PokeAPI about Characters

//fetchData();

async function fetchData() {

    try {

        const pokemonName = document.getElementById("answer-box-pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error ("Could not fetch resource");
        }

        const data = await response.json();

        //to log data returning to the console
        //console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
/**
 * * The main game "loop", called when the script is first loaded
 * * and after the user's answer has been processed
 */
function runGame() {


    //Creates two random numbers between 1 and 25
    //let num1 = Math.floor(Math.random() * 25 + 1);
    //let num = Math.floor(Math.random() * 25 + 1);
}


function checkAnswer() {

}

function calculateCorrectAnswer(){

}

function incrementScore() {
}

function incrementWrongAnswer() {

}

function displayNameQuestion() {

}

function displayIdQuestion() {

}

function displayWeightQuestion() {

}