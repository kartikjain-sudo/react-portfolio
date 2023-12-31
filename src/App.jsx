import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
