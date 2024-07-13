// src/components/common/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      style={{
        cursor: 'pointer',
        margin: '15px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
