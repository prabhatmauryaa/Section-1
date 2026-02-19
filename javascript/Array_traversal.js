const nums = [3, 5, 8, 9, 12, 18];

for(let n of nums){
    console.log(n*2);
}

nums.forEach( (a, i) => { 
    console.log(a, i);
    
});

// map function

const newArr = nums.map((n) => {
    return n * 3;
});9
console.log(newArr);

const nums2 = [1, 2, 3, 4, 5];
const sqr = nums2.map((n) => {
    return n ** 2;
});
console.log(sqr);

// filter function

const evenNums = nums.filter((n) =>{
    return n % 2 !== 0;
});
console.log(evenNums);

const prices = [345.95, 34.32, 874.5, 23.45, 56.78];

const gstPrices = prices.map((n) => {
    return n * 1.18;
});
console.log(gstPrices);

// filter all prices between 40 and 200

const budgetPrices = prices.filter((p) => {
    return p>= 40 && p<= 200;

});
console.log(budgetPrices);
