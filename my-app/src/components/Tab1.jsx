import React, { useState } from 'react'

const Tab1 = () => {
    const [firstNumber,setFirstNumber] = useState(0)
    const [secondNumber,setSecondNumber] = useState(0)
    const [compared,setCompared] = useState([])
    const handleClick = ()=>{
        const str1 = firstNumber.toString();
      const str2 = secondNumber.toString();
     
      const compareFunction = (str1,str2)=>{
        const commonDigits = [];
        for (let i = 0; i < str1.length; i++) {
        const digit = str1[i];
        if (str2.includes(digit) && !commonDigits.includes(digit)) {
      commonDigits.push(digit);
    }
          
      }
         return commonDigits;
  }

 

    }
    const finalArr = compareFunction(str1,str2)
    setCompared(finalArr)

    }
  return (
    <>
    <input type='number' placeholder='First Number' onChange={(e)=>setFirstNumber(e.target.value)}/>

    <input type='number' placeholder='First Number' onChange={(e)=>setSecondNumber(e.target.value)}/>
    <button onClick={handleClick}>Compare</button>

    <div className="compare"> Compared Result: {compared}</div>

    </>
    
  )
}

export default Tab1
