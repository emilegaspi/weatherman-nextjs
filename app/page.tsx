import Search from './ui/search'
import LocationList from './location/components/location-list'
import { fetchLocations } from './lib/functions'

type Props = {
	searchParams?: {
		query?: string
	}
}

export default async function Home(props: Props) {

	const query = props.searchParams?.query || ''

	/**
	 * Dependency Hooks
	 */

	// const dispatch = useAppDispatch()

	/**
	 * Effects / Subscriptions
	 */

	// useEffect(() => {
	// 	dispatch(locationActions.setLocations(['Auckland', 'Wellington', 'Christchurch']))
	// }, [query])

	const locations = await fetchLocations(query)

	return (
		<main className="flex min-h-screen flex-col p-24">
			<h1>Weatherman</h1>

			<Search />

			<LocationList locations={locations} />
		</main>
	)
}
