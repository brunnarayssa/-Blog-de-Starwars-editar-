import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardPlanet = (props) => {

    const [url, setUrl] = useState(props.url);
    const [planet, setPlanet] = useState({});
    const [uid, setUid] = useState();
    const [favorite, setFavorite] = useState(false);
    const { store, actions } = useContext(Context);

    // el objeto planet se llama planet
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setPlanet(data.result.properties);
                        setUid(data.result.uid)})
        .catch(err => console.error(err));
    },[url]);
    
    if (planet !== {}){
        return (
            <div className="card">
                <img src="https://media.timeout.com/images/105903888/750/422/image.jpg" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{planet.name}</h4>
                    <p className="card-text"><b>Population:</b> {planet.population}</p>
                    <p className="card-text"><b>Terrain:</b> {planet.terrain}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to={`/single/planets/${uid}`} >Learn more!</Link>
                        <button  
                               className={`btn btn-outline-primary likeButton ${favorite ? "selected" : null}`}
                               onClick={(ev) => {
                                                if (favorite === false){
                                                        actions.addFavorite(planet.name);
                                                        setFavorite(true);
                                                }else if (favorite === true){
                                                    actions.deleteFavorite(planet.name);
                                                    setFavorite(false)
                                                }}
                                        }><i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<p>loading...</p>)
    }
};

export default CardPlanet;