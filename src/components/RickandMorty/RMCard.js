import React from 'react';
import style_rickandmorty from "./style_rickandmorty.css"

const RMCard = (props) => {
    let {id, name, status, species, gender, image} = props.info;
    return (
        <div>
            <h2>{id} {name}</h2>
            <p>{status} {species} {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default RMCard;