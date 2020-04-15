import React, {Component} from 'react'
import './Login.css';
import mailIcon from '../../resources/mail.svg'
import passwordIcon from '../../resources/lock.svg'
import { withRouter, Redirect} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            signup: false,
            forgot_pasword: false,
            username: "",
            password: ""
        }
        this.handleUsernameChange.bind(this);
        this.handlePasswordChange.bind(this);
        this.handleButtonLoginClick.bind(this);
    }

    handleUsernameChange = (event) =>{
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handlePasswordChange = (event) =>{
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    handleButtonLoginClick = async (event)=> {
        event.preventDefault();
        console.log('username: '+this.state.username + 'password: '+this.state.password);
        // let response = await fetch('api/v1/1');
        // let content = await response.json();
        // console.log(content);
        localStorage.setItem('token', 'zcdalshfkabckxbsiladhosadklhndsaldkbk,sacb');
        this.setState({});
    }

    render(){
        const {login, signup, forgot_pasword} = this.state;
        const isAuthenticated = isLogin();
        if(isAuthenticated){
            console.log('true');
            return <Redirect to="/home"></Redirect>
        }
        return(
           <div className="Login">
              <div className="Content">
                <div className="LeftSide">
                    <p>Login or create new account to make more experience.</p>
                </div>
                <div className="RightSide">
                    <div className="Right_Bound">
                        <div className="Top_Nav">
                            <button className="Login_Button">Login</button>
                            <button className="SignUp_Button">Sign Up</button>
                        </div>
                        <div className="Form">
                            {
                                login? 
                                <div className="Login">
                                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange}></input>
                                    <input type="text" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                    <button onClick={this.handleButtonLoginClick}>Login</button>
                                </div>
                                : signup?
                                <div>Sign Up</div>
                                : <div>Forgot Password</div>
                            }
                        </div>
                    </div>
                </div>
              </div>
           </div>
        );
    }
}

export function  isLogin(){
    const token = localStorage.getItem('token');
    return token && token.length>10;
}

export default withRouter(Login);
