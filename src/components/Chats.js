import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async (url) => {
        const 
    }

    useEffect(() => {
        if (!user) {
            history.push('/')

            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "2ec3db0a-64da-414c-a0e3-ee78fb7b502b",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', user.email)
            formData.append('username', user.email)
            formData.append('secret', user.uid)
        })
    }, [])

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId="2ec3db0a-64da-414c-a0e3-ee78fb7b502b"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats