document.getElementById('calculation-button').addEventListener('click', function () {
  //expense 1
  const expense1 = document.getElementById('food-input').value;
  const expense1Convert = parseFloat(expense1);
  // expense 2
  const expense2 = document.getElementById('rent-input').value;
  const expense2Convert = parseFloat(expense2);
  //expense 3
  const expense3 = document.getElementById('clothes-input').value;
  const expense3Convert = parseFloat(expense3);
  // total expense
  const totalExpense = document.getElementById('total-expense');
  //Calculate total expense
  const addAllExpenses = expense1Convert + expense2Convert + expense3Convert;
  // set the calculation value to the total expense
  totalExpense.innerText = addAllExpenses;
  //income 
  const income = document.getElementById('income-input').value;
  const incomeConvert = parseFloat(income);
  //balance 
  const balance = document.getElementById('balance');
  //balance calculation 
  const calculatedBalance = incomeConvert - addAllExpenses;
  
  if(incomeConvert > addAllExpenses)
  {balance.innerText = calculatedBalance;
  }else{
    const errorMessage = "Error: Expenses Exceed Income! Please review and adjust your financial data to ensure that expenses are within the budgeted income.";
    alert(errorMessage);

    totalExpense.style.borderColor = "red";
    totalExpense.style.borderWidth = "2px";
    totalExpense.style.borderStyle = "solid";
  }
  errorMessage();
  // error2();  

})
// add js to save button
document.getElementById('save-button').addEventListener('click', function () {
  //saving percentage input
  const savingPercentage = document.getElementById('saving-percentage-input').value;
  const savingPercentageConvert = parseFloat(savingPercentage);
  const percentC = 100;
  //saving amount
  const savingAmount = document.getElementById('saving-amount');
  // 1. income 
  const income = document.getElementById('income-input').value;
  const incomeConvert = parseFloat(income);
  // 2. calculate saving amount and set 
  const calculateSavingAmount = incomeConvert * (savingPercentageConvert / percentC)
  
  savingAmount.innerText = calculateSavingAmount;

  // 3. remaining balance
  const balanceText = document.getElementById('balance').innerText;
  const balanceTextConverted = parseFloat(balanceText);
  const remainingBalance = document.getElementById('remaining-balance');
  const remainingBalanceText = remainingBalance.innerText;
  const remainingBalanceTextConverted = parseFloat(remainingBalanceText);
  const calculatedRemainingBalance = balanceTextConverted - calculateSavingAmount;
  if(calculatedRemainingBalance > 0){
    remainingBalance.innerText = calculatedRemainingBalance;
  }
  else{
    const errorMessage = "Error: Insufficient Balance! Your savings amount exceeds the available balance. Please review and adjust your transaction to ensure the savings amount is within the available balance.";
    alert(errorMessage);

    savingAmount.style.borderColor = "red";
    savingAmount.style.borderWidth = "2px";
    savingAmount.style.borderStyle = "solid";
  }

  errorMessage();

})

// show the error message function
function errorMessage() {
  const inputValues = document.getElementsByTagName("input");

  for (const input of inputValues) {
    // Check if the value is not a number
    if (isNaN(input.value)) {
      // Show error message
      const errorMessage = "Please put a number";
      alert(errorMessage);

      // Change input field color to red
      input.style.borderColor = "red";
      input.style.borderWidth = "2px";
      input.style.borderStyle = "solid";

      // Stop further processing for this input
      return;
    } else if (input.value < 0) {
      const errorMessage = "Negative value not accepted, put a positive value.";
      alert(errorMessage);

      // Change input field color to red
      input.style.borderColor = "red";
      input.style.borderWidth = "2px";
      input.style.borderStyle = "solid";

      // Stop further processing for this input
      return;
    }
    else {
      // If the input value is a number, reset styling
      // input.style.borderColor = "green"; 
      // input.style.borderWidth = "2px"; 
      // input.style.borderStyle = "solid"; 
    }
  }
}

// const inputValues = document.getElementsByTagName("input");
// const button = document.getElementById("calculation-button");

// button.classList.add("pointer-events-none") = true; //setting button state to disabled
// button.classList.add("opacity-50") = true; //setting button state to disabled
// for (const input of inputValues){
//   input.addEventListener("change", stateHandle);
//   function stateHandle() {
//     if (input.value === "") {
//         button.classList.add("pointer-events-none") = true; //button remains disabled
//     } else {
//       button.classList.add("pointer-events-none") = false; //button is enabled
//     }
// }
// }

const inputValuesSave = document.getElementById("saving-percentage-input");
const saveButton = document.getElementById("save-button");

 saveButton.classList.add("pointer-events-none", "opacity-50"); // setting button state to disabled


  inputValuesSave.addEventListener("change", stateHandl);

  function stateHandl() {
    if (inputValuesSave.value === "") {
    saveButton.classList.add("pointer-events-none", "opacity-50"); // button remains disabled
    } else {
      saveButton.classList.remove("pointer-events-none", "opacity-50"); // button is enabled
    }
  }


const inputValues = document.getElementsByTagName("input");
const button = document.getElementById("calculation-button");

// Initial state: Disable button
button.classList.add("pointer-events-none", "opacity-50");

for (const input of inputValues) {
  input.addEventListener("change", stateHandle);
}

function stateHandle() {
  // Check if the first 4 inputs have values
  const firstFourInputs = Array.from(inputValues).slice(0, 4);
  const allInputsFilled = firstFourInputs.every((input) => input.value.trim() !== "");

  // Enable or disable the button based on the condition
  if (allInputsFilled) {
    button.classList.remove("pointer-events-none", "opacity-50"); // Enable button
  } else {
    button.classList.add("pointer-events-none", "opacity-50"); // Disable button
  }
}




// function error2() {
//   const totalExpense = document.getElementById('total-expense').innerText
//   const totalExpenseConverted = parseFloat(totalExpense);
//   const income = document.getElementById('income-input').value;
//   const incomeConverted = parseFloat(income);
//   if (totalExpenseConverted > incomeConverted){
//     const errorMessage = "Error: Expenses Exceed Income! Please review and adjust your financial data to ensure that expenses are within the budgeted income.";
//     alert(errorMessage);

//     totalExpense.style.borderColor = "red";
//     totalExpense.style.borderWidth = "2px";
//     totalExpense.style.borderStyle = "solid";
  
//   return;



//   }
  

// }



// //saving amount and balance
// const balance = document.getElementById('balance').innerText
// const balanceConverted = parseFloat(balance);
// const savingAmount = document.getElementById('saving-amount').innerText
// const savingAmountConverted = parseFloat(savingAmount)