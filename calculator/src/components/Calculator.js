import React, { useState } from 'react';



function Calculator() {
  const [displayValue, setDisplayValue] = useState(0)
  const [value, setValue] = useState(0)


  return (
      <div className="container">
          <div>{displayValue}</div>
          <button>C</button>
          <button>backspace</button>
          <button>/</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button>neg</button>
      </div>
      
  );
}

export default Calculator;