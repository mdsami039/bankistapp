'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Sami Mohammed',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Shareef Sam',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Mohammed Samiuddin Shareef',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.reduce((acc, curr) => acc + curr, 0);
  console.log(balance);
  labelBalance.textContent = `${balance} EUR`;
};

const checkUsername = function (acc) {
  acc.forEach(function (value, i) {
    value.username = value.owner
      .toLowerCase()
      .split(` `)
      .map(function (name) {
        return name[0];
      })
      .join(``);
  });
};
checkUsername(accounts);

//Event HANDLER
let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display the UI message

    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(` `)[0]
    }`;

    //clear Input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    containerApp.style.opacity = 100;
    //Display Movements
    displayMovements(currentAccount.movements);
    //Display Balance
    calcDisplayBalance(currentAccount.movements);
    //Display Summary
    calcDisplaySummary(currentAccount);
  }
});

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(curr => curr > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}Euro`;

  const outcomes = acc.movements
    .filter(curr => curr < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}Euro`;

  const interest = acc.movements
    .filter(curr => curr > 0)
    .map(curr => (curr * acc.interestRate) / 100)
    .filter((curr, i, arr) => {
      console.log(arr);
      return curr >= 1;
    })
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}Euro`;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const movFilter = movements.filter(function (mov) {
  return mov < 0;
});
console.log(movFilter);

const movReduce = movements.reduce((acc, curr) => acc + curr);
console.log(movReduce);

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movment of credit ${i + 1} is ${mov}`);
  } else {
    console.log(`Movment of widrawal${i + 1} is ${Math.abs(mov)}`);
  }
}

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movment of credit ${i + 1} is ${mov}`);
  } else {
    console.log(`Movment of widrawal${i + 1} is ${Math.abs(mov)}`);
  }
});

const eurToUsd = 1.1;
const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `Withdrawal`} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);
