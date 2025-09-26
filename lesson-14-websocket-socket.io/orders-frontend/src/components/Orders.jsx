import {useState, useEffect} from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const Orders = ()=> {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchOrders = async()=> {
            try {
                const {data} = await axios.get("http://localhost:3000/api/orders");
                setItems(data);
            }
            catch(error) {
                console.log(error.response.data.message);
            }
        }
        fetchOrders();
    }, []);

    useEffect(()=> {
        socket.on("add-order", newOrder => {
            setItems(prevItems => [...prevItems, newOrder]);
        });

        socket.on("delete-order", _id => {
            setItems(prevItems => prevItems.filter(item => item._id !== _id));
        });

        socket.on("update-order", updateOrder => {
            setItems(prevItems => {
                const copy = structuredClone(prevItems);
                const index = copy.findIndex(item => item._id === updateOrder._id);
                copy[index] = updateOrder;
                return copy;
            })
        });

        // socket.on("orderChange", event => {
        //     console.log(event);
        //     if(event.operationType === "insert") {
        //         setItems(prevItems => [...prevItems, event.data]);
        //     }
        //     if(event.operationType === "delete") {
        //         setItems(prevItems => prevItems.filter(item => item._id !== event._id));
        //     }
        //     if(event.operationType === "update"){
        //         setItems(prevItems => {
        //             const copy = structuredClone(prevItems);
        //             const index = copy.findIndex(item => item._id === event.data._id);
        //             copy[index] = event.data;
        //             return copy;
        //         })
        //     }
        // })
    }, []);

    const elements = items.map(({_id, user, items})=> {
        const products = items.map(({_id, product, count})=> <li key={_id}>
            {product.name}, price: {product.price}. Total: {product.price * count}
        </li>);

        return <li key={_id}>
            <p>{user.fullName}</p>
            <ul>
                {products}
            </ul>
        </li>
    })

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default Orders;