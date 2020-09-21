import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
`;

export const Logo = styled.Image`
  height: 70px;
  width: 70px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const UserName = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

export const LoginContainer = styled.View`
  background-color: #2296F3;
  border-radius: 5px;
  width: 100%;
`;