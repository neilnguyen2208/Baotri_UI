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
          // ...then we update the users state
          .then(data =>
           this.setState({
               items: data,
           })
          );
    }

    render() {

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <LessonDetailManagementItem item={item} audio={this.audio} handleDelete={this.deleteVocabulary.bind(this)} handleEdit={this.editClick.bind(this)}></LessonDetailManagementItem>
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
                    this.state.showPopup ? <AddNewWord word = {this.word} handleSave={this.saveNewVocabulary.bind(this)} handleEdit = {this.handleEditWord.bind(this)} closePopup={this.showAddPopup.bind(this)}></AddNewWord>
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

    async saveNewVocabulary (item) {
        let pathName = window.location.pathname;
        let token = localStorage.getItem("token");
        let path = pathName.split("/");
        console.log(path + "title: " + item.title);
        if(path.length<1 || item.title == "") {
            alert("Invalid Lesson!");
            return;
        }
        let url = '/api/v1/vocabLessons/' + path[path.length-1] + '/content';
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
            let data = await (await fetch(url, requestOption)).json();
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

    editClick (item) {
        this.setState({
            showPopup: !this.state.showPopup
        })
        this.word = item;
    }

    async handleEditWord(item) {
        let pathName = window.location.pathname;
        let token = localStorage.getItem("token");
        let path = pathName.split("/");
        console.log(path + "title: " + item.title);
        if(path.length<1 || item.title == "") {
            alert("Invalid Lesson!");
            return;
        }
        let url = '/api/v1/vocabLessons/' + path[path.length-1] + '/content';
        console.log("url: " + url);
        let index = this.state.items.indexOf(this.word);
        if(index!=-1) {
            console.log(index);
            this.state.items[index] = item;
        }
        const requestOption = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(this.state.items)
        }
        console.log("item: " + JSON.stringify(this.state.items));
        let response = await fetch(url, requestOption);
        let newItem = await response.json();
        console.log("new item: " + JSON.stringify(newItem));
        this.setState({showPopup: !this.state.showPopup});
        alert("Update success!");
    }

    async deleteVocabulary (item) {
        if(window.confirm("Are yor want to delete this lesson?")){
            let url = '/api/v1/vocabLessons/' + item.id;
            let token = localStorage.getItem("token");
            let requestOption = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            try{
                await fetch(url, requestOption);
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
}

export default withRouter(DetailManagement);