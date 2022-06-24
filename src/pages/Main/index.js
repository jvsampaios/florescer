import React, { useState, useEffect } from 'react';
// contexto de autenticação ------------------------------------------------------
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '../../context/AuthContext';
// hook para verificar se o usuário está logado

import { useAuthentication } from '../../hooks/useAuthentication';
// ---------------------------------------------------------------------------------------
import Login from './Login';
import MenuComponent from '../../components/MenuComponent';


  
function Main() {

  // isso aqui joga pra dentro do App.js
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
// ----------------------------
  return (
    <div>
    <Login/>
    <MenuComponent/>  
    </div>
  );
}

export default Main;
