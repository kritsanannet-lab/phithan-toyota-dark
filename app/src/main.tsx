import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import { EASE } from './animation/variants';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* reducedMotion="user" makes every animation honour prefers-reduced-motion
        automatically (transforms are dropped, opacity fades are kept). */}
    <MotionConfig reducedMotion="user" transition={{ ease: EASE }}>
      <App />
    </MotionConfig>
  </StrictMode>,
);
