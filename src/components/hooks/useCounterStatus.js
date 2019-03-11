import {useState, useEffect} from 'react';

export function useCounterStatus(count) {
    const [isMoreThanTwo, setIsMoreThanTwo] = useState(null);

    useEffect(() => {
        if (count>2) {
            setIsMoreThanTwo(true);
        } else {
            setIsMoreThanTwo(false);
        }
    });

    return isMoreThanTwo;
}