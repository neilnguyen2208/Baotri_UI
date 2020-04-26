import React, {Component} from 'react'
import Header from "../../components/Header/Header.js";
import './EnglishListening.css'
import Footer from '../../components/Footer/Footer';
import { withRouter, Redirect } from 'react-router-dom';
import { isLogin } from "../../pages/Login/Login.js";
import EnglishListeningItem from '../../components/EnglishListeningItem/EnglishListeningItem.js';

class EnglishListening extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Type of Listening"
                },
                {
                    id: 2,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 3,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 4,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 5,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 6,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 7,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 8,
                    title: "Type of Listening"
                }
                ,
                {
                    id: 9,
                    title: "Type of Listening"
                }
            ]
        }
        // const path = window.location.pathname;
        // console.log('path: ' + path);
    }

    render(){

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <EnglishListeningItem item={item}></EnglishListeningItem>
                </div>
            );
        })
        // let islogin = isLogin();
        
        // if(!isLogin)
        //     return  <Redirect path='/'></Redirect>

        return(
            <div className="Listening">
                <div className="Listening_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        <div className="Content_Row_Header">Learn English<div className="Header_Bold"> Listening</div></div>
                        <div className="Content_Row_Title">Choose a Category</div>
                        <div className="Content_Row_Items">
                           {cards}
                        </div>
                   </div>
                   <div className="Listening_Footer">
                       <Footer></Footer>
                   </div>
                </div>
         
            </div>
        );
    }

}

export default withRouter(EnglishListening);