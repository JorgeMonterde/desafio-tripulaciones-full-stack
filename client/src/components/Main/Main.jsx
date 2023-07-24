import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Catalogue from '../pages/Catalogue/Catalogue';
import Contact from '../pages/Contact/Contact';
import News from '../pages/News/News';
import StudyCases from '../pages/StudyCases/StudyCases';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='studyCases' element={<StudyCases />} />
      </Routes>
    </main>
  );
};

export default Main;