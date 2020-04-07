import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TechnicalQuery from './components/technicalqueries/TechnicalQueries';
import Tablebooking from './components/tablebooking/TableBooking';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Menu from './pages/Menu';
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register';
import LogoutForm from './components/auth/Logout';

import Header from './components/Header';


function AppRouter(){
    return(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/query' component={TechnicalQuery} />
            <Route exact path='/tablebooking' component={Tablebooking} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/logout' component={LogoutForm} />
            <Route exact path='/order' component={Order} />
        <Route exact path='/cart'  component={Cart} />
        <Route exact path='/success'  component={Success} />
        <Route exact path='/menu'  component={Menu} />
        </Switch>
        
  
    </BrowserRouter>
    );
}



export default AppRouter;