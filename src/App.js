import './css/style.css';
import React from 'react';
import Nav from './Nav'
import CryptoItem from './CryptoItem';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      films:[]
 };
  }

componentDidMount(){
  fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=2', {
    method: 'GET',
    headers: {
        'X-API-KEY': '0476947e-fcb5-4e3d-b459-129a114aaa1c',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => this.setState({films:json.films}))

 
 
}

       


  render() {
    return (
      <div className="myNodeFirstApp">
          <Nav/>
      <div className="container">
      {this.state.films.map(film=>
<CryptoItem key={film.filmId} film = {film}/>
)}
      </div>
          
       </div>
    );
  }
}
export default App;
