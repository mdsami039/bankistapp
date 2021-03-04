'use strict';
/*
const dogJulia1 = [3, 5, 2, 12, 7];
const dogKate1 = [4, 1, 15, 8, 3];

const checkDogs = function (dogJulia, dogKate) {
  dogJulia.forEach(function (i, d) {
    const adult = i >= 3 ? `Adult` : `Puppy`;
    console.log(`Julia ${i + 1} dogs are ${adult}`);
  });
  dogKate.forEach(function (i, d) {
    const adult = i >= 3 ? `Adult` : `Puppy`;
    console.log(`kate ${i} dogs are ${adult}`);
  });

  const dogsJuliaCorrected = dogJulia.splice(1, 2);
  console.log([...dogsJuliaCorrected]);

  console.log(`Cats from julia array ${[...dogJulia]}`);

  const correctedArray = [...dogsJuliaCorrected, ...dogKate];
  console.log(correctedArray.join(` - `));

  correctedArray.forEach(function (value, i) {
    if (value > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs(dogJulia1, dogKate1);


const checkHumanAge = function (age) {
  const calcHumanAge = age
    .map(dogCurrAge => (dogCurrAge <= 2 ? 2 * dogCurrAge : 16 + dogCurrAge * 4))
    .filter(currAge => currAge >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

  console.log(calcHumanAge);
};

checkHumanAge([5, 2, 4, 1, 15, 8, 3]);
checkHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
const dogSarah = dogs.filter(dog => dog.owners.includes(`Sarah`));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? `Much` : ` little`
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(...ownersEatTooMuch);

const ownersEatTooLow = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(
  `${ownersEatTooMuch.join(` `)} Eat too much & ${ownersEatTooLow.join(
    ` `
  )} Eat too little`
);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//current > (recommend*0.90) && current < (recommeended*1.10)

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(...dogsSorted);
