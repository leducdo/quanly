import React from 'react';
import TuyenDung from '../page/tuyen-dung/tuyen-dung';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../page/trang-chu/HomePage';
import Auth from '../components/auth/auth';
import ProfilePage from '../page/profile/profile';
import LoginPage from '../page/login/login';
class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginPage}></Route>
                    <Route path='/profile' component={ProfilePage}></Route>
                    <Route path='/tuyen-dung' component={TuyenDung} ></Route>
                    <Route path='/home' component={HomePage}></Route>
                    <Route path='/' render={
                        () => (
                            <Auth orRedirectTo='/login' orRender={
                                <ProfilePage></ProfilePage>
                            }></Auth>
                        )
                    }></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainRouter