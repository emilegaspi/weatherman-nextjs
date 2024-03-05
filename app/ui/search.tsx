'use client'

import React from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const search = () => {

    /**
     * Dependency Hooks
     */

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    /**
     * Local Functions
     */

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`)

        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <div className="mt-4">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Search location"
                onChange={e => {
                    handleSearch(e.target.value)
                }}
                defaultValue={searchParams.get('query')?.toString() || ''}
            />
        </div>
    )
}

export default search