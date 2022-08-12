import React from "react";
import "./css/stylenav.css"
import NavSearchItem from "./NavSearch/NavSearchItem";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q:"",
            searchRes:[]
        };
        this.searchHandler = this.searchHandler.bind(this)
    }
    searchHandler(e){
        this.setState({q:e.target.value},this.getSearchByKeyword(this.state.q))
    }
    getSearchByKeyword(q){
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${q}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '22573046-e93d-4b7d-b7a0-e1c7828424e2',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => this.setState({ searchRes: json.films }))
    }

    render() {
            

        return (
            <div className="nav_wrapper">
                <nav>
                    <a href="/films" className="main_button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kinopoisk-logo.svg/1200px-Kinopoisk-logo.svg.png" alt="" className="nav_img" />
                    </a>
                    
                    <ul className="nav_list">
                        <li className="nav_item">
                        <a href="" className="nav_link nav_link_active">Главная </a> 
                        </li>
                        <li className="nav_item">
                        <a href="" className="nav_link nav_link_active">Актеры </a> 
                        </li>
                        <li className="nav_item">
                        <a  href="" className="nav_link nav_link_active">Контакты </a> 
                        </li>

                    </ul>
                        <div className="search-box" >
                            <input type="text" className="search-txt" placeholder="Название фильма" onChange={ this.searchHandler } value={this.state.q} />
                            <div className="search_result">
                            {this.state.searchRes.map(film => 
                        <NavSearchItem key={film.filmId} film={film} />
                            )}
                            </div>
                            <a className="search-btn" >
                            <i className="fa-solid fa-magnifying-glass search-lupa"></i>
                            </a>
                        </div>

                </nav>
            </div>
        );
    }
}

export default Nav;