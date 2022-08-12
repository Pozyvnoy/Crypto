import React from "react";
import "../../css/style.css"
import "../../css/stylesimilar.css"
import { Link } from 'react-router-dom';


class SimilarFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div className="similar_wrapper">
                 <Link className='similar_link' to={`/films/${this.props.film.filmId}`}>
                 <div className="similar_header">
                <img src={this.props.film.posterUrl} alt="" className="similar_poster" />
                </div>
                <div className="similar_info">
                    <div className="similar_name">
                        {this.props.film.nameRu}
                    </div>
                </div>
                 </Link>
                
            </div>
        );
    }
}

export default SimilarFilm;