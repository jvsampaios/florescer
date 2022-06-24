import React, { useEffect, useState } from 'react';

import { Normalize } from 'styled-normalize';
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useAuthentication } from './hooks/useAuthentication';
// context
import { AuthProvider } from "./context/AuthContext";
import Routes from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
    <Theme>
      <Routes/>
      <GlobalStyle />
      <Normalize />
    </Theme>
    </AuthProvider>
  );
}

export default App;
