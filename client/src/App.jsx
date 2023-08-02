import {useState} from "react";
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'
//Contexts
import { LoggedInContext } from "../contexts/loggedInContext";
import { ClientInfoContext } from "../contexts/clientInfoContext";


function App() {
  //logged in state
  const [loggedIn, setLoggedIn] = useState(false);
  const changeLoggedInState = (boolean) => {
    setLoggedIn(boolean);
  };
  const loggedInState = {loggedIn, changeLoggedInState};

  //client info state
  const [clientInfo, setClientInfo] = useState({});
  const changeClientInfoState = (info) => {
    setClientInfo(info);
  };
  const clientInfoState = {clientInfo, changeClientInfoState};


  return (
    <>
      <NextUIProvider>
        <LoggedInContext.Provider value={{loggedInState}}>
        <ClientInfoContext.Provider value={{clientInfoState}}>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
        </ClientInfoContext.Provider>
        </LoggedInContext.Provider>
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default App