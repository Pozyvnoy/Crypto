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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kinopoisk-logo.svg/1200px-Kinopoisk-logo.svg.png" alt="" className="nav_img" />

                    <ul className="nav_list">
                        <li className="nav_item">
                            Главная
                        </li>
                        <li className="nav_item">
                            Сериалы
                        </li>
                        <li className="nav_item">
                            Контакты
                        </li>

                    </ul>
                    <div className="nav_wrapper_all">
                    <input className="nav_search" type="search" placeholder="Введите название " />
                    
                    <div className="wrapper_lupa">
                        
                        <i className="fa-solid fa-magnifying-glass nav_lupa"></i>
                    </div>
                    </div>
                   
                    
                </nav>
            </div>
        );
    }
}

export default Nav;