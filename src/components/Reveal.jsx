import React, { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const RevealComponent = ({
  children,
  className,
  y = 20,
  duration = 0.7,
  delay = 0,
  amount = 0.05,
}) => {
  const shouldReduceMotion = useReducedMotion()

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
      visible: { opacity: 1, y: 0 },
    }),
    [shouldReduceMotion, y]
  )

  const transition = useMemo(
    () => ({
      duration,
      ease: 'easeOut',
      delay,
    }),
    [delay, duration]
  )

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={transition}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

const Reveal = memo(RevealComponent)
Reveal.displayName = 'Reveal'

export default Reveal
