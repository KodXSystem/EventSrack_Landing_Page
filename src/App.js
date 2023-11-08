import logo from './logo.svg';
import './App.css';
import Header from'./Components/Header'
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import Footer from './Components/footer'
function App() {
  return (
    <div className="App">
<Header/>
<SideBar/>
<Content/>
<Footer/>
    </div>
  );
}

export default App;
