// const object = {
//   name: "John",
//   age: 30,
// };
// const str = JSON.stringify(object);
// document.write(str);
// console.log(str);

// const obj = {
//   1: "one",
//   name: "John",
// };
// console.log(obj[1]);
// console.log(obj.name);

// const arr = [1, 2, 3];
// arr.push(10);
// arr.pop();
// arr.unshift(20);
// arr.splice(1, 0, 30);
// console.log(arr);

//typeof defines the type of the variable using that we can check the type of the variable, it is used to check the type of the variable

const checkifobject = (obj) => {
  if (Array.isArray(obj)) {
    return false;
  } else if (typeof obj === "object") {
    return true;
  } else {
    return false;
  }
};
const obj = {
  name: "John",
  age: 30,
};
console.log(checkifobject([1, 2, 3, 4, 5]));
console.log(checkifobject(obj));
console.log(checkifobject([]));

// Example using for...of loop
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}

// Example using forEach loop
arr.forEach((element) => {
  console.log(element);
});

// Example using .map method
const doubledArr = arr.map((element) => element * 2);
console.log(doubledArr);

const arr1 = ["naem", "a", "b"];
for (let i in arr1) {
  console.log(i);
}
for (let i in obj) {
  console.log(i);
}
