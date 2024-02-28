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
 balance.innerText = calculatedBalance;
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
 remainingBalance.innerText = calculatedRemainingBalance;

})