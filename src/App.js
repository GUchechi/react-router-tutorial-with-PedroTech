
import { useState } from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';

function App() {
  const [name, setName] = useState('John')
  const [number, setNumber] = useState(99);
  return (
    <div className="App">
      <About name={name} number={number} />
      <Contact  number={number}/>
    </div>
  );
}

export default App;
