import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import About from '../pages/About/About';
import Catalogue from '../pages/Catalogue/Catalogue';
import Contact from '../pages/Contact/Contact';
import StudyCases from '../pages/StudyCases/StudyCases';
import Profile from '../pages/Profile/Profile';
import TechnicalForm from '../pages/TechnicalForm/TechnicalForm';
import ResetPasswordForm from '../pages/ResetPasswordForm/ResetPasswordForm';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/studyCases' element={<StudyCases />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/technical-form/:email/' element={<TechnicalForm />} />
        <Route path='/resetpassword/:recover_token/' element={<ResetPasswordForm />} />
      </Routes>
    </main>
  );
};

export default Main;