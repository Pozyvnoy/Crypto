import React from 'react';
import Nav from '../Nav';
import "../css/stylecurrentcard.css"
import "../css/style.css"
import  {useParams}  from 'react-router-dom';
function CurrentFilmWrapper (props){
    let { filmId } = useParams();

    return(
        <CurrentFilm filmId={filmId}/>
    )
}
class CurrentFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film:{}
        };
    }

    getCurrentFilm(currfilm){
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${currfilm}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '0476947e-fcb5-4e3d-b459-129a114aaa1c',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => this.setState({ film:json }))
      }
      componentDidMount() {
          this.getCurrentFilm(this.props.filmId)
      }
    render() {
        return (
            <section className='current_film'>
                  <Nav />
                <div className="container">
                    <div className="current_wrapper">
                        <div className="film_left_wrapper">
                            <img src={this.state.film.posterUrl} alt="" className="current_poster" />
                            <button className="film_trailer_button">Смотреть трейлер</button>
                        </div>
                        <div className="film_right_wrapper">
                            <div className="film_name_ru">
                                {this.state.film.nameRu}
                            </div>
                            <div className="film_name_orig">
                               ({ this.state.film.nameOriginal })
                            </div>
        
                            <div className="film_length">
                                {this.state.film.filmLength }  
                            </div>
                            <div className="film_year">
                                {this.state.film.year} года
                            </div>
                            <div className="film_rating">
                               Рейтинг: {this.state.film.ratingKinopoisk}
                            </div>
                            <div className="film_description">
                                {this.state.film.description}
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        );
    }
}

export default CurrentFilmWrapper;