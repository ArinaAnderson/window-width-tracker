import { useState, useEffect } from 'react'
import './WindowWidthTracker.css'

function Window() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('setting up an effect...');
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <h1 className="width-info">Window width: {windowWidth}</h1>
  )
}

export default Window;
