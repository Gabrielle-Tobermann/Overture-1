import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { getOrderItems } from '../helpers/data/ordersData';

function FinancialReportsView({ orders, items }) {
  const [orderItems, setOrderItems] = useState([]);
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

  console.warn(setChartData);

  useEffect(() => {
    getOrderItems().then((resp) => setOrderItems(resp));
  }, []);

  const janItems = [];
  const janOrderItems = [];
  const janOrders = [];
  let janFinancials = 0;
  const febItems = [];
  const febOrderItems = [];
  let febFinancials = 0;
  const febOrders = [];
  const marchItems = [];
  const marchOrderItems = [];
  const marchOrders = [];
  let marchFinancials = 0;

  orders.forEach((order) => {
    switch (order.date.split('-')[1]) {
      case order.date.split('-')[1] === '01':
        janOrders.push(order);
        orderItems.forEach((orderItem) => {
          janOrders.forEach((janOrder) => {
            if (orderItem.transactionID === janOrder.transactionID) {
              janOrderItems.push(orderItem);
            }
          });
        });
        items.forEach((item) => {
          janOrderItems.forEach((janOrderItem) => {
            if (janOrderItem.itemID === item.itemID) {
              janItems.push(item.price);
            }
            janFinancials = janItems.reduce((a, b) => a + b, 0);
          });
        });
        break;
      case order.date.split('-')[1] === '02':
        febOrders.push(order);
        orderItems.forEach((orderItem) => {
          febOrders.forEach((febOrder) => {
            if (orderItem.transactionID === febOrder.transactionID) {
              febOrderItems.push(orderItem);
            }
          });
        });
        items.forEach((item) => {
          febOrderItems.forEach((febOrderItem) => {
            if (febOrderItem.itemID === item.itemID) {
              febItems.push(item.price);
            }
          });
        });
        break;
      case order.date.split('-')[1] === '03':
        marchOrders.push(order);
        orderItems.forEach((orderItem) => {
          marchOrders.forEach((marchOrder) => {
            if (orderItem.transactionID === marchOrder.transactionID) {
              marchOrderItems.push(orderItem);
            }
          });
        });
        items.forEach((item) => {
          marchOrderItems.forEach((marchOrderItem) => {
            if (marchOrderItem.itemID === item.itemID) {
              marchItems.push(item.price);
            }
          });
        });
        break;
      default: console.warn('no items match');
    }
  });

  useEffect(() => {
    setChartData({
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
  }, []);

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
