import React, {Component} from 'react'
import './Login.css';
import mailIcon from '../../resources/mail.svg'
import passwordIcon from '../../resources/lock.svg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            signup: false,
            forgot_pasword: false
        }
    }


    render(){
        const {login, signup, forgot_pasword} = this.state;
        return(
           <div className="Login">
              <div className="Content">
                <div className="LeftSide">

                </div>
                <div className="RightSide">
                    <div className="Right_Bound">
                    <div className="Top_Nav">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                        {
                            login? 
                            <div>Login</div>
                            : signup?
                            <div>Sign Up</div>
                            : <div>Forgot Password</div>
                        }
                    </div>
                </div>
              </div>
           </div>
        );
    }
}

export default Login;