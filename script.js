

// Write your JavaScript code here!


//const { formSubmission } = require("./scriptHelper");






window.addEventListener("load", function() {

    let form = document.querySelector('form');
    //move to form submission

    let submitButton = document.getElementById('formSubmit')
    submitButton.addEventListener("click", (event) =>

{
    /*add if statements to validate check each field if info not valid
     use event.preventDefault();*/
     event.preventDefault();

    //get List from faulty list
    let list = document.getElementById("faultyItems");
    let launchstat = document.getElementById('launchStatus')
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let fuelLevel = Number(fuelLevelInput.value);
    console.log(fuelLevel);
    
    let cargoMass = Number(cargoMassInput.value);
    console.log(cargoMass + typeof cargoMass + "fresh");
   
  
    
    //move after listed planets
    formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevel, cargoMass);
    
});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   console.log(myFetch());
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       planet = pickPlanet(listedPlanets);
       console.log(planet);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let moons = planet.moons;
       let imageUrl = planet.image;

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })

        
   
    
});