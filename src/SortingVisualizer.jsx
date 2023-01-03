import React from 'react'
import { useState } from 'react';
import Settings from './Settings';


function SortingVisualizer() {


    const [sortArray, setSortArray] = useState([1,2,3,4,5]);



  return (

    <div>
        <Settings sortArray={sortArray} setSortArray={setSortArray}></Settings>

        <label>{sortArray}</label>
    </div>
  )
}

export default SortingVisualizer