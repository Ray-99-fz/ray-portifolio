import React, { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const PageTransitionComponent = ({ children, className }) => {
  const shouldReduceMotion = useReducedMotion()

  const transition = useMemo(
    () => ({
      duration: 0.7,
      ease: 'easeInOut',
    }),
    []
  )

  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      transition={transition}
    >
      {children}
    </motion.main>
  )
}

const PageTransition = memo(PageTransitionComponent)
PageTransition.displayName = 'PageTransition'

export default PageTransition
