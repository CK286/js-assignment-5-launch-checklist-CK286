// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   const destination = document.getElementById('missionTarget');
    //destination.addEventListener("click",function(){
   destination.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}<</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}<</li>
                    <li>Number of Moons:${moons}< </li>
                </ol>
                <img src="${imageUrl}">`
   
//});
};

function validateInput(testInput) {
    //let statusMyStr="Empty";
    

// note to self: step through with debugger fuel level/cargoMass has type of number
 
        
        

             if (testInput.length == 0){
            
                return "Empty";

             }else if (typeof testInput == "number"){
                //console.log(typeof testInput + testInput + "Is a Number");
                return "Is a Number"

             } else if (typeof testInput == "string"){
                //console.log(typeof testInput + testInput + "Not a Number");
                return "Not a Number";
             }


            };      

           
    
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   console.log(pilot, copilot, fuelLevel, cargoLevel);
   let good = "true";
 //test to view fuelLevel and cargoMass

   
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty")
    {
        alert("all fields must be filled in");
        good = "false";
        event.preventDefault();
    } else{
    
    if(validateInput(pilot) == "Is a Number"){
        good = "false";
        alert("Pilot should be a string");
        event.preventDefault();
    }
    if(validateInput(copilot) == "Is a Number"){
        good = "false";
        alert("Pilot should be a string");
        event.preventDefault();
    }

    if(validateInput(fuelLevel) == "Not a Number")
      {

        good = "false";
        alert("Fuel Level must be a number");
    }
    if(validateInput(cargoLevel) === "Not a Number")
      {

        good = "false";
        alert ("Cargo Level must be a number");
 
    }
   
}
if (good = "true")
{
    const launchStat = document.getElementById('launchStatus');
    //test if ready to Launch
    if (fuelLevel >= 10000 && cargoLevel<=10000){
       
        launchStat.style.color = "green";
        launchStat.innerHTML = `
   
                <h2>"Shuttle is ready for launch"</h2>`

    }else if (fuelLevel < 10000 && cargoLevel > 10000){
        //both bad
        launchStat.style.color = "red";
        launchStat.innerHTML = `
   
                <h2>"Shuttle not ready for launch"</h2>`

        const faulty = document.getElementById('faultyItems');
        //make it visible
        faulty.style.visibility = "visible";
        faulty.innerHTML = `
   
                
                <ol>
                    <li>Pilot ${pilot} is ready for launch.</li>
                    <li>Copilot ${copilot} is ready for launch.</li>
                    <li>Fuel level is too low for launch.</li>
                    <li>Cargo mass is too high for launch. </li>
                    
                </ol>`
               
   


    }else if(fuelLevel >= 10000 && cargoLevel > 10000){
        //cargo bad
        launchStat.style.color = "red";
        launchStat.innerHTML = `
   
                <h2>"Shuttle not ready for launch"</h2>`

        const faulty = document.getElementById('faultyItems');
        //make it visible
        faulty.style.visibility = "visible";
        faulty.innerHTML = `
   
                
                <ol>
                    <li>Pilot ${pilot} is ready for launch.</li>
                    <li>Copilot ${copilot} is ready for launch.</li>
                    <li>Fuel level high enough for launch.</li>
                    <li>Cargo mass is too high for launch. </li>
                    
                </ol>`
    }else if (fuelLevel < 10000 && cargoLevel<=10000){
        //fuel bad
        launchStat.style.color = "red";
        launchStat.innerHTML = `
   
                <h2>"Shuttle not ready for launch"</h2>`

        const faulty = document.getElementById('faultyItems');
        //make it visible
        faulty.style.visibility = "visible";
        faulty.innerHTML = `
   
                
                <ol>
                    <li>Pilot ${pilot} is ready for launch.</li>
                    <li>Copilot ${copilot} is ready for launch.</li>
                    <li>Fuel level  is too low for launch.</li>
                    <li>Cargo mass is low enough for launch. </li>
                    
                </ol>`
    }
};
}

async function myFetch() {
  

    let planetsReturned;
    
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    planetsReturned = await response.json();
    

   // planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
       // response.json().then( function(json){
           // planetsReturned = json;
          //  console.log ("from myFetch" + planetsReturned);
           
       // });
        

            return planetsReturned;
        }
//);

//}

function pickPlanet(planets) {
   let upper = planets.length;
   function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)+ min);
   }
  let i = getRandomInt(0,upper); 
  let planet = planets[i];
  
  return planet;

};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
