import React, {useState, useCallback, useEffect} from 'react';
import { authService } from '../fbconfig';
import {MdSubdirectoryArrowLeft} from 'react-icons/md';
import './styles/User.scss';

const User = ({userObj, refreshUser, userUpdate}) => {   
    const [userInput, setUserInput] = useState(userObj.displayName ? userObj.displayName : '');

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

    const getUser = useCallback(()=> {
        if(!userObj.displayName || userUpdate) {
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
                <div className="name">{userObj.displayName}</div>
            </div>
        );
    }, [onUserChange, onUserSubmit, userInput, userObj, userUpdate])
    // useEffect(() => {
    //     const getDisPlayName = async () => {
    //         if(userObj.displayName.indexOf('@') !== -1) {
    //             const index = userObj.displayName.indexOf('@');
    //             const update = userObj.displayName.slice(0, index);
    //             console.log(update);
    //             await userObj.updateProfile({
    //                 displayName: update
    //             });
    //             console.log(userObj.displayName)
    //         }
    //     }
    //     getDisPlayName()
    // }, [])

    return (
        <div className="User">
            {getUser()}
        </div>
    );
}

export default User;