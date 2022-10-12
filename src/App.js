import './App.css';
import Header from './Header'
import Footer from './Footer';
import Workouts from './Workouts'
import Selector  from './Selector';
// Should we use class based components or function based compoents?
function App() {
  return (
    <div className="App">
      <Header/>
      <Selector />
      <Workouts />
      <Footer/>
    </div>

  );
}

export default App;
