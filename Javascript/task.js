//ES6
console.log("Cake shop");
//add cake: const
const cakes = [
  "Butter Cake",
  "Pound Cake",
  "Sponge Cake",
  "Genoise Cake",
  "Biscuit Cake",
  "Angel Food Cake",
  "Baked Flourless Cake",
];
console.log(cakes);

//available: Arrow Functions, let, for
a = () => {
  let available = "Is available: ";
  for (let c of cakes) {
    available += c + ", ";
  }
  return available;
};
console.log(a());

//cheese cake ingredients: map, for each, arrow function
const ingredients = new Map([
  ["biscuits", 200],
  ["butter", 200],
  ["cheese cream", 400],
  ["strawberries", 200],
  ["sugar", 200],
  ["raspberry", 100],
]);
console.log("Cheesecake ingredients:");
ingredients.forEach((value, key) => {
  console.log(key + " " + value + " grams");
});
ingredients.delete("raspberry");

//discount for 5 cakes: default parameter
function discount(price, disc = 5) {
  return 5 * price - (disc / 100) * 5 * price;
}
console.log("Discount for 5 cakes: " + discount(10) + " RON.");

//cakes sold in one week: rest parameter
function sold(...cakes) {
  let sum = 0;
  for (let c of cakes) sum += c;
  return sum;
}
let soldCakes = sold(20, 30, 50, 10, 80, 100, 70);
console.log("Cakes sold in one week: " + sold(soldCakes) + " pieces");

//cakes sold every day in two weeks : spread oparator: expand
let soldCakes1 = [20, 30, 50, 10, 80, 100, 70];
let soldCakes2 = [...soldCakes1, 54, 23, 18, 77, 69, 56, 80];
console.log("Cakes sold every day in two weeks: " + soldCakes2);

//adress cake shop: object, string interpolation
const cakeShop = {
  name: "Cake Shop ",
  street: " Bulevardul Saturn",
  number: " 36",
  city: " Brasov",
};
console.log(
  `Name is: ${cakeShop.name}and complete adress is: ${cakeShop.street},${cakeShop.number},${cakeShop.city}`
);
const cakeShop2 = {
  name: "Cake Castle ",
  street: " Ion Mihalache",
  number: " 36",
  city: " Topoloveni",
};
//iterate object
Object.values(cakeShop).forEach((value) => {
  console.log(`${value}`);
});

//shallow copy: assign method
Object.assign(cakeShop, cakeShop2);
console.log(cakeShop);

//deep copy: iterating each object porperty
let deepShop = {};
for (let adress in cakeShop) {
  if (cakeShop.hasOwnProperty(adress)) {
    deepShop[adress] = cakeShop[adress];
  }
}
console.log(`Name for deepShop is: ${deepShop.name}`);

//accessor​ methods
//1 - concat
const price = [10, 8, 6, 9, 11, 7];
const cakePrice = cakes.concat(price);
console.log(cakePrice);
//2 - filter, string.startsWith
const cakeOnly = cakes.filter((element) => element.startsWith("Biscuit"));
console.log("Filter " + cakeOnly);
//3 - includes
const ingredientsBonus = cakes.includes("Pound Cake");
console.log("Incldes" + ingredientsBonus);
//4- indexOf
const dayMostCakeSold = soldCakes1.indexOf(100);
console.log("IndexOf " + dayMostCakeSold);
//5- join
const daysWithoutSales = soldCakes2.join(0);
console.log("Join " + daysWithoutSales);
//6- slice
const noButterCake = cakes.slice(1);
console.log("Slice " + noButterCake);

//array itaration
//1 - reduce
const sum = (previousValue, currentValue) => previousValue + currentValue;
console.log("Reduce " + soldCakes2.reduce(sum));
//2- find
const recordSold = soldCakes1.find((sold) => sold > 90);
console.log("Find " + recordSold);
//3 - from
const double = Array.from(soldCakes1, (x) => x * 2);
console.log("From " + double);
//4- keys
const keys = Object.keys(cakeShop);
console.log("Keys: " + keys);

//mutator methods
//1- unshift
var plusCake = cakes.unshift("Tiramisu");
console.log("Unshift: " + plusCake);
//2- shift
var fisrtCake = cakes.shift();
console.log("Shift: " + fisrtCake);
//3- push, pop
cakes.push("Banana Bread", "Icecream");
console.log("Push: " + cakes);
console.log("Pop: " + cakes.pop());
//4- reverse
console.log("Reverse: " + soldCakes1.reverse());
//5- sort
console.log("Sort: " + cakes.sort());
//6- splice
cakes.splice(1, 0, "Tiramisu");
console.log("Splice " + cakes);

//callback
function tiramisuStock(callback, errorCallback) {
  let noStockTiramisu = true;
  if (noStockTiramisu) {
    errorCallback({
      name: "No stock",
      message: "- unavailable",
    });
  } else if ((noStockTiramisu = false)) {
    errorCallback({
      name: "Tiramisu is ",
      message: "available",
    });
  } else {
    callback("request tiramisu");
  }
}
tiramisuStock(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

//promises
function cheesecakeStock() {
  let noStock = false;
  return new Promise((resolve, reject) => {
    if (noStock) {
      reject({
        name: "No stock cheesecake",
        message: " - unavailable",
      });
    } else if (!noStock) {
      reject({
        name: "Cheesecake is",
        message: "- available",
      });
    } else {
      resolve("request cheesecake");
    }
  });
}

cheesecakeStock()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//async, await
function makeCake(cake) {
  return new Promise((resolve, reject) => {
    console.log(`Make ${cake}`);
    if (cake === "Banana Bread") {
      resolve("it's good");
    } else {
      reject("Make another cake");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`More cake because ${response}`);
  });
}
async function progressCake() {
  try {
    const response = await makeCake("Lava Cake");
    console.log("Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
progressCake();

//closure
function addPriceIncrease(firstPrice) {
  return function (addition) {
    return firstPrice + addition;
  };
}
var firstPrice1 = addPriceIncrease(10);
console.log("the price after the increase: " + firstPrice1(5));
