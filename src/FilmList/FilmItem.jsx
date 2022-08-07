import React from 'react';

import "../css/stylecard.css"
import "../css/style.css"
import { Link } from 'react-router-dom';
class FilmItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    
    render() {
        let ratingClass = ''
        if(this.props.film.rating <= 6.5){
            ratingClass = "bad_rating"
        }
        return (

            <div className="wrapperItem">
                <div className="item_card_wrapper ">
                    <div className="header_card_wrapper">

                        <div className="card_over_black">

                        </div>
                        <div className="rating_wrapper ">

                        </div>
                        <div className={`item_card_rating ${ratingClass}`}>
                            {this.props.film.rating}
                        </div>
                       
                        <img src={this.props.film.posterUrl} alt="" className="film_card_poster" />
                        <Link to={`${this.props.film.filmId}`}  className="check_more">
                            <i className="fa-solid fa-angle-right"></i>  Подробнее
                        </Link>
                    </div>

                    <div className="item_card_info">

                        <div className="item_card_name">
                            {this.props.film.nameRu}
                        </div>
                        <div className="item_card_year">
                          {this.props.film.year}
                        </div>
                        <div className="item_card_country">
                            {this.props.film.country}
                        </div>
                        <div className="item_card_genre">
                            {this.props.film.genres.map((genre) => <div className="film_genre"> {genre.genre}

                            </div>  )}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default FilmItem;