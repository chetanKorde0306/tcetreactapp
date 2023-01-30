import React, { Fragment, useState } from 'react'

export default function Mul() {
    const [num1,setNum1] =useState(0);
    const [num2,setNum2] =useState(0);
    const [result,setResult] =useState(0);
    function mulFun(){
        setResult(num1*num2);
    }
  return (
    // <div>Mul</div>
    <Fragment>
      <h1>Find Multipliaction :- </h1>
      <input type="text" placeholder='Enter a number1' onChange={e=> setNum1(e.target.value)} />
      <br />
      <input type="text" placeholder='Enter a number2' onChange={e=> setNum2(e.target.value)} />
      <button onClick={mulFun}>Multiply</button>
      <h2>Mul of {num1} and {num2} is {num1*num2}</h2>
      <h3>{result}</h3>
    </Fragment>
  )
}
