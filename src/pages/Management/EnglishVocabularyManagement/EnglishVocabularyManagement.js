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
            showPopup: false
        }
    }

    componentDidMount() {
        fetch(window.location.pathname.replace("admin", "api/v1"))
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
           this.setState({
               items: data
           })
          );
    }
    render() {

        let cards = this.state.items.map((item)=>{
            return(
                <div className="Item" key={item.id}>
                    <VocabularyManagementItem item={item} handleDelete = {this.deleteVocabularyType.bind(this)} handleEdit = {this.editVocabularyType.bind(this)}></VocabularyManagementItem>
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
                            <div className="Item Add" onClick={this.showAddPopup.bind(this)}>+ Thêm danh mục</div>
                           {cards}
                        </div>
                   </div>
                   <div className="VocabularyManagement_Footer">
                       <Footer></Footer>
                    </div>
                </div>
                {
                    this.state.showPopup ? <NewVocabularyType type ={this.type?this.type:null} handleSave ={this.saveNewVocabularyType.bind(this)} closePopup = {this.showAddPopup.bind(this)}></NewVocabularyType>
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

    saveNewVocabularyType (item) {
        if(item.title != "")
            this.state.items.push(item);
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    deleteVocabularyType (item) {
        if(window.confirm("Are yor want to delete this type?")){
            this.state.item = this.state.items.splice(this.state.items.indexOf(item), 1);
            this.setState();
        }
    }

    editVocabularyType(item) {
        this.type = item;
        this.setState();
    }
}

export default withRouter(EnglishVocabularyManagement);