import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Home text="Hello!" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
