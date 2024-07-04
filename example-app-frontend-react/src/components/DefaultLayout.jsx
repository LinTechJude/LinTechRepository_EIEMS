import React from 'react';
import { Helmet } from 'react-helmet';

export default function login(){
    return(
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1>Welcome to My Login Page</h1>
        </div>
    )
}