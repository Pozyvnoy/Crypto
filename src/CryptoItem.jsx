import React from 'react';
import "./css/stylecard.css"
import "./css/style.css"
class CryptoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
                <div className="wrapperItem">
                    <div className="item_card_wrapper">
                        <div className="item_card_logo">
                            <img src="
                            https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png" alt="" className="bitcoin" />
                        </div>
                        <div className="item_card_info">
                            <div className="item_card_price">
                                Current Price
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wrapperItem">
                    <div className="item_card_wrapper">
                        <div className="item_card_logo">
                            <img src="
                          https://w7.pngwing.com/pngs/786/58/png-transparent-coin-crypto-lite-litecion-ltc-crypto-currency-and-coin-icon-thumbnail.png   " alt="" className="bnb" />
                        </div>
                        <div className="item_card_info">
                            <div className="item_card_price">
                                Current Price
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wrapperItem">
                    <div className="item_card_wrapper">
                        <div className="item_card_logo">
                            <img src="
                            https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png" alt="" className="ether" />
                        </div>
                        <div className="item_card_info">
                            <div className="item_card_price">
                                Current Price
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wrapperItem">
                    <div className="item_card_wrapper">
                        <div className="item_card_logo">
                            <img src="
                            https://s2.coinmarketcap.com/static/img/coins/200x200/74.png" alt="" className="dogecoin" />
                        </div>
                        <div className="item_card_info">
                            <div className="item_card_price">
                                Current Price
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wrapperItem">
                    <div className="item_card_wrapper">
                        <div className="item_card_logo">
                            <img src="
                           https://ton.org/download/ton_symbol.png" alt="" className="toncoin" />
                        </div>
                        <div className="item_card_info">
                            <div className="item_card_price">
                                Current Price
                            </div>

                        </div>
                    </div>
                </div>  
            </div>
           
        );
    }
}

export default CryptoItem;