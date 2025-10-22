import React, { useState, useEffect } from 'react';

const CountUp = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // update every 50ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const App = () => {
  return (
    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
      Join the <CountUp target={1000} duration={2000} /> satisfied clients
    </div>
  );
};

export default App;
