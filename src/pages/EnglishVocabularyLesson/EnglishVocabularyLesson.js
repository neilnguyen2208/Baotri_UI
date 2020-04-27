import React, {Component} from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EnglishVocabularyLessonItem from '../../components/EnglishVocabularyLessonItem/EnglishVocabularyLessonItem';
import Footer from '../../components/Footer/Footer';
import './EnglishVocabularyLesson.css';
import PageTitle from '../../components/PageTitle/PageTitle';

class EnglishVocabularyLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Type of Class",
                },
                {
                    id: 2,
                    title: "Type of Class",
                }
                ,
                {
                    id: 3,
                    title: "Type of Class",
                }
                ,
                {
                    id: 4,
                    title: "Type of Class",
                },
                {
                    id: 5,
                    title: "Type of Class",
                }
                ,
                {
                    id: 6,
                    title: "Type of Class",
                }
            ]
        }
    }

    // async componentDidMount(){
    //     const response = await fetch(window.location.pathname);
    //     const result = await response.json();
    //     console.log(result);
    //     this.setState({
    //         items: result
    //     });
    // }

    render(){
        
        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/vocabulary"></Redirect>
        }
            
        console.log("title: "+ title);
        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <EnglishVocabularyLessonItem item={item}></EnglishVocabularyLessonItem>
                </div>
            );
        })
        return (
            <div className="VocabularyLesson">
                <div className="VocabularyLesson_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                    <div className="Content_Row">
                        {/* <div className="Content_Row_Header">Learn English<div className="Header_Bold"> Vocabulary</div></div> */}
                        <PageTitle prevTitle="Learn English" mainTitle="Vocabulary"></PageTitle>
                        <div className="Content_Row_Title">{title? title: "Class Name"}</div>
                        <div className="Content_Row_Items">
                        {cards}
                        </div>
                    </div>
                    <div className="VocabularyLesson_Footer">
                        <Footer></Footer>
                    </div>
                </div>
        
            </div>
        );
    }

}

export default withRouter(EnglishVocabularyLesson);