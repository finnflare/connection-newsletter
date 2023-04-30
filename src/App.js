import './App.css';
import Updates from "./pages/Updates";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/thanks" element={<Thanks />} />
       </Routes>
    </>
  )
}
