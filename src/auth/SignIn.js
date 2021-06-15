import React, {useState} from 'react';
import { authService, firebaseInstance } from '../fbconfig';

const SignIn = () => {
    const [signValue, setSignValue] = useState({
        email: '',
        password: ''
    });
    const {email, password} = signValue;

    const [newAccount, setNewAccount] = useState(true);
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
        <div>
            <form onSubmit={onSignIn}>
                <input name="email" type="text" placeholder="ID" value={email} onChange={onChange} required />
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" value={newAccount ? "Create account" : "Sign in"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "sign in" : "create account" }</span>
        </div>
    );
}

export default SignIn;