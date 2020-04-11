import React, {Component} from 'react'
import Header from "../../components/Header/Header.js";
import './EnglishListening.css'
import Footer from '../../components/Footer/Footer';
import EnglishVocabularyItem from '../../components/EnglishVocabularyItem/EnglishVocabularyItem.js';

class EnglishListening extends Component{

    constructor(){
        super();
        this.state = {
            items: [
                {
                    name: "Type of Listening"
                },
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
                ,
                {
                    name: "Type of Listening"
                }
            ]
        }
    }

    render(){

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item">
                    <EnglishVocabularyItem item={item}></EnglishVocabularyItem>
                </div>
            );
        })

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

export default EnglishListening;