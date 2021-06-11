import React, {useState, useCallback} from 'react';
import {MdSubdirectoryArrowLeft} from 'react-icons/md';
import './styles/User.scss';
//#B367FF

const User = () => {   
    const USER_KEY = "User"; 
    const USER_VAL = localStorage.getItem(USER_KEY);
    const [userInput, setUserInput] = useState('');
    const [user, setUser] = useState(USER_VAL);

    const onUserChange = useCallback (
        e => {
            setUserInput(e.target.value);
            }, []);

    const onUserSubmit = useCallback (
        (e) => {
            e.preventDefault();
            localStorage.setItem(USER_KEY, userInput);
            setUser(userInput);
            //setUserInput('');
            }, [userInput]);

    const getUser = useCallback(() => {
        const userInit = localStorage.getItem(USER_KEY);
        if(userInit === null) {
            localStorage.setItem(USER_KEY, '');
            setUser('');
        };
        if(user === '') {
            return (
                <form className="user-form" onSubmit={onUserSubmit}>
                    <input className="user-input" type="text" placeholder="Name" 
                    value={userInput} onChange={onUserChange} />
                    <button className="user-btn" type="submit"><MdSubdirectoryArrowLeft /></button>
                </form>
            );
        };
        return (
            <div className="user-greeting">
                <div className="welcome">Good Day</div>
                <div className="name">{`${user}`}</div>
            </div>
        );
    }, [onUserChange, onUserSubmit, user, userInput])

    return (
        <div className="User">
            {getUser()}
        </div>
    );
}

export default User;