import React, { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import AuthPage from './components/AuthPage'

const App = () => {
    const [userDetail, setUserDetail] = useState();
    console.log("userDetail - ", userDetail);
    useEffect(() => {
        const handleCallback = async () => {
          try {
            const response = await fetch('http://localhost:8000/handleAuth', {method : 'GET', credentials: 'include'});
            const userData = await response.json();
            if (!response.ok) {
              throw new Error('Authentication check failed');
            }
            console.log("userdetail - " ,userData);
            if(userData.authenticated){
                setUserDetail(userData);
            }
          } catch (error) {
            console.error('Error checking authentication:', error.message);
          }
        };

        console.log("call start from use effect")
    
        handleCallback();
    },[]);
    return (
        <>
            {userDetail?.authenticated ? <Homepage userDetail={userDetail?.user}/> : <AuthPage setUserDetail={setUserDetail}/>}
        </>
    )
}

export default App