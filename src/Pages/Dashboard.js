import { Link} from "react-router-dom";


function Dashboard() {

    return (


        <div className=" w-auto bg-slate-800  pl-20 text-white    md:hidden sm:hidden lg:block justify-start hidden py-28">
            <div className="flex">
                <ul className="flex  space-x-24">
                    <li>
                    <button className="rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white">   <Link to="/theatredashboard">Theatres Dashboard</Link></button>
                    </li>
                    
                    <li>
                    <button className="rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white">   <Link to="/moviedashboard">Movies Dashboard</Link></button>
                    </li>
                    <li>
                    <button className="rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white">     <Link to="/contactdashboard">Contact Dashboard</Link></button>
                    </li>
                    
                </ul>
            </div>


        </div>
    )

}



export default Dashboard;