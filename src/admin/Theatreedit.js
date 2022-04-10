import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet} from "react-router-dom";

import Swal from 'sweetalert2';

function Theatreedit() {
	
	const [name, setName] = useState('');
    const [address, setAddress] = useState('');
	const [_id, setID] = useState(null);
	const sendDataToAPI = () => {

		// if (!name || !age || !country || !email || !mobile) {
		// 	return Swal.fire({
		// 		icon: 'error',
		// 		title: 'Error!',
		// 		text: 'All fields are required.',
		// 		showConfirmButton: true
		// 	});
		// }

	var response =	axios.put(`https://book-myshow-api.herokuapp.com/theatre/savetheatre/${_id}`, {

			name,
			address
		})
    var setIDCopy= [...setID]
        var index = setIDCopy.findindex(row =>row._id===_id);
        setIDCopy[index]= response.data;
        	
			Swal.fire({
				icon: 'success',
				title: 'Updated!',
				text: `data has been updated.`,
				showConfirmButton: false,
				timer: 1500
				
			});
	}

	useEffect(() => {
		setID(localStorage.getItem('id'))
		setName(localStorage.getItem('name'));
		setAddress(localStorage.getItem('address'));
		
		
	}, [])


	return (
		<div className=" bg-slate-200 p-24">

			<form>
				<div class="mb-6">
					<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
					<input type="text" id="name" value={name}
						onChange={(e) => setName(e.target.name)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
				</div>
				<div class="mb-6">
					<label for="address" class="block mb-2 text-sm font-medium  ">Address</label>
					<input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.address)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
				</div>
			

				<button type="submit" onClick={sendDataToAPI} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/theatredashboard">Update</Link></button>
			</form>
            <Outlet />
		</div>
	)

}




export default Theatreedit;