const inputTip = document.getElementById("input-tip");
const tipAmount = document.getElementById("tip-amount");
const tipTotal = document.getElementById("tip-total");

inputTip.addEventListener("input", function () {
  let customTip = inputTip.value;

  tipTotal.textContent = customTip;
});

const btnInputs = document.querySelectorAll(".btn");

btnInputs.forEach((btn) => {
  btn.addEventListener("click", function () {
    let value = Number(btn.value);
    console.log(value);
  });
});
