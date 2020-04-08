import React, { Component } from "react";
import './Header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            profile_img_src: "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/74614813_2350567138590702_6072388714871390208_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=iQ8i3VyfQzMAX_mQ6uy&_nc_ht=scontent-xsp1-2.xx&oh=406f413d0aeabb4cf2055bdd95c76144&oe=5EB28754"
        }
    }

    render(){
        return(
            <header className="Header">
                <nav className="Header_Navigation">
                    <div className="Header_Logo">
                        <a href="/">
                            <img className="Header_Logo_Image" src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/74614813_2350567138590702_6072388714871390208_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=iQ8i3VyfQzMAX_mQ6uy&_nc_ht=scontent-xsp1-2.xx&oh=406f413d0aeabb4cf2055bdd95c76144&oe=5EB28754"></img>
                        </a>
                    </div>
                    <div className="Header_Vertical_Line"></div>
                    <div class="Header_Row">
                        <div className="Header_Horizontal_Line"></div>
                        <div className="Header_Item">
                            <ul className="Item_LearnEnglish">
                                <a href="/">LEARN ENGLISH</a>
                            </ul>
                            <ul className="Item_Vocabulary">
                                <a href="/">VOCABULARY</a>
                            </ul>
                            <ul className="Item_Grammar">
                                <a href="/">GRAMMAR</a>
                            </ul>
                            <ul className="Item_Chat">
                                <a href="/">CHAT</a>
                            </ul>
                            <ul className="Item_Profile_Picture">
                                <img src={this.state.profile_img_src}></img>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;