import './App.css';
import Header from './layout/Header'
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './layout/Footer'
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
