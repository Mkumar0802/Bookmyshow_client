import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import Swal from 'sweetalert2';

export function Theatreadd() {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const sendDataToAPI = () => {
        axios.post(`https://book-myshow-api.herokuapp.com/theatre/savetheatre`, {
            name,
            address,

        }).then(() => {

        })
    }


    return (
        <div className=" bg-slate-400 p-24">

            <h2 className=" text-xl   md:text-2xl font-bold p-5  "><Link to="/theatredashboard">Back to Dashboard</Link></h2>
            <form>
                <div class="mb-6">
                    <label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div class="mb-6">
                    <label for="age" class="block mb-2 text-sm font-medium  ">Address</label>
                    <input type="text" id="age" onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>


                <button type="submit" onClick={sendDataToAPI} class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/theatredashboard">Submit</Link></button>
            </form>
            <Outlet />
        </div>

    )

}




export default Theatreadd;