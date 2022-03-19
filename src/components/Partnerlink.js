import React from 'react'
import {Link,Outlet} from 'react-router-dom'


function Supportlinks({ alignment = 'start' }) {
    return (
        
        <div className='w-auto bg-slate-700  text-white  p-5 md:block sm:hidden justify-center hidden'>
            <div className={`flex  justify-center lg:justify-${alignment}`}>
                <div className="justify-start hidden"></div>
                <div className="justify-center hidden"></div>
                <div className='flex justify-center '>

<div className='flex  space-x-44 '>
    <h1 className='  '>
        List Your Show,event,activity or a great experience?Partner with us 
    </h1 >
    <button className=' rounded-md px-4 py-1  bg-red-600 hover:bg-red-700 '> <Link to="/contact">Contact</Link></button>
    <Outlet/>
    </div>
    </div>
    </div>
    </div>

    )
}


export default Supportlinks;