import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";


const Main = () => {
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

        <div className="w-auto h-auto bg-slate-700  ">
            <div>
                <h2 className="px-16 pt-5  text-xl   md:text-2xl font-bold text-white  ">Movies</h2>
            </div>

            <div className=" pr-10  mx-10     grid-flow-row md:grid-cols-3 gap-5  lg:grid grid-cols-5  ">
                {movieList.map((val) => {
                    return (
                        <div className="p-1 mr-2  m-5  bg-white  rounded-lg  max-w-sm  sm:rounded-lg  " key={val.index}>
                            <img
                                className=" object-cover rounded-xl md:w-full  md:h-80  h-5/6 w-full   "
                                alt="Movies"
                                src={val.pic}
                            ></img>
                            <div className="p-2">
                                <p className="text-base md:text-lg font-bold  ">{val.name}</p>
                                <p className=" font-bold">
                                    Certificate : {val.certificate}
                                </p>
                                <p className="text-lg">
                                    {" "}
                                    <span className="font-bold">  Language : </span> {val.language}
                                </p>
                                <div className="">

                                </div>
                            </div>

                            <Button />

                        </div>


                    );
                })}
            </div>

        </div>




    );
};

export default Main;