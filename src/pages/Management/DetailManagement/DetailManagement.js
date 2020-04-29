import React, {Component} from 'react';
import './DetailManagement.css';
import { withRouter, Redirect } from 'react-router-dom';
import '../Components/VocabularyManagementItem/VocabularyManagementItem';
import Header from '../../../components/Header/Header';
import { Button } from 'reactstrap';
import Footer from '../../../components/Footer/Footer';
import LessonDetailManagementItem from '../Components/LesonDetailManagementItem/LessonDetailManagementItem';
import PageTitle from '../../../components/PageTitle/PageTitle';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';

class DetailManagement extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
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
            ],
            userinfo: {
                src: "https://salt.tikicdn.com/ts/categoryblock/c3/01/eb/41ed16d900533ddf279c3bd795b51a90.png",
                displayname: "NVA",
                gmail : "nva@gmail.com"
            }
        }
    }

    render() {

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <LessonDetailManagementItem item={item} audio={this.audio}></LessonDetailManagementItem>
                </div>
            );
        })

        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/admin/vocabulary/1"></Redirect>
        }

        let userinfo = this.state.userinfo;

        return(
            <div className="DetailManagement">
                 <div className="DetailManagement_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        {/* <div className="Content_Row_Header">Manage<div className="Header_Bold"> Your Page</div></div> */}
                        <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                        <div className="UserInfo">
                            <div className="Avatar">
                                <img className="Avatar" src={userinfo.src} />
                            </div>
                            <div className="UserDetail">
                                <div className="DisplayName">
                                    {userinfo.displayname}
                                </div>
                                <div className="Gmail">
                                    {userinfo.gmail}
                                </div>
                                <div className="Logout">
                                    <button className="LogoutButton">Logout</button>
                                </div>
                            </div>
                        </div>
                        <AdminMenu></AdminMenu>
                        <div className="Content_Row_Items">
                        <div className="Item Content_Row_Title">{title? title: "Lesson Name"}</div>
                        <div className="Item Content_Row_Control">
                            <Button className="Prev">Prev</ Button>
                            <label className="Class_Title">Title</label>
                            <Button className="Next">Next</Button>
                        </div>
                           {cards}
                           <div className="Item Add" onClick={this.handleAdd}>+ Thêm từ vựng</div>
                        </div>
                   </div>
                   <div className="DetailManagement_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }

    handleAdd () {
        alert("Clicked");
    }
}

export default withRouter(DetailManagement);