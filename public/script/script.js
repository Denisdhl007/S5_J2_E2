//1
/*
let coding = [`coding 20`, `coding 21`, `coding 22`];
console.log(coding);
console.log(coding.length);
console.log(coding[0]);
console.log(coding[1]);
console.log(coding[2]);
*/


//2
/*
let coding = [`coding 20`, `coding 21`, `coding 22`];
console.log(coding);
console.log(coding[1]);
coding.push(`denis`);
console.log(coding);
*/




//3
/*

let coding = [`coding 20`, `coding 21`, `coding 22`];
console.log(coding);

coding.push(`denis`);
console.log(coding);

let arr = [`coding 20`, `coding 21`, `coding 22`];
arr = arr.filter(e => e !== `coding 21`); 
console.log(arr);

arr.push(`coding 23`);
console.log(arr);
*/



// Versions

/*

const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 

*/

// Versions

/*
var array = ['A', 'B', 'C']; // Test
var search_term = 'B';

for (var i=array.length-1; i>=0; i--) {
    if (array[i] === search_term) {
        array.splice(i, 1);
        // break;       //<-- Uncomment  if only the first term has to be removed
    }
}
*/







//4

let coding = [`coding 20`, `coding 21`, `coding 22`];
console.log(coding);
coding.push(`denis`);
coding = coding.filter(e => e !== `coding 21`); 
console.log(coding);