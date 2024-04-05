import { fetchForecast } from '@/app/lib/functions'
import { Forecast } from '@/app/lib/types'
import { Metadata } from 'next'
import ForecastList from '../components/forecast-list'

export const metadata: Metadata = {
	title: 'Location',
}

type Props = {
	params: {
		id: string
	}
}

const dates: string[] = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

export default async function Location(props: Props) {

	const id = props.params.id

	const forecast = await fetchForecast(Number(id))

	return (
		<main className="flex min-h-screen flex-col p-24">
			<h1>Forecast Details:</h1>

			<ForecastList forecast={forecast.list} />
		</main>
	)
}
