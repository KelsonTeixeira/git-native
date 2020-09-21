import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  login: false,
  user: null,
  followers: null,
  following: null,
  setLogin: null,
  setLogout: null
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const setLogin = async (username) => {
    fetch(`https://api.github.com/users/${username}/followers`)
    .then(response => response.json())
    .then(response => {
      setFollowers(response);

      fetch(`https://api.github.com/users/${username}/following`)
      .then(response => response.json())
      .then(response => {
        setFollowing(response);

        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(response => {
          setUser(response);
        });
      });
    });
  }

  const setLogout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ login: !!user, user, setLogin, setLogout, followers, following }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;