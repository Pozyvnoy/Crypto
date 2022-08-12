import React from 'react';
import Nav from '../Nav';

import { Swiper, SwiperSlide } from 'swiper/react';
import SimilarFilm from './SimilarSlider/SimilarFilm';
import 'swiper/css';
import "../css/stylecurrentcard.css"
import "../css/style.css"
import { useParams } from 'react-router-dom';
import CurrentTrailelItem from './CurrentTrailer/CurrentTrailerItem';
function CurrentFilmWrapper(props) {
    let { filmId } = useParams();

    return (
        <CurrentFilm filmId={filmId} />
    )
}
class CurrentFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {},
            simFilm: [],
            trailerVisible: false,
        };
        this.trailerToggleModal = this.trailerToggleModal.bind(this)
    }
    getSimilarFilm(filmId) {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '22573046-e93d-4b7d-b7a0-e1c7828424e2',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => this.setState({ simFilm: json.items }))
    }
    getCurrentFilm(currfilm) {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${currfilm}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '22573046-e93d-4b7d-b7a0-e1c7828424e2',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => this.setState({ film: json }))
    }
    componentDidMount() {
        this.getCurrentFilm(this.props.filmId)
        this.getSimilarFilm(this.props.filmId)
    }
    trailerToggleModal(){
        
    this.setState(state => ({trailerVisible:!state.trailerVisible } ),()=> document.documentElement.style.overflow = this.state.trailerVisible ? 'hidden':'visible')
    }
    render() {
        
        let trailerContent = ""
        if(this.state.trailerVisible){
            trailerContent = <div className="current_trailer">
                <div className="trailer_cross">
                <i class="fa-solid fa-xmark cross_mark" onClick={this.trailerToggleModal} ></i>
                </div>
            <CurrentTrailelItem filmId={this.props.filmId} />
                            </div>
        }
        return (
            <section className='current_film'>
                <Nav />
                <div className="container">
                    <div className="current_wrapper">
                        <div className="film_left_wrapper">
                            <img src={this.state.film.posterUrl} alt="" className="current_poster" />
                            <div className="film_length">
                                {this.state.film.filmLength}  минут(ы)
                            </div>
                            <div className="film_year">
                                {this.state.film.year} года
                            </div>
                            <div className="film_rating">
                                Рейтинг: {this.state.film.ratingKinopoisk}
                            </div>
                            <button className="film_trailer_button" onClick={this.trailerToggleModal}>Смотреть трейлер</button>
                        </div>
                        <div className="film_right_wrapper">
                            <div className="film_name_ru">
                                {this.state.film.nameRu}
                            </div>
                            <div className="film_name_orig">
                                {this.state.film.nameOriginal}
                            </div>


                            <div className="film_description">
                                {this.state.film.description}
                            </div>

                        </div>
                    </div>



                    <Swiper className='sim_swiper'
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {this.state.simFilm.map(film => <SwiperSlide key={film.filmId}>
                            <SimilarFilm film={film} />
                        </SwiperSlide>
                        )}
                    </Swiper>



                </div>
                        {trailerContent}
            </section>


        );
    }
}

export default CurrentFilmWrapper;