import React, {Component} from 'react';
import './EnglishVocabularyManagement.css';
import { withRouter } from 'react-router-dom';
import VocabularyManagementItem from '../Components/VocabularyManagementItem/VocabularyManagementItem';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PageTitle from '../../../components/PageTitle/PageTitle';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';

class EnglishVocabularyManagement extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Type of Vocabulary",
                },
                {
                    id: 2,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 3,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 4,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 5,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 6,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 7,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 8,
                    title: "Type of Vocabulary",
                }
                ,
                {
                    id: 9,
                    title: "Type of Vocabulary",
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
                    <VocabularyManagementItem item={item}></VocabularyManagementItem>
                </div>
            );
        })

        let userinfo = this.state.userinfo;

        return(
            <div className="VocabularyManagement">
                <div className="VocabularyManagement_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        {/* <div className="Content_Row_Header">Manage <div className="Header_Bold"> Your Page</div></div> */}
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
                        <div className="Content_Row_Title">Choose a Category</div>
                        <div className="Content_Row_Items">
                            <div className="Item Add" onClick={this.handleAdd}>+ Thêm danh mục</div>
                           {cards}
                        </div>
                   </div>
                   <div className="VocabularyManagement_Footer">
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

export default withRouter(EnglishVocabularyManagement);