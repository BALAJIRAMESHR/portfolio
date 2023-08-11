import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ML Engineer!', 'Front-end Developer!'],
      typeSpeed: 50,
      backspeed: 50,
      backDelay: 2000,
      loop: true,
    };
    
    const typed = new Typed(el.current, options);

    // Cleanup for component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

export default TypedComponent;
