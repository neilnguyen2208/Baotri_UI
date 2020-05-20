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
import AddNewWord from '../Components/AddNewWord/AddNewWord';

class DetailManagement extends Component {
    constructor(props) {
        super(props);
        this.audio = new Audio("");
        this.state = {
            items: [
            ],
            showPopup: false
        }
    }

    async componentDidMount() {
        await fetch(window.location.pathname.replace("admin", "api/v1"))
          .then(response => response.json())
          .then(data =>
           this.setState({
               items: data
           })
          );
        console.log("items: " + this.state.items);
    }

    render() {

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <LessonDetailManagementItem item={item} audio={this.audio} handleDelete={this.deleteVocabulary.bind(this)}></LessonDetailManagementItem>
                </div>
            );
        })

        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/admin/vocabCategories"></Redirect>
        }

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
                        <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                        <AdminMenu></AdminMenu>
                        <div className="Content_Row_Items">
                        <div className="Item Content_Row_Title">{title? title: "Lesson Name"}</div>
                        <div className="Item Content_Row_Control">
                            <Button className="Prev">Prev</ Button>
                            <label className="Class_Title">Title</label>
                            <Button className="Next">Next</Button>
                        </div>
                           {cards}
                           <div className="Item Add" onClick={this.showAddPopup.bind(this)}>+ Thêm từ vựng</div>
                        </div>
                   </div>
                   <div className="DetailManagement_Footer">
                       <Footer></Footer>
                   </div>
                </div>
                {
                    this.state.showPopup ? <AddNewWord handleSave={this.saveNewVocabulary.bind(this)} closePopup={this.showAddPopup.bind(this)}></AddNewWord>
                    : null
                }
            </div>
        );
    }

    
    showAddPopup () {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    saveNewVocabulary (item) {
        console.log(this.state.items);
        if(item.title != "")
            this.state.items.push(item);
            console.log(this.state.items);
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    editVocabulary (item) {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    deleteVocabulary (item) {
        this.state.items.splice(item);
        this.setState();
    }
}

export default withRouter(DetailManagement);