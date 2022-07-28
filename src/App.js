import './css/style.css';
import React from 'react';
import Nav from './Nav'
import CryptoItem from './CryptoItem';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      items:[]
 };
  }

componentDidMount(){
  let url = "/api/?get=rates&pairs=USDRUB,EURGBP,GBPRUB,EURJPY,EURRUB&key=bbd1ebae971bc122315c8ba93362750f"
  const params = {
    method: 'GET',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    
    }
  };
  fetch(url, params)
    .then(response => response.json())
    .then(
      result =>{
        this.setState({items:Object.entries(result.data)})

      })

}

       


  render() {
    return (
      <div className="myNodeFirstApp">
          <Nav/>
          {this.state.items.map( item=>
<CryptoItem item = {item}/>
)}
       </div>
    );
  }
}
export default App;
