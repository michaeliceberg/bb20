import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { ExitModal } from '@/components/modals/exit-modal';
import { HeartsModal } from '@/components/modals/hearts-modal copy';
import { PracticeModal } from '@/components/modals/practice-modal';
import { WrongAnswerModal } from '@/components/modals/wronganswer-modal';
import { RightAnswerModal } from '@/components/modals/rightanswer-modal';


const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '5x5',
	description: 'Физико-математическая школа',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={font.className}>{children}</body>
				<Toaster />
				<ExitModal />
				<WrongAnswerModal />
				<RightAnswerModal />
				<HeartsModal />	
				<PracticeModal />
			</html>
		</ClerkProvider>
	);
}
