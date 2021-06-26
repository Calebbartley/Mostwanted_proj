"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
                  // TODO: search by traits
      searchResults = searchByTrait(people);
      console.log(searchResults)
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  let info = `First Name: ${person.firstName} \nLast Name: ${person.lastName} \nGender: ${person.gender} \nDOB: ${person.dob} \nHeight: ${person.height} \nWeight: ${person.weight} \nEye Color: ${person.eyeColor} \nOccupation: ${person.occupation} \nParents: ${person.parents} \nCurrent Spouse: ${person.currentSpouse}`
  let traits = info

  switch(displayOption){

    case "info":
      alert(info)
    // TODO: get person's info
    //displayOption()
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByTrait(people){
  let traits =  promptFor('Please provide their gender', chars).toLowerCase();

  let displayTrait = people.filter(function(person){
    
      if(person.gender.toLowerCase() === traits || person.eyeColor.toLowerCase() === traits || person.dob.toLowerCase()=== traits || person.height === traits || person.weight === traits){
        return true;
      }
      else{
        return false;
      }
  }
  )

  return displayTrait
  // TODO: find the person using the trait they entered
}



function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();

  let foundPerson = people.filter(
    
    function(person){
      if(person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName){
        return true;
      }
      else{
        return false;
      }
  }
  
  )
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayTrait(traits){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personTrait;
  height = "height:" + person.height + "\n";
  weight = "weight:" + person.weight + "\n";
  age = "age:" + person.age + "\n";
  eyeColor = "eye color:" + person.eyeColor + "\n";
  gender = "gender:" + person.gender + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personTrait);
  return personTrait;
}


function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "height:" + person.height + "\n";
  personInfo += "weight:" + person.weight + "\n";
  personInfo += "age:" + person.age + "\n";
  personInfo += "occupation:" + person.occupation + "\n";
  personInfo += "eye color:" + person.eyeColor + "\n";
  personInfo += "gender:" + person.gender + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
  return personInfo;
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
