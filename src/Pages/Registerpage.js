import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../utilltes/Loading";
import ValidationError from "../utilltes/error";
import { register } from "../features/userAction";
import { toast } from 'react-toastify';



function Registerpage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
  

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    
    useEffect(() => {
        if (userInfo) {
            toast.success(`welcome ${userInfo.name}`);
            navigate('/home')
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            toast.warning("Passwords do not match")
            setMessage("Passwords do not match");
        } else dispatch(register(name, email, password,));
    };



    return (
        <div className=" text-white">
            <div className="flex justify-center p-10  ">
                <h1 className="text-xl font-semibold text-white  animate-rubberBand">Register</h1>

            </div>
            <div>
                {error && <ValidationError message={error} />}
                {message && <ValidationError message={message} />}  
                {loading && <Loading />}
            </div>
            <div className=" flex justify-center">





                <form onSubmit={submitHandler}>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium ">Your Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Enter name" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Enter email" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="password" required />
                    </div>
                    <div class="mb-6">
                        <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                        <input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="confirm password" required />
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 " required />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>

                    <div className="flex  gap-5">
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        <div>
                            <Link to="/login">         <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Have an Account ? Login  </button></Link>
                        </div>

                    </div>
                </form>
            </div>


        </div>
    )
}



export default Registerpage;