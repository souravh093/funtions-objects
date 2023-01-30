var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 1,
  mouse: 2,
  pen: 25,
  shoes: 2,
};

// var shoppingKeys = Object.keys(shoppingCart);
// var shoppingValue = Object.values(shoppingCart);
// console.log(shoppingKeys);

// complex version
// for (var i = 0; i < shoppingKeys.length; i++) {
//     var propertyName = shoppingKeys[i];
//     var propertyValue = shoppingValue[i];
//     console.log(propertyName, propertyValue);
// }

// simple version using for in loop
for(var hello in shoppingCart) {
    const value = shoppingCart[hello];
    console.log(hello, value);
}


var books = {
    science : 4,
    bangle : 8,
    region : 2,
    math: 3,
    english: 5
}

for(let key in books) {
    let booksValue = books[key];
    console.log(key, ": ", booksValue);
}

