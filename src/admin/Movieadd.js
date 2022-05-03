import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import { URLDevelopment } from "../Helper/Url";
export function Movieadd() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [screen, setScreen] = useState('');
    const [language,setLanguage] =useState('');
    const [certificate,setCertificate] = useState('');
    const [rating,setRating] = useState('');
 
    const sendDataToAPI = () => {


        if (!name || !image ||!screen ||!language ||!certificate ||!rating ) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true
            });
          }


        axios.post(`${URLDevelopment}movie/savemovie/`, {

            name,
            image,
            screen,
            language,
            certificate,
            rating

        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${name}data has been updated.`,
                showConfirmButton: false,
                timer: 1500
    
            });  

        })
    }



    return (
        <>


            <div className=" bg-slate-500 ">
                <div className="flex bg-slate-600  w-auto p-6 text-white ">


                    <button className="text-xl   md:text-4xl font-bold    whitespace-nowrap"><Link to="/moviedashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link><Outlet /> </button>
                    <div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
                        <h1 className="">Add Movie Details  </h1>
                    </div>
                </div>

                <form className="ml-36 py-12 text-white">

                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium  ">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="image" class="block mb-2 text-sm font-medium  ">Image</label>
                        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="screen" class="block mb-2 text-sm font-medium  ">Screen</label>
                        <input type="text" id="screen" value={screen} onChange={(e) => setScreen(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>

                    <div class="mb-6">
                        <label for="language" class="block mb-2 text-sm font-medium  ">Language</label>
                        <input type="text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>

                    <div class="mb-6">
                        <label for="certifitate" class="block mb-2 text-sm font-medium  ">Certificate</label>
                        <input type="text" id="certifitate" value={certificate} onChange={(e) => setCertificate(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="rating" class="block mb-2 text-sm font-medium  ">Rating</label>
                        <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
                    </div>



                    <div class="ml-40">
                        <button type="submit" onClick={sendDataToAPI}
                            class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"><Link to="/moviedashboard">Submit</Link><Outlet /> 	</button>
                    </div>

                </form>

            </div>
            
        </>
    )

}





export default Movieadd;