import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={About} />
      </div>
    </Router>
  );
}

export default App;
