import React from 'react';
import "./css/stylecard.css"
import "./css/style.css"
class CryptoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <div className="wrapperItem">
                <div className="item_card_wrapper">
                    <div className="header_card_wrapper">

                        <div className="card_over_black">

                        </div>
                        <div className="rating_wrapper">

                        </div>
                        <div className="item_card_rating">
                            {this.props.film.rating}
                        </div>
                       
                        <img src={this.props.film.posterUrl} alt="" className="film_card_poster" />
                        <button className="check_more">
                            <i className="fa-solid fa-angle-right"></i>  Подробнее
                        </button>
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
                        <div className="item_card_country">
                            {this.props.film.genre}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default CryptoItem;