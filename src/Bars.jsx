import React from 'react';
import './Bars.css';




function Bars({ sortArray }) {

    const createBars = () => {
        const barsContainer = document.getElementById('bars-container');
        const containerWidth = barsContainer.clientWidth;
        const containerHeight = barsContainer.clientHeight;
        




    }

  return (
    <div id='bars-container'>
        {
          createBars()
        }
    </div>
  )
}

export default Bars