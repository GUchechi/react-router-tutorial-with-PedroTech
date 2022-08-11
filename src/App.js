import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Home} />
        <Route path="/" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
