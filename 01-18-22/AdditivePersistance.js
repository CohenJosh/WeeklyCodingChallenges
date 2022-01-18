console.log(additivePersistence(1679583));
console.log(additivePersistence(123456));
console.log(additivePersistence(6));
console.log(multiplicativePersistence(77));
console.log(multiplicativePersistence(123456));
console.log(multiplicativePersistence(4));

function additivePersistence(num){
  if (num < 10){
    return 0; 
  }
  
  let sum = 0;
  let str = num + '';
  for (let i = 0; i < str.length; i++){
    sum += str[i] - 0;
  }
  
  return 1 + additivePersistence(sum);
}

function multiplicativePersistence(num){
  if (num < 10){
    return 0; 
  }
  
  let prod = 1;
  let str = num + '';
  for (let i = 0; i < str.length; i++){
    prod *= str[i] - 0;
  }
  
  return 1 + multiplicativePersistence(prod);
}