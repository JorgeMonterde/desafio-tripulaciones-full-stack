<<<<<<< HEAD
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <NextUIProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
        <Footer />
      </NextUIProvider>
    </>
  )
}

=======
import {useState} from "react";
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'
//Contexts
import { LoggedInContext } from "../contexts/loggedInContext";


function App() {
  //user projects state
  const [loggedIn, setLoggedIn] = useState(false);
  const changeLoggedInState = (boolean) => {
    setLoggedIn(boolean);
  };
  const loggedInState = {loggedIn, changeLoggedInState};

  return (
    <>
      <NextUIProvider>
        <LoggedInContext.Provider value={{loggedInState}}>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
        </LoggedInContext.Provider>
        <Footer />
      </NextUIProvider>
    </>
  )
}

>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
export default App