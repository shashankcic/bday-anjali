import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import './styles.css';

export default function AnjaliWish() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#fe1212' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#fefefe' },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#2ffe3e' },
    ],
    leave: [{ color: '#ff8906' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#2f2aff' },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Happy', 'Birthday', 'Anjali 🎂']), 2000));
    ref.current.push(setTimeout(() => set(['Happy', 'Anjali 🎂']), 5000));
    ref.current.push(setTimeout(() => set(['Happy', 'Birthday', 'Anjali 🎂']), 8000));
  }, []);

  useEffect(() => void reset(), [reset]);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}
