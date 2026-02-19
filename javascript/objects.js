const user = {
    name : 'Lestrade',
    email : 'lestrade@gamil.com',
    age : 45
}
console.log(user);

console.log( user.email );
console.log( user['name'] );

user.address = 'Lucknow';
console.log(user);

user.age = 20;

console.log(user);

console.log(Object.keys(user) );
console.log(Object.values(user));
delete user.address;
console.log(user);

const smartphone = {
    brand : 'samsung',
    model : 's24',
    price : 120000,
    colors : ['black', 'white', 'blue']
};

console.log(smartphone.colors[2]);
