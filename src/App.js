import React from 'react';
import './App.css';

import PostList from './components/PostList';
import Avatar from './assets/avatar1.jpg';
import Logo from './assets/facebook-1.png';

function App() {
  return (
    <div className="container">
      <header id="main-header">
        <img src={Logo} alt="logo"/>
          <ul>
            <li>Meu perfil</li>
            <li>
              <img className="avatar"  src={Avatar} alt="perfilAvatar"/>
            </li>
          </ul>          
      </header>
      <PostList />
    </div>
  );
}

export default App;