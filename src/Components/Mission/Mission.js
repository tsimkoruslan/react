import React from 'react';

const Mission = ({mission}) => {
    let {mission_name, launch_year } = mission
    return (
        <div>
            <h1>{mission_name} {launch_year}</h1>
        </div>
    );
};

export default Mission;