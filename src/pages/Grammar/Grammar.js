import React, { Component } from 'react'
import GrammarCategoryItem from '../../components/GrammarCategoryItem/GrammarCategoryItem.js';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Grammar.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"
import Background from "../../components/Background/Background.js"

class Grammar extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [{
                name: "ADJECTIVE",
            },
            {
                name: "VERB",
            }]
        }
    }

    render() {

        let cards = this.state.items.map((item) => {
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
                <div className="Main_Port">
                    <div className="Inline_Port">
                        <PageTitle prevTitle="Learning English" mainTitle="Grammar"></PageTitle>
                        <div className="Description">
                            <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand."></Description>
                        </div>
                        <div className="decoration_insert_left_right_border"></div>
                        <div className="grammar_category_port">
                            <div className="category_item">
                                {cards}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="grammar_footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }

}

export default Grammar;