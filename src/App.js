import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './layout/Header'
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './layout/Footer'
function App() {
  return
  <>
      <Header />
      <Routes>
        <Route path="/login" element={<SideBar />}></Route>
        <Route path="/blogs" element={<Content />}></Route>
        <Route path="/myBlogs" element={<Footer />}></Route>
   </Routes>
  </>
}
export default App;
