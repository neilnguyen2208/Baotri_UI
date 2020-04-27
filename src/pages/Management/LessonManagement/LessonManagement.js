import React, {Component} from 'react';
import './LessonManagement.css'
import { withRouter, Redirect } from 'react-router-dom';
import '../Components/LessonManagementItem/LessonManagementItem'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import LessonManagementItem from '../Components/LessonManagementItem/LessonManagementItem';
import PageTitle from '../../../components/PageTitle/PageTitle';

class LessonManagement extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
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
            ],
            userinfo: {
                src: "https://salt.tikicdn.com/ts/categoryblock/c3/01/eb/41ed16d900533ddf279c3bd795b51a90.png",
                displayname: "NVA",
                gmail : "nva@gmail.com"
            }
        }
    }
    render() {

        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/admin/vocabulary"></Redirect>
        }
            
        console.log("title: "+ title);
        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <LessonManagementItem item={item}></LessonManagementItem>
                </div>
            );
        })

        let userinfo = this.state.userinfo;
        return(
            <div className="LessonManagement">
                <div className="LessonManagement_Header">
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
                        <div className="Menu">
                            <div className="MenuItem">
                                Account Center
                            </div>
                            <div className="MenuItem">
                                Grammar Manager
                            </div>
                            <div className="MenuItem">
                                Vocabulary Manager
                            </div>
                            <div className="MenuItem">
                                Listening Manager
                            </div>
                            <div className="MenuItem">
                                User Manager
                            </div>
                            <div className="MenuItem">
                                Chat Manager
                            </div>
                        </div>
                        <div className="Content_Row_Title">{title? title: "Class Name"}</div>
                        <div className="Content_Row_Items">
                            <div className="Item Add" onClick={this.handleAdd}>+ Add Lesson</div>
                            {cards}
                        </div>
                    </div>
                    <div className="LessonManagement_Footer">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }

    handleAdd () {
        alert("Clicked");
    }
}

export default withRouter(LessonManagement);