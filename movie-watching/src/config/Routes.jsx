import React from 'react'

import {Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

/**
 * Lớp Cấu hình các đường dẫn của component
 * @returns 
 */
export default function Routes() {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact // đường dẫn chính xác
                component={Home}
            />
        </Switch>
    )
}
