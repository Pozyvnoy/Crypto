import React from 'react';
import "../css/style.css"
import { Link } from 'react-router-dom';
import "../css/stylenavres.css"

class NavSearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="search_item_wrapper">
                <Link className='search_link' to={`/films/${this.props.film.filmId}`}>
                <i class="fa-solid fa-film search_icon"></i>
                <div className="search_item_name">
                    {this.props.film.nameRu} 
                </div>
                <div className="search_item_year">
                    {this.props.film.year}
                </div>
                </Link>
                
            </div>
        );
    }
}

export default NavSearchItem;


