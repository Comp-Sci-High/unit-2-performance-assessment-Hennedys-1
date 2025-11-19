const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

let url = "https://api.api-onepiece.com/v2/characters/en"

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
console.log("Welcome to the one piece page: ")
let characterC = prompt("What Character Do You Want Info On?(Integers Only)")
let requestUrl = url + "/" + characterC

async function CharacterGenerator(url){

const response = await fetch(requestUrl);
const data = await response.json();
console.log(data);
}

console.log("Welcome to character Gen")
CharacterGenerator(requestUrl)

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
e