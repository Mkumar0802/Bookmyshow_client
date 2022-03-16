import React from 'react'



function Supportlinks({ alignment = 'start' }) {
    return (
        
        <div className='bg-slate-700 md:block sm:hidden  text-white  p-5 '>
            <div className={`flex  justify-center lg:justify-${alignment}`}>
                <div className="justify-start hidden"></div>
                <div className="justify-center hidden"></div>
                <div className='flex justify-center '>

<div className='flex  space-x-44 '>
    <h1 className='justify-start hidden'>
        List Your Show,event,activity or a great experience?Partner with us 
    </h1 >
    <button className=' justify-start hidden rounded-md px-4 py-1  bg-red-600 hover:bg-red-700 '>Contact</button>
    </div>
    </div>
    </div>
    </div>

    )
}


export default Supportlinks;