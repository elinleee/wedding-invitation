// ScrollSection.tsx
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
}

function ScrollSection({ children }: ScrollSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "100px" }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollSection;
