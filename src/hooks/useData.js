import { useEffect, useState } from 'react';

const useData = () => {
    const [items, setItems] = useState([]);

    const dataLocation = 'http://localhost:5000/services';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])


    return { items };
};

export default useData;