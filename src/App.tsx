import { useState } from 'react';
import './App.css';

import Home from './Pages/Home/Home';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="App">
      {activePage === 'Home' && <Home/>}
    </div>
  );
}

export default App;
