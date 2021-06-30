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
                  //alert(arrayObj.join('\n'))
      searchResults = searchByTrait(people);
      console.log(searchResults)
      alert(searchResults)

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

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let family = `Family:\n ${person[0].parents} \n ${person[0].currentSpouse}`
  let info = `First Name: ${person[0].firstName} \nLast Name: ${person[0].lastName} \nGender: ${person[0].gender} \nDOB: ${person[0].dob} \nHeight: ${person[0].height} \nWeight: ${person[0].weight} \nEye Color: ${person[0].eyeColor} \nOccupation: ${person[0].occupation} \nParents: ${person[0].parents} \nCurrent Spouse: ${person[0].currentSpouse}`
  //let males = ["Billy Bob","Michael Walkens","Jon walkens","Jack Pafoy" ]//Mister Potatoo \nMader Madden \nRalph Bob \nDave Pafoy \nMattias Madden`]
  //let Females = `Uma Bob, Jen Pafoy, Missuz Potatoo, Joy Madden, Jill Pafoy, Jasmine Bob, Amii Pafoy, Regina Madden, Hana madden, Eloise Madden, Ellen Madden, Joey madden`
  switch(displayOption){

    case "info":
      alert(info)
    // TODO: get person's info
    //displayOption()
    break;
    case "family":
      alert(family)
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
  let searchType = prompt('To Search lists by Gender enter "G". \n  To search lists by Eye color enter "E". \n To search lists by height enter "H". \n To search lists by weight "W". ').toUpperCase();
  let genderSearchResultsM = people.filter(person => person.gender === 'male');
  let genderSearchResultsF = people.filter(person => person.gender === 'female');
  let G = ('Men:'+" " + ('\n') + ' ' + (genderResultsString(genderSearchResultsM)))+ ' ' + ('\n')+ ' ' + ('Women:'+" " + ('\n') + ' ' + (genderResultsString(genderSearchResultsF)));
  //alert(G);
  //return app(people);
  let eyeColorSearchBro = people.filter(person => person.eyeColor === 'brown');
  let eyeColorSearchHzl = people.filter(person => person.eyeColor === 'hazel');
  let eyeColorSearchBlk = people.filter(person => person.eyeColor === 'black');
  let eyeColorSearchBlu = people.filter(person => person.eyeColor === 'blue');
  let eyeColorSearchGrn = people.filter(person => person.eyeColor === 'green');
  let E = ('Brown:'+ " " + ('\n') + " "+(eyeColorResultsString(eyeColorSearchBro))) + " " + ('\n')+ " " + ('\n')+ ' ' +('Black Eyes:'+ " " + ('\n')+ " "+ (eyeColorResultsString(eyeColorSearchBlk)))+ " " + ('\n')+ " " + ('\n')+ ' ' +('Hazel Eyes:'+ " " + ('\n')+ " "+ (eyeColorResultsString(eyeColorSearchHzl)))+ " " + ('\n')+ " " + ('\n')+ ' ' +('Blue Eyes:'+ " " + ('\n')+ " "+(eyeColorResultsString(eyeColorSearchBlu)))+ " " + ('\n')+ " " + ('\n')+ ' ' +('Green Eyes:'+ " " + ('\n')+ " "+(eyeColorResultsString(eyeColorSearchGrn)));
 
 
  let heightResultsSearch = people.filter(person => person.height <= 76);
  let H = ('height in inches:'+ " " +('\n')+ " " +(heightResultsString(heightResultsSearch)))

  let weightResultsSearch = people.filter(person => person.weight <= 257);
  let W = ('weight in pounds:'+ " " +('\n')+ " " +(weightResultsString(weightResultsSearch)))
  //alert(E);
  // return app(people);
  
  // let W = weight;
  if(searchType === 'G'){
    alert(G);
  }
  else if(searchType === 'E'){
    alert(E);
  }
  else if(searchType === 'H'){
    alert(H);
  }
  else if(searchType === 'W'){
    alert(W);
  }
 return app(people);

  }

function genderResultsString(list){
  let stringNames = []
  for (let index = 0; index < list.length; index++) {
    let personName = list[index].firstName + " " + list[index].lastName;
    stringNames.push(personName)

  }
  return stringNames.join('\n');
}
function eyeColorResultsString(list){
  let stringColors = []
  for (let index = 0; index < list.length; index++) {
    let personName = list[index].firstName + " " + list[index].lastName;
    stringColors.push(personName)

  }
  return stringColors.join('\n');
}
function heightResultsString(list){
  let stringHeight = []
  for (let index = 0; index < list.length; index++) {
    let personName = list[index].firstName + " " + list[index].lastName + " " + list[index].height;
    stringHeight.push(personName)

  }
  return stringHeight.join('\n');
}

function weightResultsString(list){
  let stringWeight = []
  for (let index = 0; index < list.length; index++) {
    let personName = list[index].firstName + " " + list[index].lastName + " " + list[index].weight;
    stringWeight.push(personName)

  }
  return stringWeight.join('\n');
}

  // let Gender = people.filter(person => person.eyeColor == );
  // let Gender = people.filter(person => person.height >= 80);
  // let Gender = people.filter(person => person.weight >= 300);



function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();

  let foundPerson = people.filter( function(person){
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
    return person[0].firstName + " " + person[0].lastName;
  }).join("\n"));
}

function displayTrait(traits){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personTrait =
  height = "height:" + person[0].height + "\n";
  weight = "weight:" + person[0].weight + "\n";
  age = "age:" + person[0].age + "\n";
  eyeColor = "eye color:" + person[0].eyeColor + "\n";
  gender = "gender:" + person[0].gender + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personTrait);
  return personTrait;
}


function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "height:" + person[0].height + "\n";
  personInfo += "weight:" + person[0].weight + "\n";
  personInfo += "age:" + person[0].age + "\n";
  personInfo += "occupation:" + person[0].occupation + "\n";
  personInfo += "eye color:" + person[0].eyeColor + "\n";
  personInfo += "gender:" + person[0].gender + "\n";
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
