// src/components/signup-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      style={{
        cursor: 'pointer',
        margin: '15px',
        padding: '10px 20px',
        border: 'solid',
        borderRadius: '5px',
      }}
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
