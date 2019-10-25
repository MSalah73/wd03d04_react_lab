import React from 'react'
import FilmRow from './FilmRow'


const Films = (props) => {
	let allFilms = props.films.map(e => <FilmRow title={e.title} poster_path={e.poster_path} releaseDate={e.release_date} key={e.id} />)
	return (
		<div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {allFilms}
        </div>
	)
}

export default Films