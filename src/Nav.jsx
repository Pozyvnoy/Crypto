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
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/2560px-Binance_logo.svg.png" alt="" className="nav_img" />
                    <ul className="nav_list">
                        <li className="nav_item">
                            Home
                        </li>
                        <li className="nav_item">
                            Buy Crypto 
                        </li>
                        <li className="nav_item">
                          Markets 
                        </li>
                        <li className="nav_item" id= "last_nav_item">
                            Trade 
                        </li>
                    </ul>
                   
                </nav>
            </div>
        );
    }
}

export default Nav;