import React from 'react'
import FilmPoster from './FilmPoster'
const FilmRow = (props) => {
	var date = new Date(props.releaseDate);
	return (
		<div className="film-row">
		  <FilmPoster poster_path={props.poster_path} />
		  <div className="film-summary">
		    <h1>{props.title}</h1>
		    <p>{date.getFullYear()}</p>
		  </div>
		</div>
	)
}

export default FilmRow