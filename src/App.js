import './css/style.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import CurrentFilmWrapper from './CurrentFilm/CurrentFilm';
import FilmList from './FilmList/FilmList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      

    };
  }
  
  render() {
    return (
      <div className="myNodeFirstApp">
           <Routes>
             <Route path="/films" element={<FilmList/>} />
             <Route path="/films/:filmId" element={<CurrentFilmWrapper/>}/>
           </Routes>
      </div>
    );
  }
}
export default App;
