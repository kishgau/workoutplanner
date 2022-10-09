import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import Body from './Body'
// Should we use class based components or function based compoents?
function App() {
  return (
    <div className="App">
      <Header/>
      <Body />
      <Footer/>
    </div>

  );
}

export default App;
