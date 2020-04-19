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
            password: "",
            email: "",
            displayname: ""
        }
        this.handleUsernameChange.bind(this);
        this.handlePasswordChange.bind(this);
        this.handleDisplayNameChange.bind(this);
        this.handleEmailChange.bind(this);
        this.handleClick.bind(this);
        this.handleLoginClick.bind(this);
        this.handleSignupClick.bind(this);
    }

    render(){
        const {login, signup, forgot_pasword} = this.state;
        const isAuthenticated = isLogin();
        if(isAuthenticated){
            console.log('true');
            return <Redirect to = "/"></Redirect>
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
                            <button className="Login_Button" onClick={this.handleLoginClick}>Login</button>
                            <button className="SignUp_Button" onClick={this.handleSignupClick}>Sign Up</button>
                        </div>
                        <div className="Form">
                            {
                                login? 
                                <div className="Login-Form">
                                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange}></input>
                                    <input type="text" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                    <a href='./home'>Forgot Password? Click Here.</a>
                                    <button onClick={this.handleClick}>Login</button>
                                </div>
                                : signup?
                                <div className="Login-Form">
                                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange}></input>
                                    <input type="text" placeholder="Email" onChange={this.handleEmailChange}></input>
                                    <input type="text" placeholder="Display Name" onChange={this.handleDisplayNameChange}></input>
                                    <input type="text" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                    <button onClick={this.handleClick}>Sign Up</button>
                                </div>
                                : <div>Forgot Password</div>
                            }
                        </div>
                    </div>
                </div>
              </div>
           </div>
        );
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
    
    handleClick = async (event)=> {
        event.preventDefault();
        console.log('username: '+this.state.username + 'password: '+this.state.password);
        localStorage.setItem('token', 'zcdalshfkabckxbsiladhosadklhndsaldkbk,sacb');
        this.setState({});
    }
    
    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState(
            {
                email: event.target.value
            }
        )
    }
    
    handleDisplayNameChange = (event) =>{
        event.preventDefault();
        this.setState(
            {
                displayname: event.target.value
            }
        )
    }
    
    handleLoginClick = ()=>{
        this.setState({
            login: true,
            signup: false,
            forgot_pasword: false
        })
    }
    
    handleSignupClick =()=>{
        this.setState({
            login: false,
            signup: true,
            forgot_pasword: false
        })
    }


}

export function  isLogin(){
    const token = localStorage.getItem('token');
    return token && token.length>10;
}

export default withRouter(Login);