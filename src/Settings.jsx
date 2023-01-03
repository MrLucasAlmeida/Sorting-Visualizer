import React from 'react';
import './Settings.css';
import { useEffect } from 'react';

function Settings({ sortArray, setSortArray }) {



    useEffect(() => {
        generateNewArray(10);
        console.log('running again');
    },[]);



    const generateNewArray = (size) => {
        const newArray = Array(size).fill(0).map((x, index) => {
            return index;
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






  return (
    <div className='navBar'>
        

        <button onClick={() => generateNewArray(sortArray.length)}>Shuffle</button>

        <input
            type='range'
            min='10'
            max='50'
            className='slider'
            onInput={() => handleSliderChange()}
            id='myRange'></input>

        <button>Visualize!</button>

        <select>
            <option value='Bubble'>Bubble</option>
            <option value='Heap'>Heap</option>
        </select>



    </div>
  )
}

export default Settings