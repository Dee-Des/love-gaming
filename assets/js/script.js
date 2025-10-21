console.log("Connected to script.js");

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

function runGame() {

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