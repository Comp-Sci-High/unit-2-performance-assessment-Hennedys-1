const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let requestUrl = "https://api.openai.com/v1/responses"

async function skibidi (){
const options = {
method:'POST',
headers:{
Authorization:'Bearer ' + apiKey,
'Content-Type': 'application/json',
},
body:JSON.stringify({
    model: prompt("What model do you want to use: "),
    input: prompt("What would you like to ask the chatbox: ")
})
}
const response = await fetch(requestUrl, options);
const r = await response.json();
console.log(r);
}
console.log("Welcome to ChatGPT")
skibidi(requestUrl)
e
