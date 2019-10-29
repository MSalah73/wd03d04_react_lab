import React, {Component} from "react"
import './App.css'
import Films from './Films'
import Details from './Details'
import TMDB from './TMDB.js'
export default class App extends Component {
  constructor(props){
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state={
    films: TMDB.films,
    faves: [],
    current: {}
  }
  handleFaveToggle = (film) => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film)
    filmIndex === -1? faves.push(film): faves.splice(filmIndex, 1) 
    this.setState({faves})
    console.log(faves)
  }
  handleDetailsClick = (film) => {
    console.log("row details "+ film)
    this.setState({current: film})
  }
  
  render() {

    return (
    <div className="App">
      <div className="film-library">
        <Films films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}/> 
        <Details films={this.state.current}/>
      </div>
    </div>

    );
  }
}