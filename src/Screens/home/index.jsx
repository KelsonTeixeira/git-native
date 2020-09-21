import React, {useContext} from 'react';
import AuthContext from '../../contexts/auth';
import { Entypo, Feather } from '@expo/vector-icons';

import { 
  Container,
  UserContainer,
  Avatar,
  TextName,
  TextContainer,
  TextLogin,
  BioContainer,
  BioText,
  IconContainer,
  IconText,
  Bold,
  Scroll,
  FollowersTitle,
  FollowersText,
  FollowersContainer,
  Follower,
  LogoutButton,
  LogoutContainer
} from './style';

const Home = () => {
  const {setLogout, user, followers, following } = useContext(AuthContext);

  const handleLogout = () => {
    setLogout();
  }

  return (
    <Container>
      <UserContainer>
        <Avatar source={{uri: user.avatar_url}} /> 
        <TextContainer>
          <TextName>{user.name}</TextName>
          <TextLogin>{user.login}</TextLogin>
        </TextContainer>
      </UserContainer>

      <BioContainer>
        <BioText>{user.bio}</BioText>
      </BioContainer>
      
      <IconContainer>
        <Entypo name="link" size={20} color="rgba(0, 0, 0, 0.6)" />
        <IconText>{user.blog}</IconText>
      </IconContainer>

      <IconContainer>
        <Feather name="users" size={18} color="rgba(0, 0, 0, 0.6)" />
        <IconText><Bold>{user.followers}</Bold> Followers -</IconText>
        <IconText><Bold>{user.following}</Bold> Following </IconText>
      </IconContainer>

      <FollowersContainer>
        <FollowersTitle>Followers</FollowersTitle>
        <Scroll>{
          followers.map(follower => (
            <Follower key={follower.id}>
              <Avatar source={{uri: follower.avatar_url}} />
              <FollowersText>{follower.login}</FollowersText>
            </Follower>
          ))  
        }</Scroll>
      </FollowersContainer>

      <FollowersContainer>
        <FollowersTitle>Following</FollowersTitle>
        <Scroll>{
          following.map(following => (
            <Follower key={following.id}>
              <Avatar source={{uri: following.avatar_url}} />
              <FollowersText>{following.login}</FollowersText>
            </Follower>
          ))  
        }</Scroll>
      </FollowersContainer>

      <LogoutContainer>
        <LogoutButton color="#fff" title='Logout' onPress={handleLogout} />
      </LogoutContainer>
    </Container>
  );
}
export default Home;