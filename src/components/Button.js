import { Link,Outlet } from "react-router-dom";

function Button({ alignment = 'start',title }) {
    return(
        <div className={`flex  justify-center lg:justify-${alignment}`}>
            <div className="justify-start hidden"> </div>
            <div className="justify-center hidden"> </div>
           <button className="rounded-md px-4 py-1 my  bg-red-600 hover:bg-red-700 text-white"><Link to="/book" >{title}</Link><Outlet/>   </button>
        </div>
        
       
    )
}

 
export default Button ;