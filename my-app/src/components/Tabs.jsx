import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = () => {
  return (
    <div className='tabs'>
        <Link to={"/tab1"}>
        <button className='tab1'>Tab 1</button>
        </Link>
       
        <Link to={"/tab2"}>
        <button className='tab2'>Tab 2</button>
        </Link>
        <Link to={'/tab3'}>
        <button className='tab3'>Tab 3</button>
        </Link>
        
    </div>
  )
}

export default Tabs