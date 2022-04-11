import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';





function Theatredashboard(props) {
    const [dashboardList, setDashboardList] = useState([]);
    console.log(dashboardList);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                `https://book-myshow-api.herokuapp.com/theatre/gettheatre`
            );
            setDashboardList(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const onDelete = (_id) => {
        axios.delete(`https://book-myshow-api.herokuapp.com/theatre/deletetheatre/${_id}`)
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                getData();
            })
    }


    const setData = (id, name, address) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('address', address)



    }




    return (
        <>
            <div class="bg-slate-600">

                <div className="flex  p-8 space-x-12 ">
                    <button className="text-xl   md:text-4xl font-bold text-white   whitespace-normal"><Link to="/dashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link> </button>
                    <h2 className="  text-xl   md:text-2xl font-bold text-white"> Dashboard</h2>

                </div>
                <div className="flex justify-center  ">
                    <button className=" text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 whitespace-pre-line "><Link to="/theatreadd"><svg xmlns="http://www.w3.org/2000/svg" class=" flex h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>Add Theatre List</Link> </button>
                </div>
            </div>
            <div class="flex flex-col  w-auto p-5">
                <div class="overflow-x-auto sm:-mx-6 ">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 ">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  ">
                                            Id
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Name
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
                                            Address
                                        </th>

                                        <th scope="col" class=" py-3 px-6 col-span-2 ">Action

                                        </th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {dashboardList.map((menu) => {
                                        return (
                                            <tr className="border-b odd:bg-white even:bg-gray-50  ">
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap   " >{menu._id}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.address}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                                    <div className="flex justify-center   gap-3 "><Link to="/theatreedit">
                                                        <button onClick={() => setData(menu._id, menu.name, menu.address)} className="text-white bg-slate-700 hover:bg-slate-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                            Edit
                                                        </button></Link><Outlet/>


                                                        <button onClick={() => onDelete(menu._id)} className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}








export default Theatredashboard;