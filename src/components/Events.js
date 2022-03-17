import axios from "axios";
import React, { useEffect, useState } from "react";




const Events = () => {
    const [movieList, setMovieList] = useState([]);
    console.log(movieList);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                `https://bookmyshow-i.herokuapp.com/movie/getmovie`
            );
            setMovieList(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1 className=" text-xl   md:text-2xl font-bold">
                Events
            </h1>
            <div className="w-auto h-auto bg-slate-700 ">

                {movieList.map((val) => {
                    return (
                        <div>
                            <div class="container  grid-flow-row md:grid grid-cols-5 gap-10">
                                <div class=" ">
                                    <div class="">
                                        <div class="  ">
                                            <div class=""key={val.index} >
                                                <img class=" " src={val.pic} alt=""/>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                                    )
                    })}
</div>
</div>
                            )
}
                            export default Events;