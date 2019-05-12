let game = {};

game.murderer = "??";

game["weapons"] = [

{type:"lasers", location: "lab"},
{type:"candlestick", material: "steel"},
{type:"lead pipe", length: `18 inches`}

];

// game["characters"] = [

// {name:"Mrs. White", occupation:"maid"},
// {name:"Col. Mustard", occupation:"colonel"},
// {name:"Mr. Peabody", occupation:"professor"}

// ];

game.name = [];

game.name[0] = "Miss Scarlet";
game.name.push("Mr. Green");

console.log(game.name);


console.log(game.weapons[2].length);

// let obj = {first:"Dan", last:"Coelho"};
// let first = obj.first;
// let last = obj.last;

//destructuring saves us in repeating code in the way seen on lines 31 to 33

//const [first, second] = ["Dan", "Coelho"];


const student = {
	firstName:"Alex",
	lastName:"DeLeon",
	country:"Panama"
};

//We have repetitive code below where we are declaring a variable made from properties inside of an object or an array.

// const firstName = student.firstName;
// const lastName = student.lastName;
// console.log(firstName);

// Object Destructuring, Instead of creating multiple variables, we destructure them in a single line

//give me a variable called firstName, lastName and country and take it from the person object. We"re taking these 3 property names from the student object and putting their values into the three new variable values that will be scoped to the parent block.

const {firstName, lastName, country} = student;


const jimmy = {

	first:"Jimmy",
	last:"Wynn",
	links:{
		social: {
			twitter:"http://www.stayup.comT",
			facebook:"http://www.stayup.comF",

		},
		
		web:{
			blog:"http://www.stayup.comB"
		}

	}

};

//old method

//const twitter =  jimmy.links.social.twitter;

//destructuring

const {twitter} = jimmy.links.social;

console.log(twitter);

const j = {x:1};
j.x = 3;
j.y = 4;
console.log(j);

let rusty = {

 "name": "Rusty",
 "room": "kitchen",
 "weapon": "candlestick"

};

const {room, weapon} = rusty;

console.log(room, weapon);


let obj = {firstA:"Dan", lastA:"Whatever"};

const{firstA, lastA} = obj;

console.log(firstA);

// Array destructuring

const names = ["Luke", "Eva", "Phil"];

//extract data from the array, extract the first item
// const [whateveryouwanttocallit] = names;

//extract all items (or even define a default value in case the array does not contain enough items)

//add a comma to skip items in the array like Eva;

const [whateveryouwanttocallit, , thirdItem, fourth = "Teddy"] = names;

// let thirdItem = names[2]; (old method of extracting data from an array)


console.log(whateveryouwanttocallit,  thirdItem, fourth);



let dogs = ["Maja", "Skippy", "King", "Gunda", "Sheena", "Erika", "Macho"];

//use ... (rest operator) to assign the rest of the items to have the same variable name

const [Doberman, Lab, ...GermanShephard] = dogs;

console.log(Doberman, Lab, GermanShephard.join(", "));

//Destructuring an object

const AlexD = {

 name: "Alex",

 hometown: "Riverside",

 facts: {

  hobby: "Marathon Running",

  work: "Web Developer",

  comics:{

   favorite:"Superman",

   leastFavorite: "Sheera"

 }


}

};


const {name} = AlexD;

// To extract something deeper in the array, there are a couple of ways to do it
const {favorite} = AlexD.facts.comics;

console.log(favorite);

const {hobby} = AlexD.facts;
const {facts:{work}} = AlexD;


const {favoriteFood = "Lobster"} = AlexD;

console.log(name);
console.log(hobby);
console.log(work);
console.log(favoriteFood);

//if your function gets an object as a parameter, you can destructure it in the parameter list
const toString = ({name, hometown}) => (`${name} is from ${hometown}.`);

console.log(toString(AlexD));

//swap variables with a temp

// let a = 1, b = 2;

// console.log(a, b);

// let temp = a;

// a = b;

// b = temp;

// console.log(a, b);

//swap variables using destructuring

let a = 1, b = 2;

console.log(a, b);

[b, a] = [a, b];

console.log(a, b);

// other es6 courses will go deeper into destructuring arrays and objects

// List Transformations (used in functional utility methods), take a list or collection of data and extracting data. It is useful since on the frontend, you"ll be working with an api and the data that you get from the api that you are working with is not in the format that you need it to be in and you do not have control over it.

// So you use functional utility methods to transform these lists into something that is useable is something that you have to do everyday.

const gameA = {
  "suspects" : [

  {
    name:"Rusty",
    color:"orange"
  },

  {
   name:"Miss Scarlet",
   color:"red"

 }

 ]

}

function foo(){

 for(let i = 0; i < gameA.suspects.length; i ++){

  console.log(gameA.suspects[i]);

}

} foo();

for(let key in gameA){

	console.log(key);
}

function gameLoop(){


 for(let i = 0; i < gameA.suspects.length; i ++){

  for(key in gameA.suspects[i]){

   gameA.suspects[i][key]==="Rusty" ? console.log("It\"s Rusty") : console.log(key);
 }

}

}gameLoop();

let suspects = [

{
  name:"Rusty",
  color:"orange"
},

{
 name:"Miss Scarlet",
 color:"red"

}

]

// destructuring an array with objects inside

//const [color1, color2] = [suspects[0].color, suspects[1].color];

const [{color: color1}, {color: color2}] = suspects;

//const [firstObj, color2] = suspects;

console.log(color1,  color2);


