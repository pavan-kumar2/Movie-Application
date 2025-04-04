import React from 'react'
import './style.css'

export const MovieCard = ({ data, imgPath }) => {

    return (data && data.map((item) => (
        <div className='movie' key={item.id}>
            <img src={item.poster_path ? imgPath + item.poster_path : 'film-empty-state.png'} alt={item.original_title} />
            <div className="movie-info">
                <h3>{item.original_title}</h3>
                <span className={item.vote_average >= 8 ? 'green' : item.vote_average >= 6 ? 'orange' : 'red'}>{item.vote_average}</span>
            </div>
            <div className="overview">
                <h3>Overview</h3>
                <p>{item.overview}</p>
            </div>
        </div>
    ))
    )
}
