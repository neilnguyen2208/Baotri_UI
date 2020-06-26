import React, { Component } from "react";
import './Header.css'
import mainLogo from '../../resources/logo.png'
import profilIcon from '../../resources/account_icon.png'
import { Redirect, withRouter } from "react-router-dom";
import { isLogin, isAdmin } from "../../pages/Login/Login.js";


class Header extends Component{
    constructor(props){
        super(props);
    }

    handleLogOut = ()=>{
        sessionStorage.removeItem('token');
        console.log('logout')
        this.setState({})
    }



    render(){
        const isAuthenticated = isLogin();
        let isAdminAccount = isAdmin();
        console.log("admin: " + isAdminAccount);
        let loginOrLogOut;
        if(!isAuthenticated)
            loginOrLogOut = <a href='/login'>Log In</a> ;
        else 
            loginOrLogOut = <a href="/" onClick={this.handleLogOut}>Log Out</a>;
        return(
            <header className="Header_Wrapper">
            <div className="Header">
                <nav className="Header_Navigation">
                    <div className="Header_Logo">
                        <a href="/">
                            <img className="Header_Logo_Image" src={mainLogo}></img>
                        </a>
                    </div>
                    {/* <div className="Header_Vertical_Line"></div> */}
                    <div className="Header_Row">
                        {/* <div className="Header_Horizontal_Line"></div> */}
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
                            {isAdminAccount ? <ul className="Item_"><a href="/admin">MANAGE</a></ul> : null}
                            <ul className="Item_Profile_Picture">
                                <img src={profilIcon}></img>
                                <div className="Item_Profile_Picture_Dropdown">
                                    <a href="/user/">Profile</a>
                                    {loginOrLogOut}
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="Header_Dock">
                <label className="Header_Inline_Dock">
                One of the most effective ways to improve your English Explore a bit to find out what we do. 
                </label>
                <br></br>
                <button className="Header_Explore" href="/">
                Explore a bit to find out what we do!
                </button>
            </div>

            </header>
        );
    }
}
export default withRouter(Header);