document.getElementById('calculation-button').addEventListener('click', function () {
 //expense 1
 const expense1 = document.getElementById('food-input').value;
 console.log(expense1)
 const expense1Convert = parseFloat(expense1);



 // expense 2
 const expense2 = document.getElementById('rent-input').value;
 const expense2Convert = parseFloat(expense2);
 console.log(expense2)


 //expense 3
 const expense3 = document.getElementById('clothes-input').value;
 const expense3Convert = parseFloat(expense3);
 console.log(expense3)

 // total expense
 const totalExpense = document.getElementById('total-expense');
 // const totalExpenseText = totalExpense.innerText;
 // const totalExpenseConvert = parseFloat(totalExpenseText);

 //Calculate total expense
 const addAllExpenses = expense1Convert + expense2Convert + expense3Convert;

 console.log(addAllExpenses)

 // set the calculation value to the total expense
 totalExpense.innerText = addAllExpenses;
 // console.log(totalExpense);

 //income 
 const income = document.getElementById('income-input').value;
 const incomeConvert = parseFloat(income);

 //balance 
 const balance = document.getElementById('balance');
 // const balanceText = balance.innerText;
 // const balanceTextConvert = parseFloat(balanceText);

 //balance calculation 
 const calculatedBalance = incomeConvert - addAllExpenses;
 balance.innerText = calculatedBalance;

})

// add js to save button
document.getElementById('save-button').addEventListener('click', function () {
 
 //saving percentage input
 const savingPercentage = document.getElementById('saving-percentage-input').value;
 const savingPercentageConvert = parseFloat(savingPercentage);

 

})