import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { getOrderItems } from '../helpers/data/ordersData';

function FinancialReportsView({ orders, items }) {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 320, 450, 130, 500, 600, 300, 350, 240, 450, 450, 200],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderWidth: 4
      }
    ]
  });

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderItems().then((resp) => setOrderItems(resp));
  }, []);

  console.warn(items);

  const janItems = [];
  const janOrderItems = [];
  const janOrders = [];

  orders.map((order) => {
    if (order.date.split('-')[1] === '01') {
      janOrders.push(order);
      console.warn('janOrders', janOrders);
    }
    return janOrders;
  });

  orderItems.map((orderItem) => {
    janOrders.forEach((janOrder) => {
      if (janOrder.transactionID === orderItem.transactionID) {
        janOrderItems.push(orderItem);
      }
      console.warn(janOrderItems);
      return janOrderItems;
    });
    return janOrderItems;
  });

  items.map((item) => {
    janOrderItems.forEach((janItem) => {
      if (janItem.itemID === item.itemID) {
        janItems.push(item.price);
      }
      return janItems;
    });
    console.warn('jandItems', janItems);
    return janItems;
  });

  console.warn(setChartData);

  return (
    <div>
      <h1>Financial Reports</h1>
      <div>
        <Bar data={chartData}/>
      </div>
    </div>
  );
}

FinancialReportsView.propTypes = {
  orders: PropTypes.array,
  items: PropTypes.array
};

export default FinancialReportsView;
