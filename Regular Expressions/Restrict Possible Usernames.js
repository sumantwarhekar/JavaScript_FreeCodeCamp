let username = "JackOfAllTrades";
let userCheck = /^[a-z][A-Z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);