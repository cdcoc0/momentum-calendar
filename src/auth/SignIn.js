import React, {useState} from 'react';
import { authService, firebaseInstance } from '../fbconfig';
import './SignIn.scss';

const SignIn = ({refreshUser}) => {
    const [signValue, setSignValue] = useState({
        email: 'welcometokirri@naver.com',
        password: '189674340^^',
        username: ''
    });
    const {email, password, username} = signValue;

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
                await authService.createUserWithEmailAndPassword(email, password);
                await authService.currentUser.updateProfile({
                    displayName: username
                })
                refreshUser();
            } else {
                await authService.setPersistence(firebaseInstance.auth.Auth.Persistence.SESSION);
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch(e) {
            setError(e.message);
        }
        
    }

    const toggleAccount = () => {
        setNewAccount((prev) => !prev);
        setSignValue({
            email: '',
            password: '',
            username: ''
        })
    }

    return (
        <div className="Signin">
            {newAccount ? 
                (
                    <div className="sign-container signup">
                        <form className="sign-form" onSubmit={onSignIn}>
                            <span className="sign-text">Sign up</span>
                            <input className="email" name="email" type="text" placeholder="ID" value={email} onChange={onChange} required />
                            <input className="password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                            <input className="password" name="username" type="text" placeholder="Name" onChange={onChange} value={username} required />
                            <input className="submit-btn" type="submit" value="Create account" />
                        </form>
                        <div className="error">{error}</div>
                        <div className="toggle-box">Already registered?<span className="toggle-btn" onClick={toggleAccount}>sign in</span></div>
                    </div>
                ) : (
                    <div className="sign-container">
                        
                            <form className="sign-form" onSubmit={onSignIn}>
                                <span className="sign-text">Sign in</span>
                                <input className="email" name="email" type="text" placeholder="ID" value={email} onChange={onChange} required />
                                <input className="password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                                <input className="submit-btn" type="submit" value="Sign in" />
                            </form>
                            <div className="error">{error}</div>
                            <div className="toggle-box">Not registered?<span className="toggle-btn" onClick={toggleAccount}>create account</span></div>
                    </div>
                )
            }
            
        </div>
    );
}

export default SignIn;