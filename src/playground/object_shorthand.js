// ES6 features to work with objects. Object property shorthand

const username ="Howard"
const age = 7

const user ={
    name: username,
    userAge: age,
    location: 'Falkawn'

}

console.log(user);

// Destructuring Object

const product ={
    label: 'Red notebook',
    price: 3,
    stock: 201,
    price: undefined
}

//console.log(product.label)

// const {label: productLabel, stock, price, rating = 5} = product // product=5 is a default value 

// console.log('Label:', productLabel);
// console.log('Stock:', stock);
// console.log('Rating:',rating);


const transaction =(type, {label, stock=0}={})=>{
    console.log(type, label, stock);

}

transaction('order ',product);

transaction('order');