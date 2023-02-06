import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [features, setFeatures] = useState({});


	useEffect(()=>{
		const url = `https://www.swapi.tech/api/${params.type}/${params.id}`
		fetch(url)
        .then(res => res.json())
        .then(data => {setFeatures(data.result.properties)})
        .catch(err => console.error(err));
		}, [params])

	const explicacion = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem s\
	accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis s\
	et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur s\
	aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro s\
	quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi s\
	tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum s\
	exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure.'

	if (params.type === 'people' && features !== {}){
		return (
			<div className="text-center mt-5">
				{/*card de bootstrap*/}
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img className="img-fluid rounded-start imageSingle" src="https://bordalo.observador.pt/v2/rs:fill:900/c:770:433:nowe:0:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2015/12/star-wars-alternate-ending-vader-father-yoda_770x433_acf_cropped.jpg" alt="..."/>
						</div>
						<div className="col-md-8">
							<div className="card-body cardBodySingle">
								<p className="card-title">{features.name}</p>
								<p className="card-text">{explicacion}</p>
							</div>
						</div>

						<div className='singleFooter container'>
						<div className='row'>
							<div className='col-lg-2 singleData'>
								Name
							</div>
							<div className='col-lg-2 singleData'>
								Birth Year
							</div>
							<div className='col-lg-2 singleData'>
								Gender
							</div>
							<div className='col-lg-2 singleData'>
								Height
							</div>
							<div className='col-lg-2 singleData'>
								Skin Color
							</div>
							<div className='col-lg-2 singleData'>
								Eye Color
							</div>
						</div>
						<div className="row">
							<div className='col-lg-2 singleData'>
								{features.name}
							</div>
							<div className='col-lg-2 singleData'>
								{features.birth_year}
							</div>
							<div className='col-lg-2 singleData'>
								{features.gender}
							</div>
							<div className='col-lg-2 singleData'>
								{features.height}
							</div>
							<div className='col-lg-2 singleData'>
								{features.skin_color}
							</div>
							<div className='col-lg-2 singleData'>
								{features.eye_color}
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		)} 
	else if (params.type === 'starships' && features !== {}) {
		return(
			<div className="text-center mt-5">
			{/*card de bootstrap*/}
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img className="img-fluid rounded-start imageSingle" src="https://bordalo.observador.pt/v2/rs:fill:900/c:770:433:nowe:0:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2015/12/star-wars-alternate-ending-vader-father-yoda_770x433_acf_cropped.jpg" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body cardBodySingle">
							<h3 className="card-title">{features.name}</h3>
							<p className="card-text">{explicacion}</p>
						</div>
					</div>
					<div className='singleFooter container'>
						<div className='row'>
							<div className='col-lg-2 singleData'>
								Model
							</div>
							<div className='col-lg-2 singleData'>
								Starship Class
							</div>
							<div className='col-lg-2 singleData'>
								Length
							</div>
							<div className='col-lg-2 singleData'>
								Crew
							</div>
							<div className='col-lg-2 singleData'>
								Passengers
							</div>
							<div className='col-lg-2 singleData'>
								Consumables
							</div>
						</div>
						<div className="row">
							<div className='col-lg-2 singleData'>
								{features.model}
							</div>
							<div className='col-lg-2 singleData'>
								{features.starship_class}
							</div>
							<div className='col-lg-2 singleData'>
								{features.length}
							</div>
							<div className='col-lg-2 singleData'>
								{features.crew}
							</div>
							<div className='col-lg-2 singleData'>
								{features.passengers}
							</div>
							<div className='col-lg-2 singleData'>
								{features.consumables}
							</div>
						</div>
					</div>			
				</div>
			</div>
		</div>
		)} 
	else if (params.type === 'planets' && features !== {}){
			return(
			<div className="text-center mt-5">
			{/*card de bootstrap*/}
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img className="img-fluid rounded-start imageSingle" src="https://bordalo.observador.pt/v2/rs:fill:900/c:770:433:nowe:0:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2015/12/star-wars-alternate-ending-vader-father-yoda_770x433_acf_cropped.jpg" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body cardBodySingle">
							<h3 className="card-title">{features.name}</h3>
							<p className="card-text">{explicacion}</p>
						</div>
					</div>
					<div className='singleFooter container'>
					<div className='row'>
						<div className='col-lg-2 singleData'>
							Name
						</div>
						<div className='col-lg-2 singleData'>
							Surface Water
						</div>
						<div className='col-lg-2 singleData'>
							Terrain
						</div>
						<div className='col-lg-2 singleData'>
							Diameter
						</div>
						<div className='col-lg-2 singleData'>
							Orbital Period
						</div>
						<div className='col-lg-2 singleData'>
							Rotational Period
						</div>
					</div>
					<div className="row">
						<div className='col-lg-2 singleData'>
							{features.name}
						</div>
						<div className='col-lg-2 singleData'>
							{features.surface_water}
						</div>
						<div className='col-lg-2 singleData'>
							{features.terrain}
						</div>
						<div className='col-lg-2 singleData'>
							{features.diameter}
						</div>
						<div className='col-lg-2 singleData'>
							{features.orbital_period}
						</div>
						<div className='col-lg-2 singleData'>
							{features.rotation_period}
						</div>
						</div>
					</div>
					</div>
					
					</div>
			</div>
		)} 
	else{
		return (<div className="text-center mt-5">Loading...</div>)
		}
		
};

Single.propTypes = {
	match: PropTypes.object
};

{/*<li>Name {}</li>
<li>Birth Year {}</li>
<li>Gender {}</li>
<li>Heigth {}</li>
<li>Skin Color {}</li>
<li>Eye Color {}</li>*/}