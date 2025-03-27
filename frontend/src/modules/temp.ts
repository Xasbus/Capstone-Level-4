const tempString = "Hello";
const temp2 = "world";

const addStrings = tempString + temp2;
console.log(addStrings);

const myArray = [0, 1, 2];
const a = myArray[0];
const b = myArray[1];
const c = myArray.length;

const myCar: any = {
  color: "red",
  year: 2024,
  isForSale: true,
};

const x = myCar.color;
const y = myCar.year;
const z = myCar.isForSale;

myCar.color = "blue";
myCar.year = 2020;
myCar.isForSale = false;
myCar.numberOfDoor = 4;
myCar.engine = "v8";

function myfunction(parameter: number, parameter2: string) {
  console.log(parameter);
  console.log(parameter2);
  const value = "Hellow World";
  innerFunct();

  return value;

  function innerFunct() {
    console.log(value);
    console.log("Inside the function");
  }
}
const myValue = myfunction(13, "hi");

const anonFunct = function () {
  console.log("Amazing");
};

const arrowFunction = () => {
  console.log("Arrow function");
};
