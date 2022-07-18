

// Write your JavaScript code here!


//const { formSubmission } = require("./scriptHelper");






window.addEventListener("load", function() {

    let form = document.querySelector('form');
    let submitButton = document.getElementById('formSubmit')
    submitButton.addEventListener("click", (event) =>

{
    /*add if statements to validate check each field if info not valid
     use event.preventDefault();*/
    let list =[]

    
    //let list = document.getElementById("faultyItems");
    let launchstat = document.getElementById('launchStatus')
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
   
    //get List from faulty list
    if (!formSubmission(document,list,pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)){

        event.preventDefault();
    }
    
    formSubmission(document,list,pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    
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
   })



  
});