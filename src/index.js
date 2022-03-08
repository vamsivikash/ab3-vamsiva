import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Promotions from './promotions';
import Home from './Home';
import AddPromo from './AddPromo';
import About from './About';
import BookRides from './BookRides';
import Reserve from './Reserve';

ReactDOM.render(
  <BrowserRouter>
    <Home />
    <Routes>
        <Route exact path="/App" element={ <App /> }> </Route>
        <Route exact path="/Offers" element={ <Promotions /> }> </Route>
        <Route exact path="/Redeem" element= { <AddPromo /> }></Route>
        <Route exact path="/About" element= { <About /> }></Route>
        <Route exact path="/Ride" element= { <BookRides /> }></Route>
        <Route exact path="/Reserve" element= { <Reserve /> }></Route>
    </Routes>

  </BrowserRouter>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. 
reportWebVitals();
