import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';

import { Container, UserName , Title, Logo, LoginContainer } from './style';

import { Button } from 'react-native';

const Login = () => {
  const [value, onTextChange] = useState();
  const { setLogin, login, user } = useContext(AuthContext);

  console.log(login);

  async function handleLogin(){
    setLogin(value);
  }

  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <Title>Github</Title>
      <UserName
        onChangeText={text => onTextChange(text)}
        value={value}
        placeholder='Github UserName'
      />

      <LoginContainer>
        <Button color='#fff' title='login' onPress={handleLogin} />
      </LoginContainer>
    </Container>
  );
};

export default Login;