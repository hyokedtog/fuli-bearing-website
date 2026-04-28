'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    // 1.5s 后开始退出
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 1500);

    // 2.0s 后完全移除
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: phase === 'exit' ? 0 : 1,
            y: phase === 'exit' ? '-100%' : 0,
          }}
          transition={{
            opacity: { duration: 0.4, ease: 'easeInOut' },
            y: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
          }}
          style={{ pointerEvents: phase === 'exit' ? 'none' : 'auto' }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: phase === 'exit' ? 0 : 1,
              scale: phase === 'exit' ? 0.95 : 1.05,
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 1.5, ease: 'easeOut' },
            }}
          >
            <span className="text-3xl md:text-4xl font-bold text-white tracking-wider font-sans">
              FULI
            </span>
            <span className="text-xs md:text-sm font-medium text-white/60 tracking-[0.3em] uppercase">
              Machinery
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
