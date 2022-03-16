import React from 'react'



function SocialLinks({ alignment = 'start' }) {
    return (
        <div className='bg-slate-700 '>
        <div className={`flex  justify-center lg:justify-${alignment}`}>
            <div className="justify-start hidden"></div>
            <div className="justify-center hidden"></div>
            



                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white ">  <ion-icon name="logo-facebook"></ion-icon> </button>

                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white"><ion-icon name="logo-twitter"></ion-icon> </button>

                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white"><ion-icon name="logo-youtube"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white"><ion-icon name="logo-pinterest"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white"><ion-icon name="logo-linkedin"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-slate-400 hover:text-white"><ion-icon name="logo-instagram"></ion-icon></button>

            
        </div>
        </div>
    )
}

export default SocialLinks;
