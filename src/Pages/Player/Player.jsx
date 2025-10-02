import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })
    const {id} = useParams() ;
    const navigate = useNavigate();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQxOWQ1MGI2NzQwYjk5NDNkMGNkZWI4MDMzMDMxZiIsIm5iZiI6MTc1OTI5OTM3OC4wMzksInN1YiI6IjY4ZGNjNzMyMzJhYzk0MTRjNmM3NzI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BmcRxYcpe28H1G2LoVD7JRb2pqsXPWRus5183qZQLlI'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" onClick={()=> {navigate(-1)}}/>
            <iframe width="90%" height="90%" src= {`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0 , 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player