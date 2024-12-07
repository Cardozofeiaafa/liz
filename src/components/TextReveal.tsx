import { useEffect, useState } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
}

export function TextReveal({ text, delay = 2 }: TextRevealProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <p className="whitespace-pre-line font-dancing text-lg leading-relaxed">
      {displayedText}
    </p>
  );
}
