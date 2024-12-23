import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                shape='circle'
                text='continue_with'
                logo_alignment='center'
                ux_mode='popup'
            />
        </div>
    )
}

export default GoogleAuth