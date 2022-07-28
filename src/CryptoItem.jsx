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
//                     <div className="item_card_wrapper">
//                         <div className="item_card_logo">
//                             <img src="
//                             https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png" alt="" className="bitcoin" />
//                         </div>
//                         <div className="item_card_info">
//                             <div className="item_card_name">
//                                 {this.props.item[0]}
//                             </div>
//                             <div className="item_card_price">
//                                 Current Price: {this.props.item[1]}
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
                </div>
                
        );
    }
}

export default CryptoItem;