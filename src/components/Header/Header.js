import React, { Component } from "react";
import './Header.css'
import mainLogo from '../../resources/logo.png'
import profilIcon from '../../resources/account_icon.png'
import { Redirect, withRouter } from "react-router-dom";
import { isLogin } from "../../pages/Login/Login.js";


class Header extends Component{
    constructor(props){
        super(props);
    }

    handleLogOut = ()=>{
        localStorage.removeItem('token');
        console.log('logout')
        this.setState({})
    }



    render(){
        const isAuthenticated = isLogin();
        let loginOrLogOut;
        if(!isAuthenticated)
            loginOrLogOut = <a href='/login'>Log In</a> ;
        else 
            loginOrLogOut = <a href="/" onClick={this.handleLogOut}>Log Out</a>;
        return(
            <header className="Header">
                <nav className="Header_Navigation">
                    <div className="Header_Logo">
                        <a href="/">
                            <img className="Header_Logo_Image" src={mainLogo}></img>
                        </a>
                    </div>
                    <div className="Header_Vertical_Line"></div>
                    <div className="Header_Row">
                        <div className="Header_Horizontal_Line"></div>
                        <div className="Header_Item">
                            <ul className="Item_LearnEnglish">
                                <a href="/">LEARN ENGLISH</a>
                                <div className="Item_LearnEnglish_Dropdown">
                                    <a href="/">Home</a>
                                    <a href="/aboutus">About Us</a>
                                </div>
                            </ul>
                            <ul className="Item_Vocabulary">
                                <a href="/vocabCategories">VOCABULARY</a>
                            </ul>
                            <ul className="Item_Grammar">
                                <a href="/grammar">GRAMMAR</a>
                            </ul>
                            <ul className="Item_Chat">
                                <a href="#">CHAT</a>
                                <div className="Item_Chat_Dropdown">
                                    <a href="/">1 vs 1</a>
                                    <a href="/">Room Chat</a>
                                </div>
                            </ul>
                            <ul className="Item_Profile_Picture">
                                <img src={profilIcon}></img>
                                <div className="Item_Profile_Picture_Dropdown">
                                    <a href="/">Profile</a>
                                    {loginOrLogOut}
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
export default withRouter(Header);