const myArr = [1, 'hello', true, null];

console.log(myArr);

const movies = ['Fast&Furious' ,  'Dune' , 'Tenet' , 'Pushpa' , 'Batman' , 'Thor'];

console.log( movies.length);

// indexing
console.log(movies[3]);
console.log(movies.indexOf('Pushpa'));
console.log(movies.at(-2));

movies[2] = 'Odyssey';

console.log(movies);

// slicing

console.log(movies.slice(1, 4));
console.log(movies.slice(1));
console.log(movies.slice(-3));
console.log(movies.slice(-3 , -1));
console.log(movies.slice(0 , 10));

// adding and removing elements

movies.push('RRR');
movies.unshift('KGF');
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// splice function
// movies.splice(3, 2); //removing elements
// movies.splice(3, 2, 'superman', 'supergirl' ); //replacing elements
movies.splice(3, 0, 'superman'); //inserting elements

console.log(movies);
