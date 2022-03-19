
import React,{ useRef }  from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';



function Corporate() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cpr9keh', 'template_pbl3m3f', form.current,'u3pa4A2L8sZUtMsld')
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
        <div className= " flex justify-evenly items-center flex-col scroll-mt-20  ">
           
            <div class=" flex items-top justify-center min-h-screen bg-white  sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 rounded-lg shadow-xl bg-slate-400 max-w-sm hover:bg-slate-600  sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 ">
                                    Contact
                                </h1>




                                <div class="flex items-center mt-4 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        +91 9566*******
                                    </div>
                                </div>

                                <div class="flex items-center mt-8 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                       Pudukkottai,Tamil Nadu,
                                        622001
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-600 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        mkumar0802@gmail.com
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-600 ">
                                    <div className="text-3xl md:text-3xl">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        Github
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-600 ">
                                    <div className="text-xl ">
                                        <a href="https://drive.google.com/file/d/1Jzw2CqSOwYoRDC-6BQ6THcm3MbUli3kS/view?usp=sharing/" target="_blank" rel="noreferrer" >

                                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        CV
                                    </div>
                                </div>


                            </div>

                            <form class="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="text" name="name"  placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label class="hidden">Email</label>
                                    <input type="email" name="email"   placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="number" class="hidden">Number</label>
                                    <input type="number" name="number" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:" />
                                </div>

                                <div class="flex flex-col mt-2">
                                <label for="message" class="hidden">Your message</label>
                                <textarea id="message"  name="message"   rows="4" placeholder="Your message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required:"/>
                                </div>
                                  <div className=" md:pl-16 sm: pl-16    ">
                                <button type="submit" value="Send" class=" bg-teal-700  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-teal-800 transition ease-in-out duration-300" onClick={addRecord}>
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