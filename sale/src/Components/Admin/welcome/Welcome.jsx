import React from 'react'
import { delay, motion } from 'framer-motion'

const Welcome = () => {
  return (
    <motion.div initial={{x:1000}} animate={{x:[0,100 ,0]}}tansition={{duration:"2"}} className="justify-center items-center bg-sky-100 mt-20 text-center paragraph"> hello Admin Name welcome to you Dashboard and all the best</motion.div>
  )
}

export default Welcome