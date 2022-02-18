function calculateMoney(){
    document.getElementById('calculate-button').addEventListener('click',function(){
    
    
        //    get input from income input 


       const incomeInput = document.getElementById('income-input');
       const incomeTotalText = incomeInput.value;
       const incomeTotal = parseInt(incomeTotalText);

       //    get input from food input 
       
        const foodInput = document.getElementById('food-input');
        const foodCostText = foodInput.value;
        const foodCost = parseInt(foodCostText);

       //    get input from rent input 

        const rentInput= document.getElementById('rent-input');
        const rentCostText = rentInput.value;
        const rentCost = parseInt(rentCostText);

        //    get input from clothes input 

        const clothInput = document.getElementById('cloth-input');
        const clothCostText = clothInput.value;
        const clothCost = parseInt(clothCostText);
        
        
        // calcullate total expenses 

        const totalExpenseValue = document.getElementById('total-expenses');
        const totalExpenseText = totalExpenseValue.innerText;
        const totalExpenses = parseInt(totalExpenseText);
        const subTotalExpense =  foodCost + rentCost + clothCost;
        totalExpenseValue.innerText = subTotalExpense;


        // income and expense total error handle 
        const overExpeses = document.getElementById('over-expenses');

        if(incomeTotal < subTotalExpense){
            overExpeses.style.display = "block"; 
        }

        //  calculate balence 

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

    //  get income input 

    const incomeInput = document.getElementById('income-input');
    const incomeTotalText = incomeInput.value;
    const incomeTotal = parseInt(incomeTotalText);
     
    // get balence value 

    const subTotalBalence = document.getElementById('balance');
    const balanceTex = subTotalBalence.innerText;
    const subBalence = parseInt(balanceTex);
    
    // set save value 
    const saveInput = document.getElementById('save');
    const saveText = saveInput.value;
    const savePecentage = parseInt(saveText);
     
     


    const saviningValue = document.getElementById('saving-amount');
    const saviningValueText =saviningValue.innerText;
    const savingAmount = parseInt(saviningValueText);

    const saving = incomeTotal*savePecentage/100;
    saviningValue.innerText= saving

    //  set remaining balance 
    const remainingValue = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingValue.innerText;
    const remainingBalenceValue = parseInt(remainingBalanceText);
    const remainingBalence =  balance.innerText-saving;
    remainingValue.innerText = remainingBalence;


    // error handle 

    const saveUnable = document.getElementById('save-unsucces');
    const saveEnable = document.getElementById("save-succes");

      if (remainingBalence <saving){
        
        saveUnable.style.display = 'block';
        saveEnable.style.display = 'none';
      }
      else{
        
        saveEnable.style.display = 'block';
        saveUnable.style.display = 'none';
      }
   


     
      
     calculateMoney();

    })
    
 }


 calculateRemainingBalence();
