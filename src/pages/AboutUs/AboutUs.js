import React, {Component} from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './AboutUs.css'
import Footer from '../../components/Footer/Footer';

class AboutUs extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="About">
                <div className="About_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        <p>CÔNG TY LEARNING ENGLISH VIỆT NAM <br></br>
                            <br></br> Số GCNĐKDN: 2500150335 <br></br>
                            <br></br>Cấp lần đầu: 26/03/2007 <br></br>
                            <br></br> Đăng ký thay đổi lần thứ 16: 07/05/2018 <br></br>
                            <br></br>Cơ quan cấp: Sở kế hoạch và đầu tư tp Hồ Chí Minh <br></br>
                            <br></br>Địa chỉ: phường Linh Trung, Quận Thủ Đức, Tp Hồ Chí Minh <br></br>
                            <br></br>Tel: (0211) 3 868100/112 Fax: (0211) 3 868117</p>
                   </div>
                   <div className="About_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }

}

export default AboutUs;