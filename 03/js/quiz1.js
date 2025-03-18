let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/* for문 */
document.write(`for문<br>`);
for ( let i = 0; i < numbers.length; i++){
  if(numbers[i] > 10) {
    document.write(`${numbers[i]}, `);
  }  
};
document.write(`<br><br>`);

/* forEach문 */
document.write(`forEach문<br>`);
numbers.forEach(function(number){
  if(number > 10) {
    document.write(`${number}, `);
  }  
});
document.write(`<br><br>`);

/* forEach, 화살표 함수 */
document.write(`forEach, 화살표 함수<br>`);
numbers.forEach(number => {
  if(number > 10) {
    document.write(`${number}, `);
  }  
});
document.write(`<br><br>`);

/* for...in문 */
document.write(`for...in문<br>`);
for (number in numbers){
  /* 주의: 이때 number는  value가 아니라 key 입니다! */
  if(numbers[number] > 10) {
    document.write(`${numbers[number]}, `);
  }  
};
document.write(`<br><br>`);

/* for...of문 */
document.write(`for...of문<br>`);
for (let number of numbers){
  if (number > 10) {
    document.write(`${number}, `);
  }
};