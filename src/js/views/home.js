import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CardCharacter from "../component/CardCharacter.jsx";
import CardPlanet from "../component/CardPlanet.jsx";
import CardVehicle from "../component/CardVehicle.jsx";

export const Home = () => {

	// fetch de la data de personajes
	let [masterList, setMasterList] = useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/people/")
		.then(res => res.json())
		.then(data => setMasterList(data.results))
		.catch(err => console.error(err))
	},[]);
	// console.log(masterList)

	// fetch de la data de planetas
	let [masterPlanet, setMasterPlanet] = useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/planets/")
		.then(res => res.json())
		.then(data => setMasterPlanet(data.results))
		.catch(err => console.error(err))
	},[]);
	// console.log(masterPlanet)

	// fetch de la data de vahicles
	let [masterVehicle, setMasterVehicle] = useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/vehicles/")
		.then(res => res.json())
		.then(data => setMasterVehicle(data.results))
		.catch(err => console.error(err))
	},[]);
	// console.log(masterVehicle)

	return (
		<div className="text-center mt-5">
			{/*characters section*/}
			{console.log(masterList)}
			<section className="charactersSection">
				<h2 className="sectionTitle">Characters</h2>
				<div className="row flex-row flex-nowrap rowSection">
					{masterList.map((charUrl, index) => {
						return(
								<div className="col-3" key={index}>
									<CardCharacter className="CardCharacter" url={charUrl.url}/>
								</div>
							)
					})}
            	</div>
        	</section>

			{/*planets section*/}
			<section className="planetsSection">
				<h2 className="sectionTitle">Planets</h2>
				<div className="row flex-row flex-nowrap rowSection">
					{masterPlanet.map((planetUrl, index) => {
						return(
							<div className="col-3" key={index}>
								<CardPlanet className="CardPlanet" url={planetUrl.url}/>
							</div>)
					})}
				</div>
			</section>

			{/*vehicles section*/}
			<section className="vehiclesSection">
			<h2 className="sectionTitle">Vehicles</h2>
			<div className="row flex-row flex-nowrap rowSection">
				{masterVehicle.map((vehicleUrl, index) => {
					return(

						<div className="col-3" key={index}>
							<CardVehicle className="CardVehicle" url={vehicleUrl.url}/>
						</div>)
				})}
			</div>
			</section>		
		</div>
	)
};

