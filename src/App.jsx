import React from 'react';
import './App.css';
import Home from './Home';
import Main from './Main';
import Song from './Song';
import Book from './Book';
import Contact from './Contact';
import SongShow from './SongShow';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



function App() {

let songs = ['Layla(Eric Clapton)', 'Purple Rain(Prince)', 'Comfortably Numb(Pink Floyd)', 'Kiss From A Rose(Seal)']

let books = [
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe'
  },

  {
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson'
  }
]

return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{ ' | ' }
          <Link to="/main">Main Page</Link>{ ' | ' }
          <Link to="/song">Favorite Songs</Link>{ ' | ' }
          <Link to="/book">Favorite Books</Link>{ ' | ' }
          <Link to="/contact">Contact</Link> 
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/song" render={() => <Song songs={songs} /> } />
        <Route exact path="/song/:id" render={(props) => <SongShow {...props} /> } />
        <Route exact path="/book" render={() => <Book books={books}  /> } />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
