"use client";
/** @format */


import React, { useEffect, useState } from "react";

// Example implementation of getPreviousOrders
const getPreviousOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch("./orders.json");
    const data = await response.json();
    return data.orders;
  } catch (error) {
    throw new Error("Failed to fetch previous orders");
  }
};

// Example implementation of getActiveOrders
const getActiveOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch("./orders.json");
    const data = await response.json();
    return data.orders;
  } catch (error) {
    throw new Error("Failed to fetch active orders");
  }
};

export type Order = {
  id: number;
  title: string;
  // other properties
};
const DashboardPage: React.FC = () => {
  const [previousOrders, setPreviousOrders] = useState<Order[]>([]);
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch previous orders
    getPreviousOrders()
      .then((orders) => setPreviousOrders(orders))
      .catch((error) =>
        console.error("Error fetching previous orders:", error)
      );

    // Fetch active orders
    getActiveOrders()
      .then((orders) => setActiveOrders(orders))
      .catch((error) => console.error("Error fetching active orders:", error));
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Previous Orders</h2>
      {previousOrders.length > 0 ? (
        <ul>
          {previousOrders.map((order) => (
            <li key={order.id}>{order.title}</li>
          ))}
        </ul>
      ) : (
        <p>No previous orders found.</p>
      )}

      <h2>Active Orders</h2>
      {activeOrders.length > 0 ? (
        <ul>
          {activeOrders.map((order) => (
            <li key={order.id}>{order.title}</li>
          ))}
        </ul>
      ) : (
        <p>No active orders found.</p>
      )}

      <button onClick={() => console.log("Make new order")}>
        Make New Order
      </button>
    </div>
  );
};

export default DashboardPage;
