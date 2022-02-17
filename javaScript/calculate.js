function calculateMoney(){
    document.getElementById('calculate-button').addEventListener('click',function(){
       
       const incomeInput = document.getElementById('income-input');
       const incomeTotalText = incomeInput.value;
       const incomeTotal = parseInt(incomeTotalText);
       
        const foodInput = document.getElementById('food-input');
        const foodCostText = foodInput.value;
        const foodCost = parseInt(foodCostText);


        const rentInput= document.getElementById('rent-input');
        const rentCostText = rentInput.value;
        const rentCost = parseInt(rentCostText);


        const clothInput = document.getElementById('cloth-input');
        const clothCostText = clothInput.value;
        const clothCost = parseInt(clothCostText);

        const totalExpenseValue = document.getElementById('total-expenses');
        const totalExpenseText = totalExpenseValue.innerText;
        const totalExpenses = parseInt(totalExpenseText);


        const subTotalExpense =  foodCost + rentCost + clothCost;
        totalExpenseValue.innerText = subTotalExpense;


        const subTotalBalence = document.getElementById('balance');
        const balanceTex = subTotalBalence.innerText;
        const subBalence = parseInt(balanceTex);

        const balance = incomeTotal-subTotalExpense;
        
        subTotalBalence.innerText =balance;

       
        
        

        

    })
}

 calculateMoney()



 function calculateRemainingBalence(){


 document.getElementById('save-button').addEventListener('click',function(){

     
    const incomeInput = document.getElementById('income-input');
    const incomeTotalText = incomeInput.value;
    const incomeTotal = parseInt(incomeTotalText);

    const subTotalBalence = document.getElementById('balance');
    const balanceTex = subTotalBalence.innerText;
    const subBalence = parseInt(balanceTex);
    
    
    const saveInput = document.getElementById('save');
     const saveText = saveInput.value;
     const savePecentage = parseInt(saveText);
     
     


     const saviningValue = document.getElementById('saving-amount');
     const saviningValueText =saviningValue.innerText;
     const savingAmount = parseInt(saviningValueText);

     const saving = incomeTotal*savePecentage/100;
     saviningValue.innerText= saving


     const remainingValue = document.getElementById('remaining-balance');
     const remainingBalanceText = remainingValue.innerText;
     const remainingBalenceValue = parseInt(remainingBalanceText);
     const remainingBalence = subBalence-saving;
      
     calculateMoney();

    })
    
 }


 calculateRemainingBalence();
