import React, {useState} from 'react';
import { authService, firebaseInstance } from '../fbconfig';
import './SignIn.scss';

const SignIn = () => {
    const [signValue, setSignValue] = useState({
        email: '',
        password: ''
    });
    const {email, password} = signValue;

    const [newAccount, setNewAccount] = useState(false);
    const[error, setError] = useState('');

    const onChange= (e) => {
        setSignValue({
            ...signValue,
            [e.target.name]: e.target.value
        });
    };

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            if(newAccount) {
                await authService.createUserWithEmailAndPassword(email, password)
            } else {
                await authService.setPersistence(firebaseInstance.auth.Auth.Persistence.SESSION);
                await authService.signInWithEmailAndPassword(email, password);
                //setPersistance - default: local, session으로 바꾸기
            }
        } catch(e) {
            setError(e.message);
        }
        
    }

    const toggleAccount = () => {
        setNewAccount((prev) => !prev);
    }

    return (
        <div className="Signin">
            {newAccount ? 
                (
                    <div className="sign-container">
                    <span className="sign-text">Sign up</span>
                        <form className="sign-form" onSubmit={onSignIn}>
                            <input className="email" name="email" type="text" placeholder="ID" value={email} onChange={onChange} required />
                            <input className="password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                            <input className="submit-btn" type="submit" value={newAccount ? "Create account" : "Sign in"} />
                            {error}
                        </form>
                        <span onClick={toggleAccount}>sign in</span>
                    </div>
                ) : (
                    <div className="sign-container">
                        
                            <form className="sign-form" onSubmit={onSignIn}>
                                <span className="sign-text">Sign in</span>
                                <input className="email" name="email" type="text" placeholder="ID" value={email} onChange={onChange} required />
                                <input className="password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                                <input className="submit-btn" type="submit" value={newAccount ? "Create account" : "Sign in"} />
                                {error}
                            </form>
                            <div className="toggle-box">Not registered?<span className="toggle-btn" onClick={toggleAccount}>create account</span></div>
                    </div>
                )
            }
            
        </div>
    );
}

export default SignIn;