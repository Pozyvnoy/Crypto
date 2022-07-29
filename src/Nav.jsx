import React from "react";
import "./css/stylenav.css"
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="nav_wrapper">
                <nav>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kinopoisk-logo.svg/1200px-Kinopoisk-logo.svg.png" alt="" className="nav_img" />
                    <i className="fa-solid fa-magnifying-glass nav_lupa"></i>
                    <input className="nav_search" type="search" />
                   
                </nav>
            </div>
        );
    }
}

export default Nav;