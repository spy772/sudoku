import './App.css';
// import { Square } from './Square';
// import { Board } from './Board';
import { Game } from './Game';
import { React, useState, useEffect } from 'react';

function App() {
  /* const [array, setArray] = useState([8, 3, 5, 10, 23, 1, 6, 34, 36]);

  function bubbleSort(array) {
    let wasSwapped = true;
    let num = array;
    while (wasSwapped) {
      wasSwapped = false;
      for (var i = 0; i < num.length; i++) {
        if (num[i] < num[i+1]) {
          let temp = num[i];
          num[i] = num[i+1];
          num[i+1] = temp;
          wasSwapped = true;
        }
      }
    }
    return num;
  }

  function insertionSort(array) {
    let num = array.length;
        for (let i = 1; i < num; i++) {
            let current = array[i];
            let check = i-1; 
            while ((check > -1) && (current < array[check])) {
                array[check+1] = array[check];
                check--;
            }
            array[check+1] = current;
        }
    return array;
}

function quickSortRecursive(array, start, end) {
  if (start >= end) {
      return;
  } 

  let index = partition(array, start, end);
  
  quickSortRecursive(array, start, index - 1);
  quickSortRecursive(array, index + 1, end);
}

function partition(array, start, end){
  const pivotValue = array[end];
  let pivotIndex = start; 
  for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
      }
  }
  
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]] 
  return pivotIndex;
};

function sumToFor(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

function sumToRec(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num + sumToRec(num-1);
    num--;
  }
};

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num-1);
    num--;
  }
};


console.log(sumToRec(36));
console.log(factorial(6));

  const handleClick = () => {
    setArray((prevArray) => {
      return quickSortRecursive(prevArray, 0, prevArray.length - 1);
    })
  } 

  function print() {
    quickSortRecursive(array, 0, array.length - 1)
    console.log(array)
  } */

  useEffect(() => {
   // console.log('I was re-rendered')
  }); 

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Game />
           {/*<p>This is my array {array}.</p>
           <button onClick={handleClick}>Filler</button>
           {/*<button onClick={print}>Print state</button>
           <button onClick={Array}>Click me original</button>*/}
        </div>
      </header>
    </div>
  );
}

export default App;
