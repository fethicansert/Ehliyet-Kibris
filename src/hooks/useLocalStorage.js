import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage
