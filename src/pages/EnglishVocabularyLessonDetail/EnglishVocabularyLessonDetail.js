import React, {Component} from 'react';
import './EnglishVocabularyLessonDetail.css';
import { withRouter, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EnglishWordItem from '../../components/EnglishWordItem/EnglishWordItem';
import { Button } from 'reactstrap';

class EnglishVocabularyLessonDetail extends Component {
    constructor(props) {
        super(props);
        this.audio = new Audio("");
        this.state = {
            items: [
                { 
                    id: 1, 
                    name: "Name",
                    sound: "http://soundbible.com/mp3/Boat%20Horn-SoundBible.com-15322206.mp3",
                    pronunciation: "Pronunciation",
                    meaning:"The meaning of this word. The meaning of this word. The meaning of this word"
                },
                { 
                    id: 2, 
                    name: "Name",
                    sound: "http://soundbible.com/mp3/Murder_at_Quarry-Ghost_Rider-849689243.mp3",
                    pronunciation: "Pronunciation",
                    meaning:"The meaning of this word. The meaning of this word. The meaning of this word"
                },
                { 
                    id: 3, 
                    name: "Name",
                    sound: "http://soundbible.com/mp3/Airplane_Fly_Over-Mike_Koenig-1062933207.mp3",
                    pronunciation: "Pronunciation",
                    meaning: "The meaning of this word. The meaning of this word. The meaning of this word"
                },
                { 
                    id: 4, 
                    name: "Name",
                    sound: "http://soundbible.com/mp3/Fisher%20Cat-SoundBible.com-2044465299.mp3",
                    pronunciation: "Pronunciation",
                    meaning:"The meaning of this word. The meaning of this word. The meaning of this word"
                }
            ]
        }
    }

    render() {
        let cards = this.state.items.map((item)=>{

            return(
                <div className="Item" key={item.id}>
                    <EnglishWordItem item={item} audio={this.audio}></EnglishWordItem>
                </div>
            );
        })

        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/vocabulary/1"></Redirect>
        }

        return(
            <div className="EnglishVocabularyLessonDetail">
                 <div className="EnglishVocabularyLessonDetail_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        <div className="Content_Row_Header">Learn English<div className="Header_Bold"> Vocabulary</div></div>
                        <div className="Content_Row_Items">
                        <div className="Item Content_Row_Title">{title? title: "Lesson Name"}</div>
                        <div className="Item Content_Row_Control">
                            <Button className="Prev">Prev</ Button>
                            <label className="Class_Title">Title</label>
                            <Button className="Next">Next</Button>
                        </div>
                           {cards}
                        </div>
                   </div>
                   <div className="EnglishVocabularyLessonDetail_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EnglishVocabularyLessonDetail);