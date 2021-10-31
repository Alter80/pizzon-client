import { useEffect, useState } from "react"


const useMyOrders = () => {
    const [selectedItems, setSeletctedItems] = useState([]);

    const cartLocation = `http://localhost:5000/addOrders`;

    useEffect(() => {
        fetch(cartLocation)
            .then(res => res.json())
            .then(data => setSeletctedItems(data));

    }, []);

    return { selectedItems };

}

export default useMyOrders;