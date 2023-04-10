import React from 'react';
import simpson from './simpson.css';

const Simpson = (props) => {
    let {name, surname, age, info, photo} = props.simpson
    return (
        <div className={'father'} >
            <div className={'card_person'}>
                <h2>{name}</h2>
                <h3>{surname}</h3>
                <p>{age}</p>
                <p>{info}</p>
                <img src={photo} alt={name}/>
            </div>

        </div>
    );
};

export default Simpson;