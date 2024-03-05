import Search from './ui/search'

type Props = {
	searchParams?: {
		query?: string
	}
}

export default function Home(props: Props) {

	const query = props.searchParams?.query || ''

	// TODO: make call to load the weather data

	return (
		<main className="flex min-h-screen flex-col p-24">
			<h1>Weatherman</h1>

			<Search />
		</main>
	)
}
