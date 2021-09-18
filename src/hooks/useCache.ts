import * as React from 'react'

const { useState, useEffect } = React

export const useCache = <$cache>(data, callback) : $cache => {
    const [cache, setCache] = useState(() => data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => callback(data) && setCache(data), [data])
    return cache
}