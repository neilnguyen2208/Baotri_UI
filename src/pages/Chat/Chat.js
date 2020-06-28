import React, {Component} from 'react'
import Header from "../../components/Header/Header.js";
import {isAdmin, isLogin} from '../../pages/Login/Login.js';
import './Chat.css'
import Footer from '../../components/Footer/Footer';
import { Redirect } from 'react-router-dom';

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: [
            ]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        setInterval(() => {
            this.getMessage();
        }, (1000));
    }

    async getMessage () {
        let token = sessionStorage.getItem("token");
        let url = "/api/v1/roomChat";
        if(this.state.items.length > 0) {
            url = "/api/v1/roomChat?lastMessID=" + this.state.items[this.state.items.length-1].id;
        }
        let response = await fetch( url, {headers: {
            'Authorization': 'Bearer ' + token
        }});
        let message = await response.json();
        let length = this.state.items.length;
        if(message.length>0) {
            this.setState({items: this.state.items.concat(message)});
        }
        if(length != this.state.items.length) {
            this.scrollBottom();
        }
        console.log(this.state.items);
    }

    async componentDidMount() {
        this.fetchData();
    }

    async fetchData (queryParam) {
        let token = sessionStorage.getItem("token");
        let url = "/api/v1/roomChat";
        if(queryParam != null) {
            url = "/api/v1/roomChat?lastMessID=" + queryParam;
        }
        let response = await fetch( url, {headers: {
            'Authorization': 'Bearer ' + token
        }});
        let message = await response.json();
        if(queryParam!= null) {
            this.setState({items: this.state.items.concat(message)});
        }
        else {
            this.setState({items: message});
        }
        if(message.length > 0) {
            this.scrollBottom();
        }
        console.log(this.state.items);
    }

    scrollBottom  () {
        var content = document.getElementById("content");
        if(content) {
            content.scrollTop = content.scrollHeight;
        }
    }

    async sendMessage () {
        let message = this.state.input;
        let token = sessionStorage.getItem("token");
        let response = await fetch("/api/v1/roomChat", { method: "POST", body: message, headers: {
            'Authorization': 'Bearer ' + token
        }});
        let responseMessage = await response.json();
        console.log("Post: " + JSON.stringify(responseMessage));
        this.getMessage();
        this.setState({input: ""});
    }

    handleInputChange(event) {
        this.setState({input: event.target.value});
    }

    render() {
        const isAuthenticated = isLogin();
        if(!isAuthenticated) {
            return (<Redirect to="/login"></Redirect>);
        }
        let userName = sessionStorage.getItem("username");
        let cards = this.state.items.map((item) => {
            console.log("username: "+userName + "/" + item.userSentName);
            if(item.userSentName === userName) {
                return(
                <section className="RightSide" key={item.id}>
                    <text>{item.userSentName}</text><br></br>
                    <label>{item.content}</label><br></br>
                    <text>{item.timeStamp}</text><br></br>
                </section>)
            }
            return (
                <section className="LeftSide" key={item.id}>
                   <text>{item.userSentName}</text><br></br>
                    <label>{item.content}</label><br></br>
                    <text>{item.timeStamp}</text><br></br>
                </section>
            );
        })
        return (

            <div className="Chat">
                <div className="Chat_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                    <div className="Chat_Title">ROOM CHAT</div>
                   <div id="content" className="Content_Row">
                       {cards}
                   </div>
                   <div className="Chat_Send">
                        <textarea id="input" value={this.state.input} className="Chat_Input" onChange={this.handleInputChange}></textarea>
                        <button className="Send" onClick={this.sendMessage}>Send</button>
                   </div>
                   <div className="Chat_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }

}

export default Chat;