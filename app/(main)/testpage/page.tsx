'use client'

import { HeroParallax } from "@/components/hero-parallax"
import { HwTopBanner } from "../learn/hw-top-banner"


const TestPage = async () => {
	return (
		<div>
			{/* <HeroParallax /> */}
			<HwTopBanner missedCIds={[30,20]} variant='casual' />
		</div>

		
	)
}

    
export default TestPage


