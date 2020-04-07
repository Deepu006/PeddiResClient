import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './../App';
import Order from '../pages/Order';
import FileNotFound from '../pages/FileNotFound';
import Cart from '../pages/Cart';
import Success from '../pages/Success';
import Menu from '../pages/Menu';

const AppRouter = () => (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/order' component={Order} />
        <Route path='/cart'  component={Cart} />
        <Route path='/success'  component={Success} />
        <Route path='/menu'  component={Menu} />
        <Route component={FileNotFound} />
    </Switch>
    </BrowserRouter>
);

export default AppRouter;