import React, {Component} from 'react'
import './Header.css'
import { Redirect } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.handleChatClick= handleChatClick.bind(this);
        this.state={
            dropdownChatItem: [
                {
                    name: "Chat 1 to 1",
                    link: "/"
                },
                {
                    name: "Room chat",
                    link: "/"
                }
            ]
        }
    }

    render(){
        return(
            <div class="header">
                <section class="header-grid-1">
                    <section class="col-1">
                        <div class="col-1-col-1">
                            Learn<br></br>Eng
                        </div>
                        <div class="col-1-col-2">
                            ing<br></br>lish
                        </div>
                    </section>
                    <section class="col-2">
                        <div class="col-2-row-1">
                        </div>
                        <div class="col-2-row-2">
                            <a href="/home"><label class="col-2-row-2-col-1">
                                LEARNING ENGLISH
                            </label></a>
                            <a href="/home"><label class="col-2-row-2-col-2">
                                VOCABULARY
                            </label></a>
                            <a href="/home"><label class="col-2-row-2-col-3">
                                GRAMMAR
                            </label></a>
                            <a href="/home"><label class="col-2-row-2-col-4" onClick={handleChatClick}>
                                CHAT
                            </label></a>
                            <label class="col-2-row-2-col-5" >
                                
                            </label>  
                            <label class="col-2-row-2-col-6">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/74614813_2350567138590702_6072388714871390208_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=TC_YKdJGNtMAX8wE74f&_nc_ht=scontent-sin6-1.xx&oh=11afbfca5000e981b61ed546f8c768af&oe=5EAA9E54"></img>
                            </label>  
                        </div>     
                    </section>
                </section>
            </div>
        );
    }
}

function handleChatClick(){
    
}

export default Header;