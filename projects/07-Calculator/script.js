let equal_presses = 0;
let button_input = document.querySelectorAll(".input-Btn");
let input = document.getElementById("displayValue");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

Window.onload = function () {
  display.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_presses == 1) {
      input.value = "";
      equal_presses = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_presses = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    input.value = "Error";
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
