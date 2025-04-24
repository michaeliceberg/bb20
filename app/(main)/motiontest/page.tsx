'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const MotionTestPage = () => {
  return (
	<div 
		style={{
			display: "grid", 
			placeContent: "center", 
			height: "100vh", 
			gap: "0.8rem"
		}}
	
	>
		<button className="example-button">
			click me!
		</button>
		
		hello


	</div>
  )
}


export default MotionTestPage






// <motion.div
// 			initial={{
// 				rotate: '0deg'
// 			}}
// 			animate={{
// 				rotate: '90deg'
// 			}}
// 			transition={{
// 				duration: 2,
// 				// type: 'spring',
// 				ease: 'backInOut',
// 			}}
// 			style={{
// 				width: 150, 
// 				height: 150, 
// 				background: "black",
// 			}}
// 		></motion.div>