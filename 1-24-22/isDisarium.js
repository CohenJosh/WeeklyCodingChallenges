console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(518));
console.log(isDisarium(544));
console.log(isDisarium(8));
console.log(isDisarium(466));


function isDisarium(num){
  let ans = 0;
  let numStr = num + '';
  for(let i = 0; i < numStr.length; i++){
    let currDigit = numStr.substring(i,i+1) - 0;
    ans += currDigit**(i+1);
  }

  return ans==num;
}