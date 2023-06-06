import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedName = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });
  

  return (
    <animated.div style={animationProps}>
      <h1>Sooraj Rajkumar</h1>
    </animated.div>
    
  );
};

export default AnimatedName;
