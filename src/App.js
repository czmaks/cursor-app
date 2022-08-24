import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

function App() {

  const [cursorPos, setCursorPos] = useState({
    x: window.innerWidth/2,
    y: window.innerHeight/2
  });

  const [variant, setVariant] = useState('default');

  console.log(cursorPos);

  useEffect(() => {
    const mouseMove = e => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY
        });
    }
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  },[]);

  
  const variants = {
    default: {
      x: cursorPos.x - window.innerWidth/2,
      y: cursorPos.y - window.innerHeight/2
    },
    text: {
      x: cursorPos.x - window.innerWidth/2,
      y: cursorPos.y - window.innerHeight/2,
      backgroundColor: 'yellow',
      height: 150,
      width: 150,
      mixBlendMode: 'difference'
    }
  }
  
  const textEnter = () => setVariant('text');
  const textLeave = () => setVariant('default');

  return (
    <div className="container">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="header">Hello World</h1>
      <motion.div
        className="cursor"
        variants={variants}
        animate={variant}
       />
    </div>
  );
}

export default App;
