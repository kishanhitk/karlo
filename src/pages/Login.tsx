import React from 'react';
import styled from 'styled-components';
import WelcomeCard from '../components/WelcomeCard';

const ViewPort = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  background-image: url('https://unsplash.com/photos/kKvQJ6rK6S4/download?force=true&w=2400');
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

function Login() {
  return (
    <ViewPort>
      <WelcomeCard />
    </ViewPort>
  );
}

export default Login;
