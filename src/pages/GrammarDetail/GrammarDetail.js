import React, { Component } from 'react'
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
            grammarDetails: {
                "id": 1,
                "title": "Comparative",
                "categoryID": 1,
                "description": "When we compare things...",
                "forms": []
            }
        }
    }


    fetchGrammarDetail() {
        var requestDetailId = this.props.match.params.id;
        fetch('/api/v1/grammar/' + requestDetailId)
            .then(response => response.json())
            .then((data) => {
                this.setState({ grammarDetails: data })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.fetchGrammarDetail();
    }

    render() {
        let grammarFormDetailList = this.state.grammarDetails.forms.map((formDetail) =>
            <GrammarFormDetail
                example_list={formDetail.examples}
                note_list={formDetail.notes}
                title={formDetail.title}
                usage = {formDetail.usage}
                useCase = {formDetail.useCase}
                how = {formDetail.how}
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
                        <GrammarDetailTitle name={this.state.grammarDetails.title}></GrammarDetailTitle>
                    </div>

                    <div className="Grammar_Detail_Description">
                        <Description content={this.state.grammarDetails.description}></Description>
                    </div>
                    <div className="Grammar_Detail_Content">
                        <div className="SubTitle" >
                            <GrammarDetailSubTitle name={this.state.grammarDetails.title}></GrammarDetailSubTitle>
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