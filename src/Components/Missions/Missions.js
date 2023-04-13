import React, {useEffect, useState} from 'react';
import Mission from "../Mission/Mission";

const Missions = () => {

    const [missions, setMissions] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(missions => {
                const newMission = [];
                for (const i of missions) {
                    if (i.launch_year !== "2010") {
                        newMission.push(i)
                    }
                }
                setMissions(newMission)

            })
    },[])

    return (
        <div>
            {
                missions.map((mission,index) => <Mission key={index} mission={mission}/>)
            }
        </div>
    );
};

export default Missions;