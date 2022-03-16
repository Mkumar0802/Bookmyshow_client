import React from "react";
import 'flowbite';
import {useState} from "react"
// import { Link } from "react-router-dom";
import Downbar from "./Downbar";

function Navbar() {

    let [open,setOpen]=useState(false);
    return (

        <div>
        <div className=" w-full bg-slate-700 p-5 flex " >
            <div className="ml-14">
                <h1 className="text-white text-xl font-mono" >
                    Book<span className="text-red-600">my</span>show
                </h1>
            </div>

            <div className="md:block sm:hidden">
                <div class="flex  flex-col justify-center ml-5">
                    <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex  items-stretch w-full mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button class="btn  px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-200  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

<div className=" ml-auto  text-white md:text-lg  sm:hidden md:block  ">
    <button className=" rounded-md px-4 py-1  bg-red-600 hover:bg-red-700 ">Sign in </button>
    
</div>
<div className="sm:block md:hidden  ml-auto  text-white md:text-lg">
    
    <button className=" md:hidden   rounded-md px-4 py-1  bg-red-600 hover:bg-red-700 ">Use App </button>
</div>

      <div className="text-white">
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute left-8 top-5 cursor-pointer '>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      
 
      </div>
      
    </div>
    
<Downbar/>
    </div>
  
    )
}


export default Navbar;