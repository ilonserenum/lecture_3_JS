// დავალება:

// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

const sumPositive = (...numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum = numbers[i] + sum;
        }
    }

    return sum;
};

console.log(sumPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));

// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sumAll(...numbers) {
    let sum = 0;

    for (let i = 0; i <= numbers.length - 1; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(sumAll(10, 50, 6, 7, 8, 11, 6, 3, 9));
// ან, რადგან ყველა რიცხვი დადებითია, შეგვიძლია გამოვიყენოთ წინა ფუნქციაც.
console.log(sumPositive(10, 50, 6, 7, 8, 11, 6, 3, 9));

// 3. let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
};

function getName(person) {
    if (person.isloggedin) {
        console.log(`${person.firstname} ${person.lastname}`);
        return person.firstname + " " + person.lastname;
    } else {
        console.log("false");
        return false;
    }
}

getName(user);

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let numbers = [1, 52, 8, 6, -117, 96, 457, 29, 75];
function findMax(nums) {
    let maxNumber = nums[0];

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] > maxNumber) {
            maxNumber = nums[i];
        }
    }
    return maxNumber;
}
findMax(numbers);
console.log(findMax(numbers));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
// თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "this number is even";
    } else {
        return "this number is odd";
    }
}
console.log(isEvenOrOdd(89));
console.log(isEvenOrOdd(6));

// 6. მოცემულია მასივი:
// let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);

// 7. ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი,
// თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

const isAdult = (user) => {
    const year = new Date().getFullYear();

    // User იქნება სრულწლოვანი, თუ მისი ასაკი მეტია ან ტოლია 18.
    return year - user.birthDate >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
};

let user1 = {
    birthDate: 1998,
    name: "Giorgi",
};

let user2 = {
    birthDate: 1990,
    name: "Mari",
};

let user3 = {
    birthDate: 2011,
    name: "Lasha",
};

console.log(isAdult(user1));
console.log(isAdult(user2));
console.log(isAdult(user3));
