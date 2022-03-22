
import React, { useRef } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';



function Corporate() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cpr9keh', 'template_pbl3m3f', form.current, 'u3pa4A2L8sZUtMsld')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const addRecord = () => {


        Swal.fire({
            icon: 'success',
            title: 'Your message has been send !!!',
            text: ' Kindly wait for response.',
            showConfirmButton: false,
            timer: 3000
        })
    }


    return (
        <div className=" ">
            <div className=" flex justify-evenly items-center flex-col scroll-mt-20  ">

                <div class=" flex items-top justify-center min-h-screen bg-white  sm:items-center sm:pt-0">
                    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div class="mt-8 overflow-hidden ">
                            <div class="grid grid-cols-1 md:grid-cols-2">

                                <div class="p-10 mr-2 rounded-lg shadow-xl bg-slate-200 max-w-sm hover:bg-slate-400  sm:rounded-lg">
                                    <h1 class="text-4xl sm:text-5xl text-red-600">
                                        Contact
                                    </h1>




                                    <div class="flex items-center mt-4 text-red-600">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40 text-red-600">
                                            <p>022 6144 5050</p>
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-8 text-red-600">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40 text-red-600">
                                            <p> Mumbai</p>
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-red-600">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40 text-red-600">
                                            <p>   Dummy@bookshow.com</p>
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-red-600 ">
                                        <div className="text-3xl md:text-3xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40 text-red-600">
                                            Bigtree Entertainment
                                        </div>
                                    </div>

                                </div>

                                <form class="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                                    <div class="flex flex-col">
                                        <label for="name" class="hidden">Full Name</label>
                                        <input type="text" name="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label class="hidden">Email</label>
                                        <input type="email" name="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="number" class="hidden">Number</label>
                                        <input type="number" name="number" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="message" class="hidden">Your message</label>
                                        <textarea id="message" name="message" rows="4" placeholder="Your message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:" />
                                    </div>
                                    <div className=" md:pl-16 sm: pl-16    ">
                                        <button type="submit" value="Send" onClick={addRecord} class=" bg-red-500  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-600 transition ease-in-out duration-300">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Corporate;