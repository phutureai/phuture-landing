"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 125 }) => {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setDisplay("");
    setIdx(0);
  }, [text, speed]);

  useEffect(() => {
    if (idx >= text.length) return;
    const id = setTimeout(() => {
      setDisplay((d) => d + text[idx]);
      setIdx((i) => i + 1);
    }, speed);
    return () => clearTimeout(id);
  }, [idx, text, speed]);

  return (
    <span>
      {display}
      {idx < text.length && <span className="cursor">|</span>}
    </span>
  );
};

export default Typewriter;
