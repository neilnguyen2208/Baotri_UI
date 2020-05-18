import React, { Component } from 'react'
import GrammarCategoryItem from '../../components/GrammarCategoryItem/GrammarCategoryItem.js';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Grammar.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"

class Grammar extends Component {
    constructor(props) {
        super();

        this.state = {
            "grammarCategories":
                [

                ]
        }
    }

    fetchGrammarCategoryList() {
        fetch('/api/v1' + '/grammarCategories')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    grammarCategories : data
                })
            );
    }

    componentDidMount() {
        this.fetchGrammarCategoryList();
    }

    render() {

        let items = this.state.grammarCategories.map((item) => {
            return (
                <div className="Item">
                    <GrammarCategoryItem item={item}></GrammarCategoryItem>
                    
                </div>
            );
        })

        return (

            <div className="Grammar">

                <div className="Grammar_Header">
                    <Header></Header>
                </div>
                <div className="Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>

                <div className="Grammar_Main_Port">
                    <div className="Grammar_Inline_Port">
                        <PageTitle prevTitle="Learning English" mainTitle="Grammar"></PageTitle>
                        <div className="Description">
                            <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand."></Description>
                        </div>
                        <div className="Grammar_Category_Port">
                            <div className="category_item">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Grammar_Footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }

}

export default Grammar;