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
*/

const checkHumanAge = function (age) {
  const calcHumanAge = age
    .map(dogCurrAge => (dogCurrAge <= 2 ? 2 * dogCurrAge : 16 + dogCurrAge * 4))
    .filter(currAge => currAge >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

  console.log(calcHumanAge);
};

checkHumanAge([5, 2, 4, 1, 15, 8, 3]);
checkHumanAge([16, 6, 10, 5, 6, 1, 4]);
