import './App.css';
import React from 'react';
import { HookUseState } from './HookUseState';
import { Header } from './Header';
import { Slogan } from './Header';
import { Navbar } from './Navbar'
import { Footer } from './Footer';


function App() {
  return (
    <div className="app">
      <>
      <div className='headerContainer'>
        < Header />
        < Slogan />
      </div>
      < Navbar />
      < HookUseState />
      < Footer />
      </>
    </div>
  );
}

export default App;