function CreateSuspectObjects(name){


 return {

  name:name,
  color:name.split(" ")[1],
      speak(){  // added method no colon or function keyword

      	console.log("My name is ", name);
      }

    };

  }

  let suspectsA = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

  let suspectsList = [];

  for(let i = 0; i < suspectsA.length; i ++){


   suspectsList.push(CreateSuspectObjects(suspectsA[i]));
 }


 console.log(CreateSuspectObjects(suspectsA[0]));

 console.log(suspectsList);

 let rooms = ["observatory", "ballroom", "library"];
 let rooms2 = [];

 rooms.forEach((val)=> rooms2.push(val));
 for(let i of rooms2){

  console.log(i);

}

const _ = {};

// _.each(rooms, function(val){

// 	console.log(`${val} is a room.`);
// });

//each takes 3 parameters val, index, list(array)

_.each = function (list, callback){

	if(Array.isArray(list)){ //returns true if the array is an array

         //loop through Array
         for(let i = 0; i < list.length; i ++){
           // call the callback with a list item

           callback(list[i], i, list);

         }


       }else{
		//loop through object
		// call the callback with a list item

	}

}

_.each(["sally", "georgie", "porgie"], function(name, i, list){

  if(list[i + 1]){

   console.log(name, "is younger than", list[i +1])

 }else{

  console.log(name, " is the oldest")
}



});


// map method

const weaponsA = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function (item){

  return `broken ${item}`;


};

const brokenWeapons = weaponsA.map(makeBroken); //returns an array


console.log(brokenWeapons);



_.map = function(list, callback){

//create an empty array to store

var storage = [];

//loop through the array

 // for (let i = 0; i < list.length; i++){

 //    storage.push(callback(list[i], i, list));

 // }

 let i = 0;

 _.each(list, function(v){

  storage.push(callback (v, i, list));
})
 return storage;
   //callback(element)
   //push it to the array
   //return []

 }

 console.log(_.map([1,2,3], function(val) {return val + 1;}));

// _.filter(arr, callback){




// }


_.filter = function(arr, cb){

   // create a new array
   const storage = [];
  //loop through the array
  // for (let i = 0; i < arr.length; i++){

  //    if (cb(arr[i], i, arr)=== true){
  //      storage.push(arr[i]);
  //    }
  // }

  _.each(arr, function(item, i, list){

    if (cb(val, i, list)=== true){

      storage.push(item);
    }

  });
  // check if cb returns true
  // if returns true, push into array
  //return array

  return storage;

}

//json

let sammy = { 
  "first_name"  :  "Sammy", 
  "last_name"   :  "Shark", 
  "online"      :  true 
}


console.log(sammy.first_name);
console.log(sammy["online"]);


let user_profile = {

 "username" : "SammyShark",

 "social_media" : [

 {
  "description" : "twitter",
  "link" : "https://twitter.com/digitalocean"
},

{
 "description" : "facebook",
 "link" : "https://facebook.com/DigitalOceanCloudHosting"

},

{
 "description" : "github",
 "link" : "https://github.com/digitalocean"

}

]

}

console.log(user_profile.social_media[1].link);


let objA = {"firstNameA" : "Sammy", "lastnameA" : "Shark", "location" : "Ocean"}

let s = JSON.stringify(objA);

console.log(s);

const day = new Date().getDay();

switch(day){

 case 1:
 console.log("Happy Monday");
 break;

 case 2:
 console.log("It\"s Tuesday, You got this");
 break;


 case 3:
 console.log("Hump Day Already");
 break;

 case 4:
 console.log("Just one more day til the weekend");
 break;

 case 5:
 console.log("Happy Friday");
 break;

 case 6:
 console.log("Have a wonderful Saturday");
 break;

 case 7:
 console.log("Sunday, time to relax");
 break;

 default:

 console.log("Something went wrong.");

}


let shark = {

  species: "Great White",
  color: "White",
  numberOfTeeth: "Infinity"

}


for(let prop in shark){

 console.log(`${prop.toUpperCase()} : ${shark[prop]}`);


}

let string1 = "";

let object1 = {a:1, b: 2, c:3};


for(let vals in object1){

  //console.log(string1 + `${object1[vals]}`);

  console.log(`object1.${vals} = ${object1[vals]}`);

}

let pets = {

 dog: "Cocker Spaniel",
 cat: "Siamese",
 bird: "Canary"
}


for(let pet in pets){

  console.log(`Pets.${pet} = ${pets[pet]}`);

}

console.log(Object.keys(pets));

console.log(Object.values(pets));

let x = {};

let y = Object.getPrototypeOf(x);

console.log(y);

function Hero (name, level){

 this.name = name;
 this.level = level;

}

let hero1 = new Hero("Ricky", 2);
let hero2 = new Hero("Tommy", 3);

console.log(hero2);
console.log(Object.getPrototypeOf(hero2));



function upper(strings, ...valuesA){
 
 let ret = "";
 for(let i = 0; i < strings.length; i ++){
   if (i > 0){
    
    ret += String(valuesA[i-1]).toUpperCase();
    
  }
  ret += strings[i];
}
return "";

}

let nameA = "kyle",
twitterA = "getify",
topic = "JS Recent Parts";


console.log(

 upper`Hello ${nameA}(@${twitterA}), welcome to ${topic}!`
 );




let objZ = {
  "user1":"Huey",
  "user2":"Duey",
  "user3":"Louie",
  "user4":"Whoever"
}

Object.keys(objZ).forEach((key, index)=>{
  console.log(key, objZ[key]);
})

let entries = Object.entries(objZ);

for(let[a, b] of entries){

  console.log(a, b);
}
















