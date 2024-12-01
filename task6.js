const divideAndSort = (number) => {
  let stringNumber = String(number);
  let result = stringNumber
    .split("0")
    .map((num) => num.split("").sort().join(""))
    .join("");

  console.log(Number(result));
};

divideAndSort(5956560159466056);
