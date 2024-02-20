const inputTip = document.getElementById("input-tip");
const billTip = document.getElementById("billInput");
const tipAmount = document.getElementById("tip-amount");
const tipTotal = document.getElementById("tip-total");
const peopleNum = document.getElementById("pplNum");
const resetBtn = document.getElementById("reset");
const btnInputs = document.querySelectorAll(".btn");
const zero = document.querySelector(".zero");
let customTip = 0;
let billValue;
let numOfPeople = 1;

resetBtn.addEventListener("click", function () {
  peopleNum.value = "";
  inputTip.value = "";
  billTip.value = "";
  tipTotal.innerHTML = "$0.00";
  tipAmount.innerHTML = "$0.00";
  zero.style.visibility = "hidden";
});

billTip.addEventListener("input", function () {
  billValue = billTip.value;
  totalAmount();
});

inputTip.addEventListener("input", function () {
  customTip = inputTip.value;
  totalAmount();
});

peopleNum.addEventListener("input", function () {
  numOfPeople = peopleNum.value;
  totalAmount();
});

btnInputs.forEach((btn) => {
  btn.addEventListener("click", function () {
    customTip = Number(btn.value);
    totalAmount();
  });
});

function totalAmount() {
  if (numOfPeople == 0) {
    zero.style.visibility = "visible";
    tipTotal.innerHTML = "$0.00";
    tipAmount.innerHTML = "$0.00";
  } else {
    zero.style.visibility = "hidden";
    let result = ((billValue / 100) * customTip) / numOfPeople;
    let resultTotal = (billValue / 100) * customTip;
    resultTotal =
      (Number(billValue) + (billValue / 100) * customTip) / numOfPeople;

    tipAmount.textContent = `$${result.toFixed(2)}`;
    tipTotal.textContent = `$${resultTotal.toFixed(2)}`;
  }
}
