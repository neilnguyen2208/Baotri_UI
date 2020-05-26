import React, {Component} from 'react'
import './Login.css';
import mailIcon from '../../resources/mail.svg'
import passwordIcon from '../../resources/lock.svg'
import jwt_decode from 'jwt-decode'
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
            repassword: "",
            email: "",
            displayname: "",
            isCorrectPassword: true
        }
        this.handleUsernameChange.bind(this);
        this.handlePasswordChange.bind(this);
        this.handleDisplayNameChange.bind(this);
        this.handleEmailChange.bind(this);
        this.handleClick.bind(this);
        this.handleLoginClick.bind(this);
        this.handleSignupClick.bind(this);
        this.canSignUp.bind(this);
    }

    render(){
        const {login, signup, forgot_pasword} = this.state;
        const isAuthenticated = isLogin();
        if(isAuthenticated){
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
                                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                    <a href='./'>Forgot Password? Click Here.</a>
                                    <button onClick={this.handleClick}>Login</button>
                                </div>
                                : signup?
                                <div className="Login-Form">
                                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange}></input>
                                    <input type="text" placeholder="Email" onChange={this.handleEmailChange}></input>
                                    <input type="text" placeholder="Display Name" onChange={this.handleDisplayNameChange}></input>
                                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                    <input type="password" placeholder="Retype Password" onChange={this.handleRePasswordChange}></input>
                                    {this.state.isCorrectPassword ? "" : <label>Password not match or missing information!</label>}
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

    handleRePasswordChange = (event) => {
        this.setState(
            {
                repassword: event.target.value
            }
        )
    }
    
    handleClick = async (event)=> {
        event.preventDefault();
        if(this.state.login) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: this.state.username, password: this.state.password })
            };
            console.log(requestOptions);
            fetch('api/v1/auth/login', requestOptions)
            .then(response => response.json())
            .then((data) => {
                localStorage.setItem("token", data.accessToken);
                console.log(data.accessToken);
            })
            .then(()=> this.setState({}));
        }
        //sign up
        else {
            //password and retype password not match
            if(this.canSignUp) {
                this.setState({
                    isCorrectPassword: false
                })
            }
            else {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: this.state.username, password: this.state.password,  })
                };
                console.log(requestOptions);
                fetch('api/v1/auth/register', requestOptions)
                .then(response => response.json())
                .then((data) => {
                    localStorage.setItem("token", data.accessToken);
                    console.log(data.accessToken);
                })
                .then(()=> this.setState({}));
            }
        }
    }
    
    canSignUp () {
        return this.state.password != this.state.repassword || 
        !this.state.email || !this.state.displayname
        || !this.state.password || this.state.repassword;
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

export function  isLogin() {
    const token = localStorage.getItem('token');
    return token && token.length>10;
}

export function isAdmin() {
    let token = localStorage.getItem('token');
    if(!token||token.length<10)
        return;
    let jwtParsed = jwt_decode(token);
    let roles = [];
    roles = jwtParsed.roles;
    if(roles.length>0) {
        console.log(roles[0].authority == "ROLE_ADMIN");
        return roles[0].authority === "ROLE_ADMIN";
    }
    return false;
}

export default withRouter(Login);