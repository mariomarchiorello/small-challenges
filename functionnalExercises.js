const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

console.log(inventors);

console.log(inventors[1].passed);

console.log("\n--------------------------------------------------------------------------")


1.1
const listofOldInventors = inventors.filter(oldAssInventor => oldAssInventor.year >= 1500 && oldAssInventor.year <= 1599);
console.log("~ listofOldInventors", listofOldInventors);
console.log("\n--------------------------------------------------------------------------")

1.2
const inventorsFullNames = inventors.map(fullName => `Full name: ${fullName.first} ${fullName.last}`);
console.log("~ inventorsFullNames", inventorsFullNames);
console.log("\n--------------------------------------------------------------------------")

1.3
sortedByEarliestBirth = [...inventors].sort((inventor1, inventor2) => inventor1.year - inventor2.year)
console.log("~ sortedByEarliestBirth", sortedByEarliestBirth);
console.log("\n--------------------------------------------------------------------------")

1.4
const ageIndividual = inventors.map(age =>  age.passed - age.year);
console.log("~ ageIndividual", ageIndividual);
const combinedAge = ageIndividual.reduce((accu, currVal) => accu + currVal);
console.log("~ combinedAge", combinedAge);

console.log("\n--------------------------------------------------------------------------")

1.5
sortedByshortestLife = [...inventors].sort((inventor1) => (inventor1.last));
console.log("~ sortedByshortestLife", sortedByshortestLife);
console.log("\n--------------------------------------------------------------------------")

1.6
const sortByAlphabet = [...inventors].sort((a,b) => (a.first > b.first) ? 1 : ((b.first  > a.first) ? -1 : 0));
console.log("~ sortByAlphabet", sortByAlphabet);

console.log("\n--------------------------------------------------------------------------")




//OBJECT KEYS
const bigAl = { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 };
const objectkeys = Object.entries(bigAl).forEach(([key ]) => console.log(key));

console.log("\n--------------------------------------------------------------------------")

const objectValues = Object.entries(bigAl).forEach(([, value]) => console.log(value));


console.log("\n--------------------------------------------------------------------------")

console.log(sortByAlphabet[5].first)
