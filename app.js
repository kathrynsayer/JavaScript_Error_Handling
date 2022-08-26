"use strict";

// TODO: Fix the following parameter list
function parseToJSON(data, peramiter2) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  
  try {
    return JSON.parse(data); 

  } catch (error) {
    console.log(error);
    return null
  }

  
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
