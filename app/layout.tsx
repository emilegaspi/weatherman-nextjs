import '@/app/ui/globals.css'
import { inter } from '@/app/ui/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		template: '%s | Weatherman',
		default: 'Weatherman',
	},
	description: 'A weather app built with Next.js and Tailwind CSS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
