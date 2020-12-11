import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Feed from './pages/Feed';
import Home from './pages/Home';
import './App.css';
import Navbar from './Components/NavBar/Navbar'

// React components
function App() {

  //this all need to be changed to hold the Listings
  //might have to prop tunnel from Feed page to App

  //var ws = new WebSocket("ws://localhost:1234/ws");



//   const [message, setMessage] = React.useState('');
//   const [messages, setMessages] = React.useState(['']);

// const handleWebsocketMessage = (messageEvent) => {
// const rawMessages = JSON.parse(messageEvent.data);
//   setMessages(rawMessages);
// };
// React.useEffect(()=>{
//   websocket.addEventListener('message', handleWebsocketMessage );
// }, []);

// function getMessages(){
//   fetch(`/getNotes`)
//     .then(res => res.json()) // async (parse json)
//     .then(data => setMessages(data)); // also async
// }

// function handleClick(){
//   // just to test
//   // alert(message);

//   // create network call (js client call)
//  setMessage('');
//  // fetch(`/storeNote?note=${message}`)
//  //   .then(getMessages); // looks like method ref

//  websocket.send(message);
// }
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
          <Feed listings={listings}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
