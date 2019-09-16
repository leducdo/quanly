import React from 'react';
import TuyenDung from '../page/tuyen-dung/tuyen-dung';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    
                    <Route path='/tuyen-dung' component={TuyenDung} ></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainRouter