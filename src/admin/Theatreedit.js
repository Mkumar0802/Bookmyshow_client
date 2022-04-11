// import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import Swal from 'sweetalert2';

function Theatreedit() {
	const [users, setUser] = useState([]);
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	
	const [_id, setId] = useState(null);


	useEffect(() => {
		setName(localStorage.getItem('name'))
		setId(localStorage.getItem('id'))
		setAddress(localStorage.getItem('address'));
		


	}, [])

	function getUsers() {
		fetch("https://book-myshow-api.herokuapp.com/theatre/gettheatre/").then((result) => {
			result.json().then((resp) => {
				console.warn(resp)
				setUser(resp)
				setId(resp[0].id)
				setName(resp[0].name)
				setAddress(resp[0].address)
				
			})
		})
	}


	function selectUser() {
		let item = users;
		setId(item.id)
		setName(item.name)
		setAddress(item.address)
		


	}


	function updateUser() {

		if (!name || !address ) {
		return Swal.fire({
		  icon: 'error',
		  title: 'Error!',
		  text: 'All fields are required.',
		  showConfirmButton: true
		});
	  }
	let item = { name, address}
	console.warn("item", item)
	fetch(`https://book-myshow-api.herokuapp.com/theatre/updatetheatre/${_id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(item)
	}).then((result) => {
		result.json().then((resp) => {
			console.warn(resp)
			getUsers()
		})
	})

	Swal.fire({
		icon: 'success',
		title: 'Updated!',
		text: `${name}   data has been updated.`,
		showConfirmButton: false,
		timer: 1500

	});

}
	return (
		<div className=" bg-slate-500 ">
			<div className="flex bg-slate-600  w-auto p-6 text-white ">


				<button onClick={selectUser} className="text-xl   md:text-4xl font-bold    whitespace-nowrap  "><Link to="/theatredashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link> </button>
				<div className="px-36  text-xl   md:text-3xl font-bold ">
					<h1 className="">Edit theatre Details  </h1>
				</div>
			</div>


			<form className="ml-36 py-12 text-white ">	
			<div class="mb-6">
						<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
						<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
					</div>
					<div class="mb-6">
						<label for="address" class="block mb-2 text-sm font-medium  ">Address</label>
						<input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-4/12 p-2.5 " required />
					</div>
				


				<button type="submit" onClick={updateUser} class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"><Link to="/theatredashboard">Update</Link></button>
			</form>
			<Outlet />
		</div>
	)

}




export default Theatreedit;