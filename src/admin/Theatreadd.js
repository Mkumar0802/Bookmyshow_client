import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

export function Theatreadd() {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const sendDataToAPI = () => {

        if (!name || !address ) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true
            });
          }


        axios.post(`https://book-myshow-api.herokuapp.com/theatre/savetheatre`, {
            name,
            address,

        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${name} ${address} data has been updated.`,
                showConfirmButton: false,
                timer: 1500
    
            });  

        })
    }


    return (
        <div className=" bg-slate-500">

            <div className="flex bg-slate-600  w-screen p-6 text-white ">


                <button className="text-xl   md:text-4xl font-bold    whitespace-nowrap"><Link to="/theatredashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link><Outlet /> </button>
                <div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
                    <h1 className="">Add theatre Details  </h1>
                </div>
            </div>
            <form className="ml-36 py-12 text-white ">
            <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium  ">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
                </div>
                <div class="mb-6">
                    <label for="age" class="block mb-2 text-sm font-medium  ">Address</label>
                    <input type="text" id="age" onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " />
                </div>


                <button type="submit" onClick={sendDataToAPI} class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "><Link to="/theatredashboard">Submit</Link><Outlet /></button>
            </form>
            
        </div>

    )

}




export default Theatreadd;