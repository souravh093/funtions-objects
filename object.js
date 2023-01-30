var student = {
    id: 115,
    name: 'Sourav Halder',
    class: 10,
    marks: 88
}

var mobile = {
    brand: 'samsung',
    price: 12000,
    storage: '32gb',
    camera: '12mp',
    color: 'black'
}

var myComputer = {
    brand : 'samsung',
    price : '58000',
    color : 'black',
    processor : 'i3'
}

console.log(myComputer.price);
myComputer.processor = 'i7';
console.log(myComputer);
console.log(myComputer.processor);