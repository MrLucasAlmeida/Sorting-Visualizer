import React from 'react';
import './Settings.css';
import { useEffect } from 'react';

function Settings({ sortArray, setSortArray }) {



    useEffect(() => {
        generateNewArray(25);
    },[]);



    const generateNewArray = (size) => {
        const newArray = Array(size).fill(0).map((x, index) => {
            return index+2;
        });
        console.log('generated new array');
        setSortArray(shuffle(newArray));
    }

    const handleSliderChange = () => {
        const slider = document.getElementById("myRange");
        console.log(slider.value);
        generateNewArray(Number(slider.value));
        
    }
    



    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }







    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



    function handleSortSelection() {
        const yourSelect = document.getElementById('select-dropdown');
        const sortSelection = yourSelect.options[yourSelect.selectedIndex].value;
        console.log(sortSelection);
        switch (sortSelection) {
            case 'bubbleSort':
                bubbleSort(sortArray);
                break;
            case 'insertionSort':
                insertionSort(sortArray);
                break;
            case 'selectionSort':
                selectionSort(sortArray);
                break;
            case 'quickSort':
                quickSort(sortArray, 0, sortArray.length - 1);
                break;
            case 'mergeSort':
                mergeSort(sortArray,sortArray,0,sortArray.length-1);
                break;
            case 'heapSort':
                heapSort(sortArray);
                break;
            case 'countingSort':
                countingSort(sortArray);
                break;
            case 'radixSort':
                radixSort(sortArray);
                break;
            case 'bucketSort':
                bucketSort(sortArray);
                break;
            case 'shellSort':
                shellSort(sortArray);
                break;
            case 'cocktailSort':
                cocktailSort(sortArray);
                break;
            case 'combSort':
                combSort(sortArray);
                break;
            case 'gnomeSort':
                gnomeSort(sortArray);
                break;
            case 'cycleSort':
                cycleSort(sortArray);
                break;
            case 'pancakeSort':
                pancakeSort(sortArray);
                break;
            default:
                break;
        }
    }



    // create a quicksort function that updates the sortArray state
    async function quickSort(array, start, end) {
        if (start >= end) {
            return;
        }
        let index = await partition(array, start, end);
        await quickSort(array, start, index - 1);
        await quickSort(array, index + 1, end);
    }
    // define partition function
    async function partition(array, start, end) {
        let pivotIndex = start;
        let pivotValue = array[end];

        for (let i = start; i < end; i++) {
            if (array[i] < pivotValue) {
                await sleep(10);
                [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
                setSortArray([...array]);
                pivotIndex++;
            }
        }
        await sleep(10);
        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
        setSortArray([...array]);
        return pivotIndex;
    }

    async function mergeSort(array,currArray,start, end) {
        if (currArray.length <= 1) {
            return currArray;
        }
        const middle = Math.floor(currArray.length / 2);
        const left = currArray.slice(0, middle);
        const right = currArray.slice(middle);
        await sleep(10);
        return await merge(
            array,
            start,
            await mergeSort(array,left, start, middle-1),
            await mergeSort(array,right,middle,end)
        );
    }
    async function merge(array, start, arr1, arr2) {
        let p1 = 0;
        let p2 = 0;
        let curr = start;

        while (p1 < arr1.length && p2 < arr2.length) {
            // merges
            if (arr1[p1] < arr2[p2]) {
                array[curr] = arr1[p1];
                curr++;
                p1++;
            } else if (arr2[p2] < arr1[p1]) {
                array[curr] = arr2[p2];
                curr++;
                p2++;
            }
            setSortArray([...array]);
            await sleep(10);
            
        }

        // updates any leftover values
        while (p1<arr1.length) {
            array[curr] = arr1[p1];
            curr++;
            p1++;
        }
        while (p2<arr2.length) {
            array[curr] = arr2[p2];
            curr++;
            p2++;
            
        }
        await sleep(10);
        setSortArray([...array]);
        // update state
        
        // return slice
        return array.slice(start,start+arr1.length+arr2.length);
    }
    
    




    // heap sort function
    async function heapSort(array) {
        let n = array.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(array, n, i);
        }
        for (let i = n - 1; i > 0; i--) {
            await sleep(10);
            [array[0], array[i]] = [array[i], array[0]];
            setSortArray([...array]);
            await heapify(array, i, 0);
        }
    }

    async function heapify(array, n, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < n && array[l] > array[largest]) {
            largest = l;
        }
        if (r < n && array[r] > array[largest]) {
            largest = r;
        }
        if (largest != i) {
            await sleep(100);
            [array[i], array[largest]] = [array[largest], array[i]];
            setSortArray([...array]);
            await heapify(array, n, largest);
        }
    }

    // bubble sort function
    async function bubbleSort(array) {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    await sleep(10);
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    setSortArray([...array]);
                }
            }
        }
    }



    // selection sort
    async function selectionSort(array) {
        let n = array.length;
        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            await sleep(30);
            [array[i], array[min]] = [array[min], array[i]];
            setSortArray([...array]);
        }
    }
    

    // insertion sort
    async function insertionSort(array) {
        let n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                await sleep(10);
                array[j + 1] = array[j];
                setSortArray([...array]);
                j = j - 1;
            }
            array[j + 1] = key;
            setSortArray([...array]);
        }
    }


    // counting sort
    async function countingSort(array) {
        let n = array.length;
        let output = new Array(n);
        let count = new Array(200).fill(0);
        for (let i = 0; i < n; i++) {
            count[array[i]]++;
        }
        for (let i = 1; i < 200; i++) {
            count[i] += count[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            output[count[array[i]] - 1] = array[i];
            count[array[i]]--;
        }
        for (let i = 0; i < n; i++) {
            await sleep(30);
            array[i] = output[i];
            setSortArray([...array]);
        }
    }

    

    // radix sort
    async function radixSort(array) {
        let n = array.length;
        let max = Math.max(...array);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await countSort(array, n, exp);
        }
    }
    async function countSort(array, n, exp) {
        let output = new Array(n);
        let count = new Array(10).fill(0);
        for (let i = 0; i < n; i++) {
            count[Math.floor(array[i] / exp) % 10]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
            count[Math.floor(array[i] / exp) % 10]--;
        }
        for (let i = 0; i < n; i++) {
            await sleep(30);
            array[i] = output[i];
            setSortArray([...array]);
        }
    }


    // bucket sort
    async function bucketSort(array) {
        let n = array.length;
        let buckets = new Array(10);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }
        for (let i = 0; i < n; i++) {
            let bucketIndex = Math.floor(array[i] / 10);
            buckets[bucketIndex].push(array[i]);
        }
        for (let i = 0; i < buckets.length; i++) {
            await insertionSortForBucketSort(buckets[i]);
        }
        let index = 0;
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                await sleep(30);
                array[index++] = buckets[i][j];
                setSortArray([...array]);
            }
        }
    }
    // insertion sort for bucket sort
    async function insertionSortForBucketSort(array) {
        let n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                await sleep(10);
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }
    }

    // shell sort
    async function shellSort(array) {
        let n = array.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j;
                for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                    await sleep(10);
                    array[j] = array[j - gap];
                    setSortArray([...array]);
                }
                array[j] = temp;
                setSortArray([...array]);
            }
        }
    }

    // cocktail sort
    async function cocktailSort(array) {
        let n = array.length;
        let swapped = true;
        let start = 0;
        let end = n - 1;
        while (swapped) {
            swapped = false;
            for (let i = start; i < end; i++) {
                if (array[i] > array[i + 1]) {
                    await sleep(10);
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    setSortArray([...array]);
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
            swapped = false;
            end--;

            for (let i = end - 1; i >= start; i--) {
                if (array[i] > array[i + 1]) {
                    await sleep(10);
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    setSortArray([...array]);
                    swapped = true;
                }
            }
            start++;
        }
    }



    // comb sort
    async function combSort(array) {
        let n = array.length;
        let gap = n;
        let shrink = 1.3;
        let swapped = true;
        while (gap > 1 || swapped) {
            gap = Math.floor(gap / shrink);
            if (gap < 1) {
                gap = 1;
            }
            swapped = false;
            for (let i = 0; i + gap < n; i++) {
                if (array[i] > array[i + gap]) {
                    await sleep(10);
                    let temp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = temp;
                    setSortArray([...array]);
                    swapped = true;
                }
            }
        }
    }



    // gnome sort
    async function gnomeSort(array) {
        let n = array.length;
        let index = 0;
        while (index < n) {
            if (index === 0) {
                index++;
            }
            if (array[index] >= array[index - 1]) {
                index++;
            } else {
                await sleep(10);
                let temp = array[index];
                array[index] = array[index - 1];
                array[index - 1] = temp;
                setSortArray([...array]);
                index--;
            }
        }
    }

    // create a cycle sort function that updates the sortArray state
    async function cycleSort(array) {
        let n = array.length;
        for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
            let item = array[cycleStart];
            let pos = cycleStart;
            for (let i = cycleStart + 1; i < n; i++) {
                if (array[i] < item) {
                    pos++;
                }
            }
            if (pos === cycleStart) {
                continue;
            }
            while (item === array[pos]) {
                pos++;
            }
            if (pos !== cycleStart) {
                await sleep(10);
                let temp = item;
                item = array[pos];
                array[pos] = temp;
                setSortArray([...array]);
            }
            while (pos !== cycleStart) {
                pos = cycleStart;
                for (let i = cycleStart + 1; i < n; i++) {
                    if (array[i] < item) {
                        pos++;
                    }
                }
                while (item === array[pos]) {
                    pos++;
                }
                if (item !== array[pos]) {
                    await sleep(10);
                    let temp = item;
                    item = array[pos];
                    array[pos] = temp;
                    setSortArray([...array]);
                }
            }
        }
    }



    // create a pancake sort function that updates the sortArray state
    async function pancakeSort(array) {
        let n = array.length;
        for (let i = n; i > 1; i--) {
            let max = 0;

            for (let j = 0; j < i; j++) {
                if (array[j] > array[max]) {
                    max = j;
                }
            }
            if (max !== i - 1) {
                await flip(array, max);
                await flip(array, i - 1);
            }
        }
    }
    async function flip(array, i) {
        let start = 0;
        while (start < i) {
            await sleep(10);
            let temp = array[start];

            array[start] = array[i];
            array[i] = temp;
            setSortArray([...array]);
            start++;
            i--;
        }
    }


            



    

  return (
    <div className='navBar'>
        
        <button onClick={() => generateNewArray(sortArray.length)}>Shuffle</button>
        
        <input
            type='range'
            min='10'
            max='100'
            step='2'
            defaultValue='30'
            className='slider'
            onInput={() => handleSliderChange()}
            id='myRange'></input>

        <button onClick={() => handleSortSelection()}>Visualize!</button>

        <div className='custom-select'>
        <select className='select' id='select-dropdown'>
            <option value='quickSort'>QuickSort</option>
            <option value='mergeSort'>MergeSort</option>
            <option value='bubbleSort'>BubbleSort</option>
            <option value='insertionSort'>InsertionSort</option>
            <option value='selectionSort'>SelectionSort</option>
            <option value='countingSort'>CountingSort</option>
            <option value='radixSort'>RadixSort</option>
            <option value='bucketSort'>BucketSort</option>
            <option value='shellSort'>ShellSort</option>
            <option value='cocktailSort'>CocktailSort</option>
            <option value='combSort'>CombSort</option>
            <option value='gnomeSort'>GnomeSort</option>
            <option value='cycleSort'>CycleSort</option>
            <option value='pancakeSort'>PancakeSort</option>
        </select>
        </div>


    </div>
  )
}

export default Settings