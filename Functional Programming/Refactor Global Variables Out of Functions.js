// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
  let addedBook = [...arr];
  addedBook.push(bookName);
  return addedBook;
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
    let removedBook = [...arr]; 
    if (removedBook.indexOf(bookName) >= 0) {
    removedBook.splice(removedBook.indexOf(bookName), 1);
    return removedBook;  
    // Change code above this line
  }
}

console.log(bookList);