import React, {Component} from 'react';
import './LessonManagement.css'
import { withRouter, Redirect } from 'react-router-dom';
import '../Components/LessonManagementItem/LessonManagementItem'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import LessonManagementItem from '../Components/LessonManagementItem/LessonManagementItem';
import PageTitle from '../../../components/PageTitle/PageTitle';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';
import NewVocabularyClass from '../Components/NewVocabularyClass/NewVocabularyClass';

class LessonManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
            ], 
            showPopup: false
        }
    }
    async componentDidMount() {
        await fetch(window.location.pathname.replace("admin", "api/v1"))
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
           this.setState({
               items: data
           })
          );
    }
    render() {

        console.log(this.state.items);
        let title = "";
        try {
            title = this.props.location.state.title ? this.props.location.state.title : "";   
        } catch (error) {
            return <Redirect to="/admin/vocabCategories"></Redirect>
        }
            
        console.log("title: "+ title);
        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <LessonManagementItem handleDelete={this.deleteVocabularyLesson.bind(this)}  handleEdit={this.editVocabularyLesson.bind(this)} item={item}></LessonManagementItem>
                </div>
            );
        })

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
                        <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                        <AdminMenu></AdminMenu>
                        <div className="Content_Row_Title">{title? title: "Class Name"}</div>
                        <div className="Content_Row_Items">
                            <div className="Item Add" onClick={this.showAddPopup.bind(this)}>+ Add Lesson</div>
                            {cards}
                        </div>
                    </div>
                    <div className="LessonManagement_Footer">
                        <Footer></Footer>
                    </div>
                </div>
                {
                    this.state.showPopup ? <NewVocabularyClass newClass = {this.newClass} handleEdit={this.editVocabularyLesson.bind(this)} handleSave ={this.saveNewVocabularyClass.bind(this)} closePopup={this.showAddPopup.bind(this)}></NewVocabularyClass>
                    : null
                }
            </div>
        )
    }

    showAddPopup () {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }
    
    saveNewVocabularyClass (item) {
        if(item.title != "")
            this.state.items.push(item);
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    deleteVocabularyLesson (item) {
        if(window.confirm("Are yor want to delete this lesson?")){
            this.state.items.splice(this.state.items.indexOf(item), 1);
            console.log(this.state.items);
            this.setState({
                items:  this.state.items
            });
        }
    }

    async editVocabularyLesson(item) {
        this.newClass = item;
        //await fetch()
        console.log(item);
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
}

export default withRouter(LessonManagement);