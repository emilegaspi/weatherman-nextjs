import '@/app/ui/globals.css'
import { inter } from '@/app/ui/fonts'
import type { Metadata } from 'next'

import ReduxProvider from '@/app/lib/store-provider'

export const metadata: Metadata = {
	title: {
		template: '%s | Weatherman',
		default: 'Weatherman',
	},
	description: 'A weather app built with Next.js and Tailwind CSS',
}

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
