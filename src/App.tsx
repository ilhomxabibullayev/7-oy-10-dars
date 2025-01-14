function App() {

  // 1

  let arr: number[] = [1, 2, 3, 4, 5];
  let reversedArr = [...arr].reverse();
  console.log(reversedArr);
  console.log(arr);

  // 2

  let str: string = 'hello';
  let upperStr: string = str.toUpperCase();
  console.log(upperStr);

  // 3

  let arr2: number[] = [1, 2, 3];
  arr2.push(4);
  console.log(arr2);

  // 4

  let arr3: number[] = [7, 8, 9];
  let length = arr3.length;
  console.log(length);

  // 5

  let arr4: string[] = ['hello world'];
  arr4[0] = 'hello javascript';
  console.log(arr4);

  // 6

  let arr5: number[] = [4, 5, 6];
  let firstElement = arr5[0];
  console.log(firstElement);

  // 7

  let word: string = 'uzbekistan';
  let length2 = word.length;
  console.log(length2);

  // 8

  let arr6: number[] = [2, 3, 4];
  arr6.unshift(1);
  console.log(arr6);

  // 9

  let str2: string = 'JAVASCRIPT';
  let lowerStr: string = str2.toLowerCase();
  console.log(lowerStr);

  // 10

  let fruits: string[] = ['apple', 'banana', 'cherry'];
  let result = fruits.join(' ');
  console.log(result);

  return (
    <>

    </>
  )
}

export default App
