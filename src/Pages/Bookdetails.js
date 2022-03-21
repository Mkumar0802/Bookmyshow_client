import { Link, Outlet } from "react-router-dom";



function Bookdetails() {

    return (
        <div>
            <div className="mx-auto w-max text-center py-16 ">
                <h1 className="text-2xl font-semibold    ">
                    Booking confirmation Details

                </h1>
                <form class="p-6 flex flex-col justify-center" >
                    <div class="flex flex-col">
                        <label for="name" class="hidden">Full Name</label>
                        <input type="text" name="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500   required:" />
                    </div>

                    <div class="flex flex-col mt-2">
                        <label class="hidden">Email</label>
                        <input type="email" name="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500  required" />
                    </div>

                    <div class="flex flex-col mt-2">
                        <label for="number" class="hidden">Number</label>
                        <input type="number" name="number" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-red-400   font-semibold focus:border-red-500  required:" />
                    </div>


                    <div className="  justify-start   ">
                        <button type="submit" value="Send" class=" bg-red-600  text-white font-bold px-4 py-1 rounded-lg mt-3 hover:bg-red-700 transition ease-in-out duration-300" ><Link to="/payment">PayNow</Link><Outlet />

                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}



export default Bookdetails;