// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput, indicator) {

    window.addEventListener("load", function() {
       let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            /*add if statements to validate check each field if info not valid
             use event.preventDefault();*/
             
             alert("I am in validateInput" + testInput);
             if (testInput = "" ){
                //event.preventDefault();
                return "Empty";

             }else if ((isNaN(testInput)) ){
                if (indicator = "N"){
                    //event.preventDefault();
                }
                return "Not a Number";

             } else {
                if(indicator = "S"){
                   // event.preventDefault();
                }
                
                return "Is a Number"
             }





            /*let pilotNameInput = document.querySelector("input[name=pilotName]");
            let copilotNameInput = document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = document.querySelector("input[name=cargoMass]");*/


            //revisit for form submission

           /* if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value ===""){
                event.preventDefault();
                alert("all fields must be filled in");

            } else if(typeof pilotNameInput.value !== 'string'){
                event.preventDefault();
                alert("Pilot name must be a name");

            }else if(typeof copilotNameInput.value !== 'string'){
                event.preventDefault();
                alert("Co-Pilot name must be a name");
            }else if(typeof fuelLevelInput.value !== 'number'){
                event.preventDefault();
                alert("Fuel Level must be a number");
            }else if(typeof cargoMassInput.value !== 'number'){
                event.preventDefault();
                alert("Cargo Mass must be a number");
            }        */

        });
    });
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // alert("pilot is " + pilot);
    if (validateInput(pilot, "S") === "Empty" || validateInput(copilot, "S") === "Empty" || validateInput(fuelLevel, "N") === "Empty" || validateInput(cargoLevel, "N") === "Empty")
    {
        alert("all fields must be filled in");
    }
    /*}else if()*/
    
};

async function myFetch() {
  

    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
