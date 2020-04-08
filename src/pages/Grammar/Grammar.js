import React, { Component } from 'react'
import GrammarCategoryItem from '../../components/GrammarCategoryItem/GrammarCategoryItem.js';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Grammar.css'
import Footer from "../../components/Footer/Footer.js";
import Description from "../../components/GrammarContents/Description/Description.js"
import PageTitle from "../../components/PageTitle/PageTitle.js"
import Background from "../../components/Background/Background.js"
import ComponentWithDimensions from "./ComponentDimen.js"
class Grammar extends Component {

    // state = {
    //     dimensions: null,
    // };

    // componentDidMount() {
    //     this.setState({
    //         dimensions: {
    //             width: this.container.offsetWidth,
    //             height: this.container.offsetHeight,
    //         },
    //     });
    // }

    // renderContent() {
    //     const { dimensions } = this.state;
    //     return (
    //         <div>
    //             <div className="grammar_background">
    //                 <div ref={(elem) => this.PageTitle = elem}>
    //                     <PageTitle prevTitle="Learning English" mainTitle="Grammar">
    //                     </PageTitle>
    //                 </div>
    //                 <div ref={(elem) => this.Description = elem} className="tall">
    //                     <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand.">
    //                     </Description>
    //                 </div>
    //                 <div ref={(elem) => this.CategoryList = elem}>
    //                     {this.state.totalHeight}
    //                 </div>
    //             </div>
    //             <div>
    //                 width: {dimensions.width}
    //                 <br />
    //         height: {dimensions.height}
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        //const { dimensions } = this.state;
        return (
            <div className="grammar_background">
            <div ref={(elem) => this.PageTitle = elem}>
                <PageTitle prevTitle="Learning English" mainTitle="Grammar">
                </PageTitle>
            </div>
            <div ref={(elem) => this.Description = elem} className="tall">
                <Description content="Grammar is the mortar that holds the bricks of vocabulary together. Without good mortar bricks can come tumbling down and that can cause embarrassing misunderstandings. There is a common impression that learning English grammar is painful, but it is a lot easier than many other languages. Of course, English is more than just memorizing grammar rules, the grammar must be incorporated into your everyday use of the language. Theory and practice should always go hand in hand.">
                </Description>
            </div>
            <div ref={(elem) => this.CategoryList = elem}>
                {this.state.totalHeight}
            </div>
        </div>
        );
    }

}

export default Grammar;