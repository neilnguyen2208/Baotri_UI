import React, {Component} from 'react'
import Header from "../../components/Header/Header.js";
import {isAdmin, isLogin, getUserID} from '../../pages/Login/Login.js';
import './Chat.css'
import Footer from '../../components/Footer/Footer';
import { Redirect } from 'react-router-dom';
import delete_btn from '../../resources/delete_btn.png';

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
            ]
        }
        this.isPosting = false;
        this.sendMessage = this.sendMessage.bind(this);
        setInterval(() => {
            this.getMessage();
        }, (1000));
    }

    async getMessage () {
        if(this.isPosting)
            return;
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
        let message = document.getElementById("input").value;
        if(message!="") {
            this.isPosting = true;
            let token = sessionStorage.getItem("token");
            let response = await fetch("/api/v1/roomChat", { method: "POST", body: message, headers: {
                'Authorization': 'Bearer ' + token
            }});
            let responseMessage = await response.json();
            document.getElementById("input").value = "";
            console.log("Post: " + JSON.stringify(responseMessage));
        }
        this.isPosting = false;
    }

    async deleteMessage(item) {
        this.isPosting = true;
        let url = "/api/v1/roomChat?message=" + item.id;
        if(window.confirm("Do you want to delete the message \"" + item.content + "\"")) {
            let token = sessionStorage.getItem("token");
            let response = await fetch(url, {method: "DELETE", headers: {
                'Authorization': 'Bearer ' + token
            }});   
        }
        this.isPosting = false;
        this.fetchData();
    }

    render() {
        const isAuthenticated = isLogin();
        const isAdminAccount = isAdmin();
        if(!isAuthenticated) {
            return (<Redirect to="/login"></Redirect>);
        }
        // let userName = sessionStorage.getItem("username");
        let userID = getUserID();
        let cards = this.state.items.map((item) => {
            console.log("username: "+userID + "/" + item.userSentID);
            if(item.userSentID == userID) {
                return(
                <section className="RightSide" key={item.id}>
                    <img className="delete" onClick={()=>this.deleteMessage(item)} src={delete_btn} ></img>
                    <label className="user_sent">{item.userSentName}</label><br></br>
                    <label className="content">{item.content}</label><br></br>
                    <label className="time">{item.timeStamp}</label><br></br>
                </section>)
            }
            return (
                <section className="LeftSide" key={item.id}>
                    <img className="delete" onClick={()=>this.deleteMessage(item)} src= {delete_btn}></img>
                    <label className="user_sent">{item.userSentName}</label><br></br>
                    <label className="content">{item.content}</label><br></br>
                    <label className="time">{item.timeStamp}</label><br></br>
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
                        <textarea id="input" value={this.state.input} className="Chat_Input"></textarea>
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