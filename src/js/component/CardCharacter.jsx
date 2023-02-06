import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardCharacter = (props) => {

    const [url, setUrl] = useState(props.url);
    const [char, setChar] = useState({});
    const [uid, setUid] = useState();
    const [favorite, setFavorite] = useState(false);
    const { store, actions } = useContext(Context);

    // el objeto personaje de esta card se llama char
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setChar(data.result.properties);
                                setUid(data.result.uid)})
        .catch(err => console.error(err));
    },[url]);

    if (char !== {}){
        return (
            <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{char.name}</h4>
                    <p className="card-text"><b>Gender:</b> {char.gender}</p>
                    <p className="card-text"><b>Eyes-color:</b> {char.eye_color}</p>
                    <p className="card-text"><b>Hair-clor:</b> {char.hair_color}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to={`/single/people/${uid}`} >Learn more!</Link>
                        <button  
                               className={`btn btn-outline-primary likeButton ${favorite ? "selected" : null}`}
                               onClick={(ev) => {
                                                if (favorite === false){
                                                        actions.addFavorite(char.name);
                                                        setFavorite(true);
                                                }else if (favorite === true){
                                                    actions.deleteFavorite(char.name);
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

export default CardCharacter;