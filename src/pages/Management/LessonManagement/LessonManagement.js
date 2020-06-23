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
               items: data,
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
                    <LessonManagementItem handleDelete={this.deleteVocabularyLesson.bind(this)}  handleEdit={this.editClick.bind(this)} item={item}></LessonManagementItem>
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
    
    async saveNewVocabularyClass (item) {
        let token = sessionStorage.getItem("token");
        let pathName = window.location.pathname;
        let path = pathName.split("/");
        console.log(path + "title: " + item.title);
        if(path.length<1 || item.title == "") {
            alert("Invalid Lesson!");
            return;
        }
        let url = '/api/v1/vocabCategories/' + path[path.length-1] +'/lessons';
        console.log("url: " + url);
        const requestOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(item)
        }
        try {
            let response = await fetch(url, requestOption);
            let data = await response.json();
            console.log("data: " + JSON.stringify(data));
            this.state.items.push(data)
            this.setState({
                showPopup: !this.state.showPopup
            })   
            alert("Insert success!");
        }
        catch (e) {
            alert("Insert fail!") ;
        }

    }

    async deleteVocabularyLesson (item) {
        if(window.confirm("Are yor want to delete this lesson?")){
            let url = '/api/v1/vocabLessons/' + item.id;
            let token = sessionStorage.getItem("token");
            try{
                await fetch(url, {method: "DELETE", headers: {
                    'Authorization': 'Bearer ' + token
                }});
                this.state.items.splice(this.state.items.indexOf(item), 1);
                this.setState({
                    items:  this.state.items
                });
                alert("Delete success!");
            }
            catch(e) {
                alert("Delete fail!");
            }
        }
    }

    editClick (item) {
        this.newClass = item;
        //await fetch()
        console.log(item);
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    async editVocabularyLesson (item) {
        if(item.title == "") {
            alert("Invalid Lesson Name!");
            return;
        }
        let url = '/api/v1/vocabLessons/' + item.id;
        let token = sessionStorage.getItem("token");
        console.log("url: " + url);
        const requestOption = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(item)
        }
        let newItem = await (await fetch(url, requestOption)).json();
        console.log("new item: " + JSON.stringify(newItem));
        let index = this.state.items.indexOf(this.newClass);
        if(index!=-1) {
            this.state.items[index] = newItem;
        }
        this.setState({showPopup: !this.state.showPopup});
        alert("Update success!");
    }

}

export default withRouter(LessonManagement);