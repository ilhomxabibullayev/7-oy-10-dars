function App() {

  // 1

  let arrNumber: number[] = [1, 2, 3, 4, 5];
  let reversedArr = [...arrNumber].reverse();

  console.log(reversedArr);

  console.log(arrNumber);

  // 2

  let str: string = 'hello';
  let upperStr: string = str.toUpperCase();

  console.log(upperStr);

  // 3

  let arrNumber2: number[] = [1, 2, 3];
  arrNumber2.push(4);

  console.log(arrNumber2);

  // 4

  let arrNumber3: number[] = [7, 8, 9];
  let length = arrNumber3.length;

  console.log(length);

  // 5

  let arrString: string[] = ['hello world'];
  arrString[0] = 'hello javascript';

  console.log(arrString);

  // 6

  let arrNumber5: number[] = [4, 5, 6];
  let firstElement = arrNumber5[0];

  console.log(firstElement);

  // 7

  let word: string = 'uzbekistan';
  let length2 = word.length;

  console.log(length2);

  // 8

  let arrNumber6: number[] = [2, 3, 4];
  arrNumber6.unshift(1);

  console.log(arrNumber6);

  // 9

  let str2: string = 'JAVASCRIPT';
  let lowerStr: string = str2.toLowerCase();

  console.log(lowerStr);

  // 10

  let fruits: string[] = ['apple', 'banana', 'cherry'];
  let result = fruits.join(' ');

  console.log(result);

  // 1

  const arr = [5, 2, 9, 1, 7];
  arr.sort((a, b) => a - b);

  console.log(arr);

  // 2

  const input = 'apple, banana, cherry';
  const output = [input];

  console.log(output);

  // 3

  const arr2 = [1, 2, 3, 4, 5];
  const valueToFind = 3;
  const result2 = arr2.includes(valueToFind);

  console.log(result2);

  // 4

  let strString: string = "JavaScript";
  let result3: string = strString.substring(0, 4);

  console.log(result3);

  // 5

  let numbers: number[] = [1, 2, 3, 4, 5, 6];
  let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

  console.log(evenNumbers);

  // 6

  let strString2: string = "hello world";
  let searchWord: string = "world";
  let containsWord: boolean = strString2.includes(searchWord);

  console.log(containsWord);

  // 7

  let arrNumber7: number[] = [10, 20, 30, 40, 50];
  let searchElement: number = 30;
  let index: number = arrNumber7.indexOf(searchElement);

  console.log(index);

  // 8

  let arr3: number[] = [1, 2, 3, 4, 5];
  let arr4: number[] = [1, 3];
  let intersection: number[] = arr3.filter(value => arr4.includes(value));

  console.log(intersection);

  // 9

  let arrNumber8: number[] = [5, 10, 15];
  let sum: number = arrNumber8.reduce((acc, currentValue) => acc + currentValue, 0);

  console.log([sum]);

  // 11

  let arrNumber9: number[] = [1, 5, 3, 9, 2];
  let maxElement: number = Math.max(...arrNumber9);

  console.log([maxElement]);


  return (
    <>

    </>
  )
}

export default App
