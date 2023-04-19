import React, {useEffect, useState} from 'react';
import userServices from "../../services/user.services";

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        userServices
            .getAlbums()
            .then(value => value.data)
            .then(value => setAlbums(value))
    },[])

    return (
        <div>
            {
                albums.map(value =>(
                <div key={value.id} >
                    {value.id} - {value.title}
                </div>
            ))
            }
        </div>
    );
};

export default Albums;