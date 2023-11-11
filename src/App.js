import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
