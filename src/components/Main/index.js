import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './style.css';

export default function Main(){

    const [ name, setName ] = useState([]);
    const [ bio, setBio ] = useState([]);
    const [ img, setImg ] = useState([]);
    const [ location, setLocation ] = useState([]);

    useEffect(() => {
        async function loadRepositories(){

            const res = await api.get(`/claytongit`);
            
            setName(res.data.name);
            setBio(res.data.bio);
            setImg(res.data.avatar_url);
            setLocation(res.data.location);

            console.log(res.data);

        }    
        loadRepositories();
    }, []);

    return(
        <div className="container-main">

            <h1>Perfil github</h1>

            <div className="perfil">

                <img src={ img } width="100" height="100" />

                <h3>{ name }</h3>     

                <p>{ bio }</p>

                <p>{ location }</p>

            </div>

        </div>
    );
}
