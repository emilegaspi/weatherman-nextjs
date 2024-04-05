import { Forecast } from '@/app/lib/features/location/types'

type Props = {
    forecast?: Forecast[]
}

const dates: string[] = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

export default function ForecastList({ forecast }: Props) {

    if (!forecast) {
        return <h3>No forecast available</h3>
    }

    return (
        <table className="w-full">
            <tbody>
                {forecast
                    .splice(0, 7)
                    .map((item: Forecast, index: number) => {
                        const date: string = dates[index]
                        return (
                            <tr key={item.dt}>
                                <td>{date}</td>
                                <td>{item.dt_txt}</td>
                                <td>{item.main.temp} °C</td>
                                <td>{item.weather[0].description}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}
