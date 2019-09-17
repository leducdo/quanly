import React from 'react';
import './login.scss';

class LoginPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="mainLogin" >
                    <div className="imgLogin" >
                        <div className="bodyLogin" >
                            <h1>Đăng nhập</h1>
                            <div className="userPassWord-forgot-btn" >
                                    <label > Taì khoản </label>
                                    <input type='text'  placeholder="Tài khoản"></input>
                                    <hr  ></hr>
                                    <label > Mật khẩu </label>
                                    <input type='password'  placeholder="Mật khẩu"></input>
                                    <a href='#' >Quên mật khẩu ? </a><br></br>
                                    <button className='login' >Đăng nhập</button>
                            </div>
                            <div className="checkbox-link-btn">

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LoginPage;