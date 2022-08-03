import './css/style.css';
import React from 'react';
import Nav from './Nav'
import CryptoItem from './CryptoItem';
import CurrentFilm from './CurrentFilm';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      pageNumber: 1,
      maxPage: 1,

    };
    this.listOfFilms = this.listOfFilms.bind(this)
  }

  listOfFilms(back) {
    if (back) {
      if (this.state.pageNumber > 1) {
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }))
      }
      else return
    }
    else {
      if (this.state.pageNumber < this.state.maxPage) {
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }))
      }
      else return
    }
    this.getFilms(this.state.pageNumber)
  }
  getFilms(page) {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '0476947e-fcb5-4e3d-b459-129a114aaa1c',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => this.setState({ films: json.films, maxPage: json.pagesCount }))
  }
    // getCurrentFilm(currfilm){
    //   fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${currfilm}`, {
    //   method: 'GET',
    //   headers: {
    //     'X-API-KEY': '0476947e-fcb5-4e3d-b459-129a114aaa1c',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(res => res.json())
    //   // .then(json => console.log(json))
    //   .then(json => this.setState({ films: json.films, maxPage: json.pagesCount }))
    // }

  componentDidMount() {
    this.getFilms(this.state.pageNumber)
  
  }




  render() {
    return (
      <div className="myNodeFirstApp">
        <Nav />
        <div className="container">
          {this.state.films.map(film =>
            <CryptoItem key={film.filmId} film={film} />
          )}
        </div>
        <div className="button_page_wrap">
          <button className="page_left" onClick={() => { this.listOfFilms(true) }} >  <i className="fa-solid fa-arrow-left"></i></button>
          <span className="page_number">{this.state.pageNumber} </span>
          <button className="page_right" onClick={() => { this.listOfFilms(false) }} >  <i className="fa-solid fa-arrow-right"></i></button>
          
        </div>
          {/* <div className="container">
           {this.state.films.map(film =>
            <CurrentFilm key={film.filmId} film={film} />
          )}
          </div> */}
      </div>
    );
  }
}
export default App;
