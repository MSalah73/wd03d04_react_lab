import React, {Component} from "react"
import './App.css'
import Films from './Films'
import Details from './Details'
import TMDB from './TMDB.js'
export default class App extends Component {
  render() {

    return (
    <div className="App">
      <div className="film-library">
        <Films films={TMDB.films}/> 
        <Details/>
      </div>
    </div>

    )
  }
}