import React, { useState } from 'react'

const Tab1 = () => {
    const [firstNumber,setFirstNumber] = useState(0)
    const [secondNumber,setSecondNumber] = useState(0)
    const [compared,setCompared] = useState([])
    const handleClick = ()=>{
        const firstString = `${firstNumber}`
        const firstArray = firstString.split("")
        const secondString = `${secondNumber}`
        const secondArray = secondString.split("")
        const newArr = []
       const compareFunction = (firstArray,secondArray)=>{ 
        for(let i =0;i<6;i++){
            for(let j =0;j<6;j++){
                if(firstArray[i]===secondArray[j]){
                    newArr.push(firstArray[i])
                }
            }
        }
        const set = new Set(newArr)
        return set

    }
    const finalArr = compareFunction(firstArray,secondArray)
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