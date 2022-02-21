
import './App.css';
import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import {
  BrowserRouter as Router,
  Routes,                   // Switch = Routes
  Route, 
  Link
} from 'react-router-dom'


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div className="App">

      {/* <Route path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/> */}

      <Header currentUser={this.state.currentUser} />
      
      <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignInAndSignUpPage/>}/>

      </Routes>

      </div>
    )
  }
}

export default App;
