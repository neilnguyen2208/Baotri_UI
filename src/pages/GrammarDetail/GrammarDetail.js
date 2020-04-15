import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './GrammarDetail.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"
import GrammarDetailSubTitle from "../../components/GrammarContents/GrammarDetailSubTitle/GrammarDetailSubTitle.js"
import GrammarDetailTitle from '../../components/GrammarContents/GrammarDetailForm/GrammarDetailTitle/GrammarDetailTitle.js'
class GrammarDetail extends Component {
    constructor(props) {
        super();
        this.name = "COMPARATIVE";


    }

    render() {

        return (
            <div className="Grammar_Detail">

                <div className="Grammar_Detail_Header">
                    <Header></Header>
                </div>
                <div className="Outline_Port">
                    <div className="Inline_Port">
                        <PageTitle prevTitle="Learning English" mainTitle="Grammar"></PageTitle>
                        <div className="Title">
                            <GrammarDetailTitle name={this.name}></GrammarDetailTitle>
                        </div>
                        <div className="Description">
                            <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand."></Description>
                        </div>
                        <div className="decoration_insert_left_right_border"></div>
                        <div className="Content">
                            <div className="SubTitle" >
                                <GrammarDetailSubTitle name={this.name}></GrammarDetailSubTitle>
                            </div>
                            <div className="Example"></div>
                            <div className="Note"></div>
                            <div className="FormTitle"></div>
                            <div className="Form"></div>
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

export default GrammarDetail;