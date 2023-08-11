import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Skills from "./components/Skills";
import { Routes,Route } from 'react-router-dom';





function App() {
  return (
      <div className='contents'>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
      
  );
}

export default App;
