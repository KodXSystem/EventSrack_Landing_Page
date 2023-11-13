import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './layout/Header'
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './layout/Footer'

import Testimonials from '../src/components/Testimonials';
function App() {
  return
  <>
      <Header />
      <Routes>
        <Route path="/login" element={<SideBar />}></Route>
        <Route path="/blogs" element={<Content />}></Route>
        <Route path="/myBlogs" element={<Testimonials />}></Route>
        <Route path="/myBlogs" element={<Footer />}></Route>
   </Routes>
  </>
}
export default App;
