import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/Cards/Cards_data'
import { Link } from 'react-router-dom';
const TitleCards = ({ title, category }) => {

    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));


        cardsRef.current.addEventListener("wheel", handleWheel)
    }, [category])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQxOWQ1MGI2NzQwYjk5NDNkMGNkZWI4MDMzMDMxZiIsIm5iZiI6MTc1OTI5OTM3OC4wMzksInN1YiI6IjY4ZGNjNzMyMzJhYzk0MTRjNmM3NzI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BmcRxYcpe28H1G2LoVD7JRb2pqsXPWRus5183qZQLlI'
        }
    };

    return (
        <div className='cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="cards-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}

            </div>

        </div>
    )
}

export default TitleCards