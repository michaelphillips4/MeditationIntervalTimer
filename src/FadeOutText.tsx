import { useState, useEffect } from 'react';
import './FadeOutText.css'; 

interface FadeOutTextProps {
  text: string;
  duration: number;
}

const FadeOutText = ({ text, duration }: FadeOutTextProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`fade-out-text ${isVisible ? 'visible' : 'hidden'}`}>
      {text}
    </div>
  );
};

export default FadeOutText;
