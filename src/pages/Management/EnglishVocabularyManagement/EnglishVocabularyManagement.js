import React, {Component} from 'react';
import './EnglishVocabularyManagement.css';
import { withRouter } from 'react-router-dom';
import VocabularyManagementItem from '../Components/VocabularyManagementItem/VocabularyManagementItem';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PageTitle from '../../../components/PageTitle/PageTitle';
import AdminMenu from '../../../components/AdminMenu/AdminMenu';
import NewVocabularyType from '../Components/NewVocabularyType/NewVocabularyType';
import Popup from 'reactjs-popup';

class EnglishVocabularyManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
            ],
            showPopup: false,
            isEdit: false,
            editableItem: {}
        }
    }

    async componentDidMount() {
        let response = await fetch(window.location.pathname.replace("admin", "api/v1"))
        let data = await response.json();
        this.setState({
            items: data
        })
    }
    render() {

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <VocabularyManagementItem item={item} handleDelete = {this.deleteVocabularyType.bind(this)} handleEdit = {this.editClick.bind(this)}></VocabularyManagementItem>
                </div>
            );
        })

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
                        <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                        <AdminMenu></AdminMenu>
                        <div className="Content_Row_Title">Choose a Category</div>
                        <div className="Content_Row_Items">
                            <div className="Item Add" onClick={this.showAddPopup.bind(this)}>+ Add New Category</div>
                           {cards}
                        </div>
                   </div>
                   <div className="VocabularyManagement_Footer">
                       <Footer></Footer>
                    </div>
                </div>
                {
                    this.state.showPopup ? <NewVocabularyType  handleEdit={this.editVocabularyType.bind(this)} 
                    type ={this.type?this.type:null} handleSave ={this.saveNewVocabularyType.bind(this)} 
                    closePopup = {this.showAddPopup.bind(this)}></NewVocabularyType>
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

    async saveNewVocabularyType (item) {
        if(item.title === "") {
            alert("Name must be not null!");
            return;
        }
        let token = localStorage.getItem("token");
        const requestOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(item)
        }
        let response = await fetch("/api/v1/vocabCategories", requestOption);
        let data = await response.json();
        if(data) {
            this.state.items.push(data);
            this.setState({
                showPopup: !this.state.showPopup,
                isEdit: false
            })   
            alert("Insert success!")
        }
        else {
            alert("Error!")
        }
    }

    async deleteVocabularyType (item) {
        if(window.confirm("Are you want to delete this type?")){     
            let url = '/api/v1/vocabCategories/' + item.id;
            let token = localStorage.getItem("token");
            await fetch(url, {method: "DELETE", headers: {'Authorization': 'Bearer ' + token}});
            this.state.items.splice(this.state.items.indexOf(item), 1);
            this.setState({isEdit: false});
            alert("Delete success!");
        }
    }

    editClick(item) {
        this.type = item;
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    async editVocabularyType(item) {
        let url = '/api/v1/vocabCategories/' + item.id;
        let token = localStorage.getItem("token");
        const requestPutOption = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(item)
        }
        let newItem = await (await fetch(url, requestPutOption)).json();
        let index = this.state.items.indexOf(this.type);
        console.log("index: " + index);
        console.log("item: " + newItem);
        if(index!=-1) {
            this.state.items[index] = newItem;
        }
        this.setState({showPopup: !this.state.showPopup});
        alert("Update success!");
    }
}

export default withRouter(EnglishVocabularyManagement);