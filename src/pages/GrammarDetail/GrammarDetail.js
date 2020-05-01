import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './GrammarDetail.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"
import GrammarDetailSubTitle from "../../components/GrammarContents/GrammarDetailSubTitle/GrammarDetailSubTitle.js"
import GrammarDetailTitle from "../../components/GrammarContents/GrammarDetailTitle/GrammarDetailTitle.js"
import GrammarFormDetail from "../../components/GrammarContents/GrammarFormDetail/GrammarFormDetail/GrammarFormDetail"

class GrammarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": 19,
            "title": "Comparative",
            "description": "When we compare things, people or even ideas we look at what makes them different from each other",
            "categoryID": 1,
            "forms": [
                {
                    "examples": [
                        {
                            "id": 15,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        },
                        {
                            "id": 85,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        }
                    ],
                    "notes": [
                        {
                            "id": 47,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        },
                        {
                            "id": 67,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        }
                    ],
                    "forms": [
                        {
                            "id": 98,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -r to the end of the word",
                            "how": "wide - wider"
                        },
                        {
                            "id": 76,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -a to the end of the word",
                            "how": "wide - wider"
                        }
                    ],
                    "id": 79,
                    "title": "Forming the comparative",
                    "how": "wide-wider"
                },
                {
                    "examples": [
                        {
                            "id": 79,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        },
                        {
                            "id": 55,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        }
                    ],
                    "notes": [
                        {
                            "id": 76,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        },
                        {
                            "id": 98,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        }
                    ],
                    "forms": [
                        {
                            "id": 98,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -r to the end of the word",
                            "how": "wide - wider"
                        },
                        {
                            "id": 76,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -a to the end of the word",
                            "how": "wide - wider"
                        }
                    ],
                    "id": 58,
                    "title": "Forming the comparative"
                }
            ]
        }
    }

    render() {
        let grammarFormDetailList = this.state.forms.map((form) =>
            <GrammarFormDetail
                example_list={form.examples}
                note_list={form.notes}
                form_list={form.forms}
            ></GrammarFormDetail>
        );

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
                        <GrammarDetailTitle name={this.state.title}></GrammarDetailTitle>
                    </div>

                    <div className="Grammar_Detail_Description">
                        <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand."></Description>
                    </div>
                    <div className="Grammar_Detail_Content">
                        <div className="SubTitle" >
                            <GrammarDetailSubTitle name={this.state.title}></GrammarDetailSubTitle>
                            <div className="Grammar_Detail_Form">
                                {grammarFormDetailList}
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