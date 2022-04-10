import { Link,Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';




export function Theatres(props) {
    const [theatreList, setTheatreList] = useState([])
    //eslint-disable-next-line
    useEffect(async () => {
        var response = await axios.get('https://book-myshow-api.herokuapp.com/theatre/gettheatre');
        setTheatreList(response.data);
    }, [])
    return (
        <>
            <div className="bg-slate-500">
                <div className="mx-auto w-max text-center py-10 ">
                    <div className=" text-xl   md:text-3xl  text-white" ><h2>THEATRES</h2></div>
                </div>
                <div>
                    {theatreList.map((theatre, index) => (<TheatreCard name={theatre.name} address={theatre.address} />))}
                </div>
            </div>
        </>
    )
}


function TheatreCard({ name, address }) {
    return (
        <div className="bg-slate-200">
            <div className="">
                <div className="px-20 p-5  border border-slate-800  flex space-x-10">
                    <div>  <h1 className="align-text-bottom">{name} : {address} </h1></div>
                   
                    <div className="md:space-x-5   sm:space-y-5  sm:space-x-5">
                        <button className="rounded-md px-4 py-1    text-green-500  border border-green-500 text-xs     md:text-xl "  > <Link to="/seats">10.00 AM</Link><Outlet/>     </button>
                        <button className="rounded-md px-4 py-1   text-green-500  border border-green-500  text-xs    md:text-xl"   ><Link to="/seats">2.30 PM </Link><Outlet/> </button>
                        <button className="rounded-md px-4 py-1   text-green-500  border border-green-500   text-xs    md:text-xl "   ><Link to="/seats">6.00 PM</Link><Outlet/>  </button>
                        <button className="rounded-md px-4 py-1   text-green-500  border border-green-500   text-xs    md:text-xl"   ><Link to="/seats" > 10.00 PM</Link><Outlet/>  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}