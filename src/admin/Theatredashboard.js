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
                `http://localhost:3001/theatre/gettheatre`
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
        localStorage.setItem('address',address)
       


    }




    return (
        <>
            <div class="bg-slate-700">
                <div className="flex  p-6 space-x-12">
                    <h2 className="  text-xl   md:text-2xl font-bold text-white  ">Dashboard</h2>
                    <button className=" text-xl   md:text-2xl font-bold text-white "><Link to="/theatreadd">Add</Link><Outlet /></button>
                </div>

            </div>
            <div class="flex flex-col  p-5">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 ">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase ">
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
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap  " >{menu._id}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.name}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">{menu.address}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                                <div className="flex justify-center   gap-3 "><Link to="/theatreedit">
                                                    <button   onClick={() => setData(menu._id, menu.name, menu.address)} className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                        Edit
                                                    </button></Link>


                                                    <button onClick={() => onDelete(menu._id)}   className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
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