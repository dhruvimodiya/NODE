import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    
    useEffect(()=>{
        const checkSession = async()=>{
            try {
                const response = await axios.get('http://localhost:8000/check-session',{
                    withCredentials :true,
                });
                if(response.data.session){
                    console.log('session found,displaying home page');
                }else{
                    navigate('/login');
                }
            } catch (error) {
                console.error('error checking session',error)
                navigate('/login');
            }
        }
        checkSession();
    },[navigate])

    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
        // Add more products as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Available Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl">{product.name}</h2>
                        <p className="text-lg">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home; 