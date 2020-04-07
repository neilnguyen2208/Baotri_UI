import React, {Component} from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Home.css'

class Home extends Component{

    constructor(){
        super();
        this.state={
            items:[{
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }, 
            {
                src: "",
                name: "English",
                description: "Learning english for better future"
            }
        ]
        }
    }

    render(){
         let cards = this.state.items.map((item)=>{
             return(
                 <Col sm="4" key={item.name}>
                     <CategoryItem item={item}></CategoryItem>
                 </Col>
             );
         })
        return(
            <div>
                <Header></Header>
                <Container fluid={true} class="content">
                    <Row xs="3">
                        {cards}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Home;