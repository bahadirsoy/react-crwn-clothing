
import './App.css';
import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import {
  BrowserRouter as Router,
  Routes,                   // Switch = Routes
  Route, 
  Link
} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      {/* <Route path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/> */}
      
      <Routes>

        <Route path='/' element={<HomePage />}/>

        <Route path='/shop' element={<ShopPage/>}/>

      </Routes>

    </div>
  );
}

export default App;
