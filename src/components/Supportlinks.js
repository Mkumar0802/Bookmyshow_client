import React from 'react'



function Supportlinks({ alignment = 'start' }) {
    return (
        
        <div className='bg-slate-700 md:block sm:hidden  justify-start hidden'>
            <div className={`flex  justify-center lg:justify-${alignment}`}>
                <div className="justify-start hidden"></div>
                <div className="justify-center hidden"></div>
                <div className='flex justify-center '>

                    <div className='flex justify-evenly items-center flex-row space-x-40 '>

                        <div className='text-slate-400 hover:text-white text-xs'>
                            <button><svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>24/7 CUSTOMER CARE </button>


                        </div>

                        <div >

                            <button className='text-slate-400 hover:text-white text-xs'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                </svg>RESEND BOOKING CONFIRMATION </button>
                        </div>
                        <div>
                            <button className='text-slate-400 hover:text-white text-xs'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>NEWSLETTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Supportlinks;