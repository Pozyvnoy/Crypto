import React from 'react';
import "../../css/style.css"
import "../../css/styletrailer.css"
class CurrentTrailerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trailer: {}
        };
    }
    getTrailer(filmId) {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/videos`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '22573046-e93d-4b7d-b7a0-e1c7828424e2',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => this.setState({ trailer: json.items[0] }))
    }
    componentDidMount() {
        this.getTrailer(this.props.filmId)
    }
    render() {
        
        let trailerPlayer = <iframe is="x-frame-bypass" src={this.state.trailer.url} width="1000" height="500"></iframe>
        if (this.state.trailer.site == "YOUTUBE") {
            trailerPlayer = <iframe width="1000" height="500" src={this.state.trailer.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }

        if (!this.state.trailer) {
            trailerPlayer = (
                <div className='no_film_trailer'>
                    К этому фильму нет трейлера
                </div>
            )
            
        }
        return (
            <div className="trailer_wrapper">
                <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
                <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
                {trailerPlayer}
            </div>
            
        );
    }
}

export default CurrentTrailerItem;