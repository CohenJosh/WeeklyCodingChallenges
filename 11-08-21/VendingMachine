const productList = [{name:'Crackers', price:200}, 
                   {name:'Chips', price:150}, 
                   {name:'Soda', price:250}, 
                   {name:'Juice', price:175}, 
                   {name:'Candy', price:100}];
                   
const coins = [500, 200, 100, 50, 20, 10];

vendingMachine(1090, 1);
vendingMachine(200, 7);
vendingMachine(100, 3);


function vendingMachine(payment, prodNumber){
  if (prodNumber > productList.length || prodNumber <= 0){
    console.log("Enter a valid product number");
    return;
  }
  if (payment < productList[prodNumber-1].price){
    console.log("Not enough money for this product");
    return;
  }
  
  console.log("Product: " + productList[prodNumber-1].name + ", Change: " + 
              getChange(payment-productList[prodNumber-1].price, []));
}

function getChange(remainingChange, changeArray){
  if (remainingChange == 0) {
    return [];
  }
  if(coins.includes(remainingChange)){
    changeArray.push(remainingChange);
    return changeArray;
  }
  
  for(let i = 0; i < coins.length; i++){
    if (coins[i] < remainingChange) {
      changeArray.push(coins[i]);
      return getChange(remainingChange - coins[i], changeArray);
    }
  }
}
