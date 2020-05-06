import React, { Component } from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Home.css'
import Footer from '../../components/Footer/Footer';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 1,
                src: "/grammar",
                name: "English Grammar",
                description: "Your guide to English grammar. (Illustrated)"
            },
            {
                id: 2,
                src: "/vocabCategories",
                name: "English Vocabulary",
                description: "Learn English vocabulary by topic. (Illustrated)"
            },
            {
                id: 3,
                src: "/q&a",
                name: "English Q&A",
                description: "What do you really know about England, the UK and the English language?"
            },
            {
                id: 4,
                src: "/listening",
                name: "English Listening",
                description: "Tricky English pronunciation. With listening practice."
            },
            {
                id: 5,
                src: "/test",
                name: "English Test",
                description: "Have you really learnt what you think you have learnt?"
            },
            {
                id: 6,
                src: "/privatechat",
                name: "English Chat",
                description: "We like to talk with you, and we like you to talk to each other. Practise your communication skills."
            }
            ]
        }
    }

    render() {
        let cards = this.state.items.map((item) => {
            return (
                <div className="Item" key={item.id}>
                    <CategoryItem item={item}></CategoryItem>
                </div>
            );
        })
        return (

            <div className="Home">
                <div className="Home_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                    <div className="Content_Row">
                        {cards}
                    </div>
                    <div className="Notice">
                        <p>You should be open to learn new things.
                        You should spend some months at the countries where English is spoken.
                        You can find a boyfriend or agirl friend or at least a friend whose native language is English to practise your language.
                        You should keep a vocabulary notebook to record the words and expressions you have learned.
                        Reading is very helpful in language learning.You should read newspapers,magazines, and books.
                        Language learning is a process.You should revise regularly.
                            You can record your voice while speaking English to a CD and listen and test yourself .Be your quide.</p>
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