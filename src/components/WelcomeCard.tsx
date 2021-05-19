import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { auth } from '../firebase/config';

const ErrorMessage = styled.p`
  word-wrap: break-word;
  color: red;
  text-align: center;
  max-width: 200px;
`;
const ForgotPasswordButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  color: gray;
  margin: 1px 0px;
  border: none;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Card = styled.div`
  max-width: 70vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: 1.5s ${fadeIn} ease-in-out;
  border-radius: 2px;
  background-color: white;
  padding: 30px 50px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-family: 'Nunito';
  margin-bottom: 40px;
`;

const EmailInput = styled.input`
  font-size: 1rem;
  font-family: 'Nunito';
  display: block;
  margin: 8px 0px;
  padding: 10px;
  :active,
  :focus {
    border-radius: 0px;
  }
  border-radius: 0px;
  border: solid rgba(0, 0, 0, 0.224) 0.001rem;
  background-color: transparent;
`;
interface LoginButtonProps {
  isLoading?: boolean;
}

const LoginButton = styled.button<LoginButtonProps>`
  border-radius: 0px;
  width: 100%;
  display: block;
  border: none;
  opacity: ${(p) => (p.isLoading ? 0.2 : 0.8)};
  cursor: ${(p) => (p.isLoading ? 'progress' : 'pointer')};
  :hover {
    opacity: ${(p) => (p.isLoading ? 0.3 : 1)};
  }
  background-color: blue;
  font-family: 'Nunito';
  font-size: 1.2rem;
  color: white;
  padding: 8px 30px;
  margin-top: 15px;
  margin-bottom: 45px;
`;

function WelcomeCard() {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState<any>(null);
  const history = useHistory();
  const handleLogin = () => {
    setIsLoading(true);
    seterror(null);
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.replace('/');
      })
      .catch((e) => {
        seterror(e.message);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <div>
      <Card>
        <Heading>Welcome</Heading>
        <EmailInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <EmailInput
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
        <LoginButton isLoading={isLoading} onClick={handleLogin}>
          {isLoading ? 'Loading ⏰' : 'Login'}
        </LoginButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Card>
    </div>
  );
}

export default WelcomeCard;
