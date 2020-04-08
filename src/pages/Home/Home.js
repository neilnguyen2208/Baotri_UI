import React, {Component} from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Home.css'
import Footer from '../../components/Footer/Footer';

class Home extends Component{

    constructor(){
        super();
        this.state={
            items:[{
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            },
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            },
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            },
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future Learning english for better future"
            }
        ]
        }
    }

    render(){
         let cards = this.state.items.map((item)=>{
             return(
                <div className="Item">
                    <CategoryItem item={item}></CategoryItem> 
             </div>
             );
         })
        return(
            <div className="Home">
                <div class="Home_Header">
                    <Header></Header>
                </div>
                <div class="Content">
                   <div className="Content_Row">
                       {cards}
                   </div>
                   <div className="Home_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }

}

export default Home;