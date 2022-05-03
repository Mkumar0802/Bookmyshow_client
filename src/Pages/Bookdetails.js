
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import useRazorpay from "react-razorpay";
import axios from "axios";
import { URLDevelopment } from "../Helper/Url";

function Bookdetails() {
    const Razorpay = useRazorpay();

    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [number, setNumber] = useState(0);
    const [agree, SetAgree] = useState(false);


    const initPayment = (data) => {


        if (!name || !email || !number || !agree) {

            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            })
        }
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `  Kindly check your ${email} after payment confirm `,
            showConfirmButton: false,
            timer: 1500
        });



        const options = {
            key: "rzp_test_coemrweGrm2ve0",
            amount: data.amount,
            currency: data.currency,
            name: name,
            description: "Test Transaction",

            // order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = `${URLDevelopment}payment/verify`;
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#FF0000",
            },



        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = `${URLDevelopment}payment/orders`;
            const { data } = await axios.post(orderUrl, { amount: 175 * count });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div >
            <div className='flex  justify-center  py-10'>
                <h1 className=" text-xl  md:text-2xl font-semibold">
                    Booking confirmation Details

                </h1>
            </div>
            <div className='md:flex md:justify-center   grid grid-rows-2 justify-center'>
                <div className="mx-auto w-max text-center  ">

                    <form class="p-6 flex flex-col justify-center " >
                        <div class="flex flex-col">
                            <label for="name" class="hidden">Full Name</label>
                            <input onChange={event => setName(event.target.value)} type="text" name="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500   required" />
                        </div>

                        <div class="flex flex-col mt-2">
                            <label class="hidden">Email</label>
                            <input onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500  required:" />
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="number" class="hidden">Number</label>
                            <input onChange={event => setNumber(event.target.value)} type="number" name="number" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500  required:" />
                        </div>
                        <div class="form-check flex-col mt-2">

                            <input onChange={event => SetAgree(event.target.value)} value={true} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" id="flexCheckDefault3" />
                            <label class="form-check-label inline-block text-gray-600 font-semibold opacity-80" for="flexCheckChecked">
                                Agree the Term and conditions
                            </label>
                        </div>


                        {/* <div className="  justify-start">
                        <button type="submit" value="Send" class=" bg-red-600  text-white font-bold px-4 py-1 rounded-lg mt-3 hover:bg-red-700 transition ease-in-out duration-300" onClick={addRecord}  ><Link to="/payment">PayNow</Link><Outlet />

                        </button>
                    </div> */}



                    </form>
                    <div className="justify-center ml-6 md:py-14 ">
                        <h1 className="text-xl font-semibold  ">No of Tickets</h1>
                        <div className=" flex  py-5 px-12 ">
                            <button onClick={() => setCount(count - 1)} className={`  ${count <= 0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md text-white font-bold ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white font-bold'} `}>-</button>
                            <button className="p-5"> {count} </button>
                            <button onClick={() => setCount(count + 1)} className={`  ${count >= 100 ? 'bg-red-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md text-white font-bold ' : 'rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white font-bold'} `}>+</button>
                        </div>
                        <div className="justify-center pr-10 text-white font-bold">
                            <button onClick={handlePayment} className={`  ${count === 0 ? 'bg-red-600 opacity-50 cursor-not-allowed px-5 py-8  rounded-md ' : 'rounded-md px-5 py-8   bg-red-600 hover:bg-red-700'} `}>PAY ₹{count * 175}  </button>
                        </div>
                    </div>
                </div>  
            </div>

        </div>
    )
}



export default Bookdetails;