import { Link} from "react-router-dom";


function Downbar() {

    return (
        <div className=" w-auto bg-slate-800  pl-20 text-white    md:hidden sm:hidden lg:block justify-start hidden">
            <div className="flex">
                <ul className="flex  space-x-3">
                    <li>
                    <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                    <Link to="/stream">Stream<span className="text-red-600 text-ellipsis text-xs align-super">NEW</span></Link>       
                    </li>
                    <li>
                    <Link to="/events"> Events</Link>    
                    </li>
                    <li>
                    <Link to="/plays">Plays</Link>       
                    </li>
                    <li>
                    <Link to="/sports">Sports</Link>           
                    </li>
                    <li>
                    <Link to="/activities">Activities</Link>             
                    </li>
                    <li>
                    <Link to="/buzz">Buzz</Link>             
                    </li>
                </ul>
                    <ul className="flex space-x-3 ml-96">
                        <li>
                        <Link to="/contact"> List your Show<sup className="text-red-600 text-ellipsis text-xs  ">NEW</sup></Link>                 
                        </li>
                        <li>
                        <Link to="/Coporate">Corporates</Link>              
                        </li>
                        <li>
                        <Link to="/offers">Offers</Link>                
                        </li>
                        <li>
                        <Link to="/giftcards">Gift Cards</Link>                    
                        </li>
                        <li>
                        <Link to="/dashboard">Dashboard</Link>                    
                        </li>
                    </ul>
                
            </div>
        </div>
    )
}
export default Downbar;
