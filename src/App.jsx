import { useState } from 'react';
import './App.css';
import WindowWidthTracker from './WindowWidthTracker.jsx';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggleBtn = () => {
    setToggle((prevVal) => !prevVal)
  };

  return (
    <div className='container'>
      <button className='toggle-btn' type="button" onClick={handleToggleBtn}>Toggle Window Width Tracker</button>
      {toggle && <WindowWidthTracker />}
    </div>
    
  )
}

export default App;
