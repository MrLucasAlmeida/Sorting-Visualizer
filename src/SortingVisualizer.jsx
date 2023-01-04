import React from 'react'
import { useState } from 'react';
import Bars from './Bars';
import Settings from './Settings';


// import sorting algorithms




function SortingVisualizer() {


    const [sortArray, setSortArray] = useState([1,2,3,4,5]);



  return (

    <div>
        <Settings sortArray={sortArray} setSortArray={setSortArray}></Settings>
        <Bars sortArray={sortArray}></Bars>
        {/* <label>{sortArray}</label> */}
    </div>
  )
}

export default SortingVisualizer