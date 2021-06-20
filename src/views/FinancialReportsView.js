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
  const apItems = [];
  const apOrderItems = [];
  const apOrders = [];
  let apFinancials = 0;
  const mayItems = [];
  const mayOrderItems = [];
  const mayOrders = [];
  let mayFinancials = 0;
  const juneItems = [];
  const juneOrderItems = [];
  const juneOrders = [];
  let juneFinancials = 0;
  const julyItems = [];
  const julyOrderItems = [];
  const julyOrders = [];
  let julyFinancials = 0;
  const augItems = [];
  const augOrderItems = [];
  const augOrders = [];
  let augFinancials = 0;
  const sepItems = [];
  const sepOrderItems = [];
  const sepOrders = [];
  let sepFinancials = 0;
  const octItems = [];
  const octOrderItems = [];
  const octOrders = [];
  let octFinancials = 0;
  const novItems = [];
  const novOrderItems = [];
  const novOrders = [];
  let novFinancials = 0;
  const decItems = [];
  const decOrderItems = [];
  const decOrders = [];
  let decFinancials = 0;

  orders.forEach((order) => {
    switch (true) {
      case order.date.split('-')[1] === '01':
        janOrders.push(order);
        console.warn(janOrders);
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
          });
        });
        janFinancials = janItems.reduce((a, b) => Number(a) + Number(b), 0);
        console.warn('janFinancials', janFinancials);
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
        febFinancials = febItems.reduce((a, b) => a + b, 0);
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
        marchFinancials = marchItems.reduce((a, b) => a + b, 0);
        break;
      case order.date.split('-')[1] === '04':
        apOrders.push(order);
        orderItems.forEach((orderItem) => {
          apOrders.forEach((apOrder) => {
            if (orderItem.transactionID === apOrder.transactionID) {
              apOrderItems.push(orderItem);
            }
          });
        });
        items.forEach((item) => {
          apOrderItems.forEach((apOrderItem) => {
            if (apOrderItem.itemID === item.itemID) {
              apItems.push(item.price);
            }
          });
        });
        apFinancials = marchItems.reduce((a, b) => a + b, 0);
        break;
      case order.date.split('-')[1] === '05':
        mayOrders.push(order);
        orderItems.forEach((orderItem) => {
          mayOrders.forEach((mayOrder) => {
            if (orderItem.transactionID === mayOrder.transactionID) {
              mayOrderItems.push(orderItem);
            }
          });
        });
        items.forEach((item) => {
          mayOrderItems.forEach((mayOrderItem) => {
            if (mayOrderItem.itemID === item.itemID) {
              mayItems.push(item.price);
            }
          });
        });
        mayFinancials = marchItems.reduce((a, b) => a + b, 0);
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
          data: [Number(janFinancials), febFinancials, marchFinancials, 130, 500, 600, 300, 350, 240, 450, 450, 200],
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
