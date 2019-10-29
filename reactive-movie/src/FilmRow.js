import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
import './index.css'
const FilmRow = (props) => {
	var date = new Date(props.releaseDate);
	let handleDetailsClick = (film) => {
		console.log("row details added already in app.js "+ film)
	}
	
	return (
		<div onClick={(film) => handleDetailsClick(props.title)} className="film-row">
		  <FilmPoster poster_path={props.poster_path} />
		  <div className="film-summary">
		  	<Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
		    <h1>{props.title}</h1>
		    <p>{date.getFullYear()}</p>
		  </div>
		</div>
	)
}

export default FilmRow
