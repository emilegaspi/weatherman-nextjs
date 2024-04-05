'use client'

import React from 'react'

import { useAppSelector } from '@/app/lib/store'
import { Location } from '@/app/lib/features/location/types'
import Link from 'next/link'

type Props = {
    locations?: Location[]
}

const LocationList = ({ locations }: Props) => {

    /**
     * Store State
     */

    const storeLocations = useAppSelector((state) => state.locations.locations)

    return (
        <div className="mt-4">
            {locations?.map(location => {
                return (
                    <Link
                        key={location.id}
                        href={`/location/${location.id}`}
                    >
                        <h3>{location.name}, {location.sys.country}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default LocationList