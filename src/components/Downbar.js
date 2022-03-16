
function Downbar() {

    return (
        <div className=" w-full bg-slate-800  pl-20 text-white md:block justify-start hidden ">
            <div className="flex">
                <ul className="flex  space-x-3">
                    <li>
                        Movies
                    </li>
                    <li>
                        Stream<sup className="text-red-600 text-ellipsis text-xs">NEW</sup>
                    </li>
                    <li>
                        Events
                    </li>
                    <li>
                        Plays
                    </li>
                    <li>
                        Sports
                    </li>
                    <li>
                        Activities
                    </li>
                    <li>
                        Buzz
                    </li>
                </ul>
                    <ul className="flex space-x-3 ml-96">
                        <li>
                            List your Show<sup className="text-red-600 text-ellipsis text-xs  ">NEW</sup>
                        </li>
                        <li>
                            Corporates
                        </li>
                        <li>
                            Offers
                        </li>
                        <li>
                            Gift Cards
                        </li>
                    </ul>
                
            </div>
        </div>
    )
}
export default Downbar;
