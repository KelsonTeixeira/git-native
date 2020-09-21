import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const TextContainer = styled.View``;

export const TextName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const TextLogin = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  opacity: 0.6;
`;

export const BioContainer = styled.View`
  background-color: #E8EAED;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const BioText = styled.Text`
  font-size: 16px;
  text-align: justify;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const IconText = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  margin-left: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  height: 130px;
`;

export const FollowersTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const FollowersContainer = styled.View`
  margin-top: 10px;
`;

export const FollowersText = styled.Text``;

export const Follower = styled.TouchableOpacity`
  margin-right: 15px;
  align-items: center;
`;

export const LogoutButton = styled.Button``;

export const LogoutContainer = styled.View`
  background-color: #2296F3;
  border-radius: 5px;
`;
