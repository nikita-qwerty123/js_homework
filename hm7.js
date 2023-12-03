//part 1
function myIsNaN(x) {
    if (typeof x !== 'number') {
      return false;
    }
  
    return x !== x;
  }
  
console.log(myIsNaN(" "));
console.log(myIsNaN(NaN));

//part2
function pad(str, char, count, isStart) {

    const currentLength = str.length;
  
    if (count <= currentLength) {
      return str;
    }
  
    const padCount = count - currentLength;
    const padding = char.repeat(padCount);
  
    return isStart ? padding + str : str + padding;
  }
  console.log(pad('qwerty', '+', 9, true));  
  console.log(pad('qwerty', '+', 9, false));

  //part3
  function checkTheory(count) {

    let doubleNumber = 0;
    let unpairedNumber = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (1001 - 100) + 100);
  
      if (randomNum % 2 === 0) {
        doubleNumber++;
      } else {
        unpairedNumber++;
      }
    }
  
    const totalNumbers = doubleNumber + unpairedNumber;
    const doubleNumberPercentage = (doubleNumber / totalNumbers) * 100;
    const unpairedNumberPercentage = (unpairedNumber / totalNumbers) * 100;
  
    console.log('Кількість згенерованих чисел:', totalNumbers);
    console.log('Парних чисел:', doubleNumber);
    console.log('Непарних чисел:', unpairedNumber);
    console.log('Відсоток парних до непарних:', doubleNumberPercentage.toFixed(2) + '% : ' + unpairedNumberPercentage.toFixed(2) + '%');
  }

  checkTheory(1000); 