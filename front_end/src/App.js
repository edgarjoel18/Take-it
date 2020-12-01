import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Admin from './pages/Admin';
import Feed from './pages/Feed';
import Home from './pages/Home';
import './App.css';
import Navbar from './Components/NavBar/Navbar'

// React components
function App() {
  //const[listings,setListing] = useState(0);

  const listings = [
  {"id": 1, "title": "Title1", "type":"tester1", "price":"123", "description":"test desc 1"},
  {"id": 2, "title": "Title2", "type":"tester2", "price":"123", "description":"test desc 2"},
  {"id": 3, "title": "Title2", "type":"tester3", "price":"123", "description":"test desc 3"}
  ];


  return (
    <div className="App">
      
      <Navbar/>
      

      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/">
          <Home listings={listings}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
