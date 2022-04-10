// import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import Swal from 'sweetalert2';

function Movieedit() {
	const [users, setUser] = useState([]);
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [screen, setScreen] = useState('');
	const [language, setLanguage] = useState('');
	const [certificate, setCertificate] = useState('');
	const [rating, setRating] = useState('');
	const [_id, setId] = useState(null);


	useEffect(() => {
		setName(localStorage.getItem('name'))
		setId(localStorage.getItem('id'))
		setImage(localStorage.getItem('image'));
		setScreen(localStorage.getItem('screen'));
		setLanguage(localStorage.getItem('language'));
		setCertificate(localStorage.getItem('certificate'));
		setRating(localStorage.getItem('rating'));


	}, [])

	function getUsers() {
		fetch("http://localhost:8080/employee/getemployee/").then((result) => {
			result.json().then((resp) => {
				console.warn(resp)
				setUser(resp)
				setId(resp[0].id)
				setName(resp[0].name)
				setImage(resp[0].image)
				setScreen(resp[0].screen)
				setLanguage(resp[0].language)
				setCertificate(resp[0].certificate)
				setRating(resp[0].rating)
			})
		})
	}


	function selectUser(id) {
		let item = users;
		setId(item.id)
		setName(item.name)
		setImage(item.image)
		setScreen(item.screen)
		setLanguage(item.language)
		setCertificate(item.certificate)
		setRating(item.rating);


	}


	function updateUser() {
		let item = { name, image, screen, language, certificate, rating }
		console.warn("item", item)
		fetch(`https://book-myshow-api.herokuapp.com/movie/updatemovie/${_id}`, {
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
			text: `data has been updated.`,
			showConfirmButton: false,
			timer: 1500

		});

	}





	return (
		<>
			

			<div className=" bg-slate-200   ">

				<div className="flex bg-slate-500  w-screen p-6 text-white ">


					<button  onClick={selectUser}  className="text-xl   md:text-4xl font-bold    whitespace-nowrap"><Link to="/moviedashboard"><ion-icon name="arrow-back-circle-outline"></ion-icon></Link> </button>
					<div className="px-36 font-serif text-xl   md:text-4xl font-bold ">
						<h1 className="">Edit Employee Details  </h1>
					</div>
				</div>

				<form className="ml-36 py-12">

					<div class="mb-6">
						<label for="Name" class="block mb-2 text-sm font-medium  ">Name</label>
						<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>
					<div class="mb-6">
						<label for="image" class="block mb-2 text-sm font-medium  ">Image</label>
						<input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>
					<div class="mb-6">
						<label for="screen" class="block mb-2 text-sm font-medium  ">Screen</label>
						<input type="text" id="screen" value={screen} onChange={(e) => setScreen(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>

					<div class="mb-6">
						<label for="language" class="block mb-2 text-sm font-medium  ">Your email</label>
						<input type="text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>

					<div class="mb-6">
						<label for="certifitate" class="block mb-2 text-sm font-medium  ">Your mobile</label>
						<input type="text" id="certifitate" value={certificate} onChange={(e) => setCertificate(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>
					<div class="mb-6">
						<label for="rating" class="block mb-2 text-sm font-medium  ">Rating</label>
						<input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 " required />
					</div>



					<div class="ml-40">
						<button type="submit" onClick={updateUser} 
						class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"><Link to="/moviedashboard">Submit</Link> 	</button>
					</div>

				</form>

			</div>
			<Outlet />
		</>
	)

}



export default Movieedit;