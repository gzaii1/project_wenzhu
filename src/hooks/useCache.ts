import * as React from 'react'

const { useRef } = React

export const useCache = <$cache>(data, callback) : $cache => {
    const cache = useRef(data)
    return callback(cache.current, data) ? (cache.current = data) : cache.current
}
