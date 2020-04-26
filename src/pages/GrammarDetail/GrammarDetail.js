import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './GrammarDetail.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"
import GrammarDetailSubTitle from "../../components/GrammarContents/GrammarDetailSubTitle/GrammarDetailSubTitle.js"
import GrammarDetailTitle from "../../components/GrammarContents/GrammarDetailTitle/GrammarDetailTitle.js"
import GrammarFormExample from "../../components/GrammarContents/GrammarFormDetails/GrammarFormExample/GrammarFormExample.js"
import GrammarFormNote from "../../components/GrammarContents/GrammarFormDetails/GrammarFormNote/GrammarFormNote.js"
import GrammarForm from "../../components/GrammarContents/GrammarFormDetails/GrammarForm/GrammarForm.js"
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
                <div className="Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                <div className="Grammar_Detail_Main_Port">

                    <PageTitle prevTitle="Learning English" mainTitle="Grammar"></PageTitle>



                    <div className="Title">
                        <GrammarDetailTitle name={this.name}></GrammarDetailTitle>
                    </div>

                    <div className="Grammar_Detail_Description">
                        <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand."></Description>
                    </div>
                    <div className="Grammar_Detail_Content">
                        <div className="SubTitle" >
                            <GrammarDetailSubTitle name={this.name}></GrammarDetailSubTitle>
                            <div className="Grammar_Detail_Form">
                                <div className="Example">
                                    <GrammarFormExample example_image_url="https://i.imgur.com/q54xYo3.png" example_content={
                                        <div>The man on the left is <b>taller</b> than the man on the right.<br /> The man on the right is <b>shorter</b> than the man on the left.</div>}>
                                    </GrammarFormExample>
                                </div>
                                <div className="Grammar_Detail_Note">
                                    <GrammarFormNote noteContent="Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared. "></GrammarFormNote>
                                </div>
                                <div className="Grammar_Detail_Form_Content">
                                    <GrammarForm formTitle="FORM OF COMPARATIVE:" useCase="Words of one syllable" usage="Add -r to the end of the word" how="wide-wider" ></GrammarForm>
                                </div>
                            </div>
                        </div>
                        <div className="Below_Border"></div>
                    </div>
                </div>
                <div className="Grammar_Detail_Footer">
                    <Footer ></Footer>
                </div>
            </div >
        );
    }

}

export default GrammarDetail;