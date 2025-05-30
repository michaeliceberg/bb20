'use client'

import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { usePathname } from '@/node_modules/next/navigation'
import { Button } from './ui/button'
import { TransitionLink } from '@/utils/TransitionLink'

type Props = {
	label: string
	iconSrc: string
	href: string
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
	const pathname = usePathname()
	const active = pathname === href
	return (
		<Button variant={active ? 'sidebarOutline' : 'sidebar'} className='justify-start h-[52px]' asChild>
			{/* <Link href={href}> */}
			{/* <Link href={href}> */}
			<TransitionLink href={href}>

			
				<Image src={iconSrc} alt={label} className='mr-5' height={32} width={32} />
				{label}
			</TransitionLink>
			{/* </Link> */}

		</Button>
	)
}
