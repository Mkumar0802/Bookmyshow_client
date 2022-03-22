import React, { useState } from 'react';



function Payment() {
    const [count, setCount] = useState(0);

    return (
        <div className="">

            <div className="flex justify-center p-10 ">
                <h1 className="text-xl font-semibold  ">Payment Details</h1>
            </div>
            <div className="md:flex md:justify-center p-5  grid grid-rows-2 justify-center">
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input class="appearance-none block w-2/3 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Cardholder Name" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>

                    </div>
                    <div class="flex flex-wrap mx-3 mb-6">
                        <div class="w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Card Number
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="XXXXXXXXXXXXXXX" />
                            <p class="text-gray-600 text-xs italic">Enter 16 digit Card number</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap mx-3 mb-2">
                        <div class="w-1/4 md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                Expire date
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="MM/YY" />
                        </div>


                        <div class="w-1/4 md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                CVV
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="password" placeholder="CVV" />
                        </div>
                    </div>



                </form>


                <div className="justify-center ml-28 ">
                        <h1 className="text-xl font-semibold  ">No of Tickets</h1>
                        <div className=" flex  py-3">
                            <button onClick={() => setCount(count - 1)}   className= {`  ${count<=0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>-</button>
                            <button className="p-5"> {count} </button>
                            <button onClick={() => setCount(count + 1)}   className={`  ${count>=100 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>+</button>
                        </div>
                        <div className="justify-center py-5 px-4">
                            <button     className={`  ${count===0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700'} `}>PAY ₹{count*175} </button>
                        </div>
                    </div>
            </div>
        </div> 
    )



}









export default Payment;