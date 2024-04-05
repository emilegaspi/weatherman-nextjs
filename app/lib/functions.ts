import { FetchLocationsResponse, Location, FetchForecastResponse } from './types'

export function fetchLocations(query: string): Promise<Location[]> {
	if (!query) return Promise.resolve([])

	const url = 'http://api.openweathermap.org/data/2.5/find?&units=metric&type=like&mode=json&APPID=d14a2d48e99a8e66fa820f8612456f5d&q='
	return fetch(url + query)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('Failed to fetch locations ' + response.statusText)
		})
		.then(json => json as FetchLocationsResponse)
		.then(response => {
			return response.list
		})
}

export function fetchForecast(locationId: number): Promise<FetchForecastResponse> {
	const url = 'http://api.openweathermap.org/data/2.5/forecast?&units=metric&mode=json&appid=d14a2d48e99a8e66fa820f8612456f5d&id='
	return fetch(url + locationId)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('Failed to fetch forecast ' + response.statusText)
		})
		.then(json => json as FetchForecastResponse)
}