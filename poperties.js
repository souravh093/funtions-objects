var shoppingCart = {
    books : 3,
    sunglass : 1,
    keyboard : 1,
    mouse : 2,
    pen : 25
}

// when you know the specific name properties name, use dot notation
var penCount = shoppingCart.pen;

// alternative system
// when you know the specific name properties name, use dot notation
var penCount = shoppingCart['pen'];

var propertyName = 'mouse';
var propertieValue = shoppingCart[propertyName]
// console.log(propertieValue);
// console.log(propertyName);

var properties = Object.keys(shoppingCart);
var propertieValue = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertieValue);
// console.log(shoppingCart);



// set property value
console.log(shoppingCart);
shoppingCart.mouse = 5; // method 1
console.log(shoppingCart);
shoppingCart['pen'] = 7; // method 2
console.log(shoppingCart);
var booksCategory = 'books'
shoppingCart[booksCategory] = 10; // method 3
console.log(shoppingCart);