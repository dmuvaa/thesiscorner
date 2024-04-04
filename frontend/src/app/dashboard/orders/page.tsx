import React from 'react';

const RecentOrders = () => {
    // Dummy data for recent orders
    const orders = [
        { id: 1, product: 'Product A', price: 10.99 },
        { id: 2, product: 'Product B', price: 19.99 },
        { id: 3, product: 'Product C', price: 14.99 },
    ];

    return (
        <div className="bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            {orders.map((order) => (
                <div key={order.id} className="bg-white p-4 mb-4 shadow">
                    <p className="text-lg font-bold">{order.product}</p>
                    <p className="text-gray-500">${order.price}</p>
                </div>
            ))}
        </div>
    );
};

export default RecentOrders;