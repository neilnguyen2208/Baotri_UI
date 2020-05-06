import React, {Component} from 'react';
import './EnglishVocabularyLessonDetail.css';
import { withRouter, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EnglishWordItem from '../../components/EnglishWordItem/EnglishWordItem';
import { Button } from 'reactstrap';
import PageTitle from '../../components/PageTitle/PageTitle';

class EnglishVocabularyLessonDetail extends Component {
    constructor(props) {
        super(props);
        this.audio = new Audio("");
        this.state = {
            items: [
            ]
        }
    }

    componentDidMount() {
        fetch('/api/v1' + window.location.pathname)
        .then(respone => respone.json())
        .then(data => this.setState({
            items: data
        }))
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
                        {/* <div className="Content_Row_Header">Learn English<div className="Header_Bold"> Vocabulary</div></div> */}
                        <PageTitle prevTitle="Learn English" mainTitle="Vocabulary"></PageTitle>
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