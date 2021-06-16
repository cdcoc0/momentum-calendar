import React, {useState, useCallback, useEffect} from 'react';
import { authService } from '../fbconfig';
import {MdSubdirectoryArrowLeft} from 'react-icons/md';
import './styles/User.scss';

const User = ({userObj, refreshUser, userUpdate}) => {   
    const [userInput, setUserInput] = useState(userObj.displayName);

    const onUserChange = useCallback (
        e => {
            setUserInput(e.target.value);
            }, []);

    const onUserSubmit = useCallback (
        async (e) => {
            e.preventDefault();
            await authService.currentUser.updateProfile({
                displayName: userInput
            });
            refreshUser();
    }, [userInput, refreshUser]);

    useEffect(() => {
        setUserInput(userObj.displayName)
    }, [userUpdate])
    

    const getUser = useCallback(()=> {
        if(!userObj.displayName || userUpdate) {
            return (
                <form className="user-form" onSubmit={onUserSubmit}>
                    <input className="user-input" type="text" placeholder="Display Name" 
                    value={userInput} onChange={onUserChange} />
                    <button className="user-btn" type="submit"><MdSubdirectoryArrowLeft /></button>
                </form>
            );
        };
        return (
            <div className="user-greeting">
                <div className="welcome">Good Day</div>
                <div className="name">{userObj.displayName}</div>
            </div>
        );
    }, [onUserChange, onUserSubmit, userInput, userObj, userUpdate])

    return (
        <div className="User">
            {getUser()}
        </div>
    );
}

export default User;