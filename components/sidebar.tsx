import { cn } from '@/lib/utils'
import Link from '@/node_modules/next/link'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { SidebarItem } from './sidebar-item'

type Props = {
	className?: string
}

export const Sidebar = ({ className }: Props) => {
	return (
		<div className={cn('flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col', className)}>
			<Link href='/learn'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image src='/mascot.svg' height={40} width={40} alt='Mascot' />
					<h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>5x5</h1>
				</div>
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				<SidebarItem label='Погнали' href='/learn' iconSrc='/menu/learn.svg' />

				<SidebarItem label='Тренажёр' href='/trainer' iconSrc='/menu/trainer.svg' />
				
				<SidebarItem label='Лидеры' href='/leaderboard' iconSrc='/menu/leaderboard.svg' />

				<SidebarItem label='Прогресс' href='/progress' iconSrc='/menu/progress.svg' />

				<SidebarItem label='Магазин' href='/shop' iconSrc='/menu/shop.svg' />

			</div>
			<div className='p-4'>
				<ClerkLoading>
					<Loader className='h-5 w-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton afterSignOutUrl='/' />
				</ClerkLoaded>
			</div>
		</div>
	)
}
