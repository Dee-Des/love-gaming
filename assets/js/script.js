console.log("Connected to script.js");


//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "forward-facing-sprite") {
                alert("You have summoned a forward facing sprite!");
            } else if
                (this.getAttribute("data-type") === "backwards-facing-sprite") {
                    alert("You have summoned a backwards facing sprite!");
            } else if
                (this.getAttribute("data-type") === "forwards-facing-shiny-sprite") {
                    alert("You have summoned a forwards facing shiny sprite!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }

});
//Get data from PokeAPI about Characters

//fetchData();

async function displaySpriteFacingForwards() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error ("Could not fetch resource");
        }

        const data = await response.json();

        //to log sprite image data returning to the console
        //console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSpriteFacingForwards");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
  
        
        
    }
    
    catch(error){
        console.error(error);
    }
}

async function displaySpriteFacingBackwards() {

    try {

        const pokemonName = document.getElementById("pokemonName2").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error ("Could not fetch resource");
        }

        const data = await response.json();

        //to log sprite image data returning to the console
        //console.log(data);
        const pokemonSprite = data.sprites.back_default;
        const facingBackwardsImgElement = document.getElementById("pokemonSpriteFacingBackwards");
        facingBackwardsImgElement.src = pokemonSprite;
         facingBackwardsImgElement.style.display = "block";
        
    }
    catch(error){
        console.error(error);
    }
}

async function pokemonSpriteFacingForwardsShiny() {

    try {

        const pokemonName = document.getElementById("pokemonName3").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error ("Could not fetch resource");
        }

        const data = await response.json();
     
        //to log sprite image data returning to the console
        //console.log(data);
        const pokemonSprite = data.sprites.front_shiny;
        const facingForwardsShinyImgElement = document.getElementById("pokemonSpriteFacingForwardsShiny");
        facingForwardsShinyImgElement.src = pokemonSprite;
        facingForwardsShinyImgElement.style.display = "block";
  
    }
    catch(error){
        console.error(error);
    }
}