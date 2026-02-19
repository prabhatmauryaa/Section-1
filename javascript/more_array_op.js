const smartphones = [
    {
        brand : 'nothing',
        model : 'phone 2',
        price : 50000,
        colors : ['black', 'white', 'blue']
    },
    {
        brand : 'oneplus',
        model : '13R',
        price : 400000,
        colors : ['red', 'black', 'blue']
    },
    {
        brand : 'vivo',
        model : 'T2 pro',
        price : 25000,
        colors : ['silver', 'blue']
    },
    {
        brand : 'samsung',
        model : 'J7',
        price : 15000,
        colors : ['black', 'gold']
    },
    
];

const brands = smartphones.map( ( phone ) => {
    return phone.brand;

});

console.log(brands);

// create array of all prices in number

const price = smartphones.map( ( phone ) => {
    return phone.price;

});

console.log(price);

// create array of all model

const model = smartphones.map( ( phone ) => {
    return phone.model;

});

console.log(model);

// create array of all colors

const colors = smartphones.map( ( phone ) => {
    return phone.colors;

});

console.log(colors);

const budgetPhones = smartphones.filter( (phone) => {
    return phone.price < 30000;
});

console.log(budgetPhones);

// include method

const blackcolor = smartphones.filter( (phone) => {
    return phone.colors.includes('black');
});

console.log(blackcolor);

// console.log(array.isarray({a:3}));

console.log( typeof NaN);
console.log( undefined + 1);


console.log( 1 == '1' );
console.log( 1 === '1' );
console.log( 1 === 1 );

console.log( 1 + '1' );
console.log( 1 + '1' + 1 );
console.log( 1 + 1 + '1' );
console.log( 1 + 1 + 'abc');



