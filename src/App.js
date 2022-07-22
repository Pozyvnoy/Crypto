import './css/style.css';
import React from 'react';
import Nav from './Nav'
import CryptoItem from './CryptoItem';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  getData(){
    let url = 'sandbox-api.coinmarketcap.com'
    let params = {
      
      headers:{
        'X-CMC_PRO_API_KEY': '54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',  
          
      }
        
      }
    fetch(url,params)
    .then(response => response.json())
    .then(response => console.log(response))
  }
  componentDidMount (){
    this.getData()
  }

  render() {
    return (
      <div className="myNodeFirstApp">
          <Nav/>
          <CryptoItem/>
      </div>
    );
  }
}

export default App;
