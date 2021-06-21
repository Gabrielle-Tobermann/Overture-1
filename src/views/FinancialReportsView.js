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

  useEffect(() => {
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
          febFinancials = febItems.reduce((a, b) => Number(a) + Number(b), 0);
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
          marchFinancials = marchItems.reduce((a, b) => Number(a) + Number(b), 0);
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
          apFinancials = apItems.reduce((a, b) => Number(a) + Number(b), 0);
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
          mayFinancials = mayItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '06':
          juneOrders.push(order);
          orderItems.forEach((orderItem) => {
            juneOrders.forEach((juneOrder) => {
              if (orderItem.transactionID === juneOrder.transactionID) {
                juneOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            juneOrderItems.forEach((juneOrderItem) => {
              if (juneOrderItem.itemID === item.itemID) {
                juneItems.push(item.price);
              }
            });
          });
          juneFinancials = juneItems.reduce((a, b) => Number(a) + Number(b), 0);
          console.warn(juneFinancials);
          break;
        case order.date.split('-')[1] === '07':
          julyOrders.push(order);
          orderItems.forEach((orderItem) => {
            julyOrders.forEach((julyOrder) => {
              if (orderItem.transactionID === julyOrder.transactionID) {
                julyOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            julyOrderItems.forEach((julyOrderItem) => {
              if (julyOrderItem.itemID === item.itemID) {
                julyItems.push(item.price);
              }
            });
          });
          julyFinancials = julyItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '08':
          augOrders.push(order);
          orderItems.forEach((orderItem) => {
            augOrders.forEach((augOrder) => {
              if (orderItem.transactionID === augOrder.transactionID) {
                augOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            augOrderItems.forEach((augOrderItem) => {
              if (augOrderItem.itemID === item.itemID) {
                augItems.push(item.price);
              }
            });
          });
          augFinancials = augItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '09':
          sepOrders.push(order);
          orderItems.forEach((orderItem) => {
            sepOrders.forEach((sepOrder) => {
              if (orderItem.transactionID === sepOrder.transactionID) {
                sepOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            sepOrderItems.forEach((sepOrderItem) => {
              if (sepOrderItem.itemID === item.itemID) {
                sepItems.push(item.price);
              }
            });
          });
          sepFinancials = sepItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '10':
          octOrders.push(order);
          orderItems.forEach((orderItem) => {
            octOrders.forEach((octOrder) => {
              if (orderItem.transactionID === octOrder.transactionID) {
                octOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            octOrderItems.forEach((octOrderItem) => {
              if (octOrderItem.itemID === item.itemID) {
                octItems.push(item.price);
              }
            });
          });
          octFinancials = octItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '11':
          novOrders.push(order);
          orderItems.forEach((orderItem) => {
            novOrders.forEach((novOrder) => {
              if (orderItem.transactionID === novOrder.transactionID) {
                novOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            novOrderItems.forEach((novOrderItem) => {
              if (novOrderItem.itemID === item.itemID) {
                novItems.push(item.price);
              }
            });
          });
          novFinancials = novItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '12':
          decOrders.push(order);
          orderItems.forEach((orderItem) => {
            decOrders.forEach((decOrder) => {
              if (orderItem.transactionID === decOrder.transactionID) {
                decOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            decOrderItems.forEach((decOrderItem) => {
              if (decOrderItem.itemID === item.itemID) {
                decItems.push(item.price);
              }
            });
          });
          decFinancials = decItems.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        default: console.warn('no items match');
      }
    });
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Revenue',
          data: [Number(janFinancials), Number(febFinancials), Number(marchFinancials), Number(apFinancials), Number(mayFinancials), Number(juneFinancials), Number(julyFinancials), Number(augFinancials), Number(sepFinancials), Number(octFinancials), Number(novFinancials), Number(decFinancials)],
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4
        }
      ]
    });
  }, []);

  console.warn('augFinancials', augFinancials);
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
