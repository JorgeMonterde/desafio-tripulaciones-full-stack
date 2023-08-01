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

export default App