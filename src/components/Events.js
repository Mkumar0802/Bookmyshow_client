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
        <div className="w-auto h-auto bg-slate-700 ">
            
            
        </div>
        
      
    );
};

export default Events;