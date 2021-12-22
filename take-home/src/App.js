import './App.css';
import React, { useState, useEffect } from 'react';
import PhysiciansList from "./PhysiciansList";
import Appointments from "./Appointments";

function App() {
	const moment = require("moment");

	const [physicians, setPhysicians] = useState([]);
	const [currPhysician, setCurrPhysician] = useState();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		getPhysicians();
	}, []);

	const getPhysicians = async () => {
		try {
			const res = await fetch('http://localhost:1337/physicians');

			const data = await res.json();

			console.log(data)
			setPhysicians(data);
		} catch (err) {
			console.error(err);
		}
	}

	const renderPhysicians = () => {
		const rendered = physicians.map((physician, index) => (
			<li key={index} className="physician" onClick={() => onClickPhysician(physician)}>
				<span>{physician.lastName + ", " + physician.firstName}</span>
			</li>
		));

		return (
			<div>
				<h2>PHYSICIANS</h2>
				<ul>
					{rendered}
				</ul>
			</div>
		);
	}

	function onClickPhysician(phys) {
		console.log(phys)
		setCurrPhysician(phys);
		if (phys.appointments) {
			let appList = phys.appointments.map((app, index) => {
				return app
			});
			setAppointments(appList);
		}
	}

	const formatTime = (time) => {
		let newTime = moment();
		newTime = moment(time).format(
			"MM/DD/YYYY"
		);
		console.log(newTime)
		return newTime;
	}

	const renderAppointments = () => {
		let apps = appointments.map((app, index) => (
			<tr key={index} className="appointment">
				<td>{index + 1}</td>
				<td>{app.lastName}, {app.firstName}</td>
				<td>{formatTime(app.time)}</td>
				<td>{app.kind}</td>
			</tr>
		));
		
		return (
			<div>
				<h2>Appointments</h2>
				<h1>Dr. {currPhysician.firstName}, {currPhysician.lastName}</h1>
				<div className="email">
					<span>{currPhysician.email}</span>
				</div>
				<table className="table">
					<th>#</th>
					<th>Name</th>
					<th>Time</th>
					<th>Kind</th>
					{appointments.map((app, index) => (
						<tr key={index} className="appointment">
							<td>{index + 1}</td>
							<td>{app.lastName}, {app.firstName}</td>
							<td>{app.time}</td>
							<td>{app.kind}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Physician Schedules</h1>
				<div className="split-view">
					<div className="physicianList">{renderPhysicians()}</div>
					<div className="appList">
						{appointments && currPhysician ? renderAppointments() : null}
					</div>
					{/* <PhysiciansList></PhysiciansList> */}
					{/* <Appointments></Appointments> */}
				</div>

			</header>
		</div>
	);
}

export default App;
