import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

function RentalChart({ orders, orderItems, items }) {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Rental Revenue for 2021',
        data: [200, 320, 450, 130, 500, 600, 300, 350, 240, 450, 450, 200],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderWidth: 4
      }
    ]
  });

  const janItems = [];
  const janOrderItems = [];
  const janOrders = [];
  let janItemsPrice = [];
  let janFinancials = 0;
  const febItems = [];
  const febOrderItems = [];
  let febFinancials = 0;
  const febOrders = [];
  let febItemsPrice = [];
  const marchItems = [];
  const marchOrderItems = [];
  const marchOrders = [];
  let marchItemsPrice = [];
  let marchFinancials = 0;
  const apItems = [];
  const apOrderItems = [];
  const apOrders = [];
  let apItemsPrice = [];
  let apFinancials = 0;
  const mayItems = [];
  const mayOrderItems = [];
  const mayOrders = [];
  let mayItemsPrice = [];
  let mayFinancials = 0;
  const juneItems = [];
  const juneOrderItems = [];
  const juneOrders = [];
  let juneItemsPrice = [];
  let juneFinancials = 0;
  const julyItems = [];
  const julyOrderItems = [];
  const julyOrders = [];
  let julyItemsPrice = [];
  let julyFinancials = 0;
  const augItems = [];
  const augOrderItems = [];
  const augOrders = [];
  let augItemsPrice = [];
  let augFinancials = 0;
  const sepItems = [];
  const sepOrderItems = [];
  const sepOrders = [];
  let sepItemsPrice = [];
  let sepFinancials = 0;
  const octItems = [];
  const octOrderItems = [];
  const octOrders = [];
  let octItemsPrice = [];
  let octFinancials = 0;
  const novItems = [];
  const novOrderItems = [];
  const novOrders = [];
  let novItemsPrice = [];
  let novFinancials = 0;
  const decItems = [];
  const decOrderItems = [];
  const decOrders = [];
  let decItemsPrice = [];
  let decFinancials = 0;

  useEffect(() => {
    orders.forEach((order) => {
      switch (true) {
        case order.date.split('-')[1] === '01':
          if (janOrders.indexOf(order) === -1) {
            janOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            janOrders.forEach((janOrder) => {
              if ((orderItem.transactionID === janOrder.transactionID) && (janOrderItems.indexOf(orderItem) === -1)) {
                janOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            janOrderItems.forEach((janOrderItem) => {
              if ((janOrderItem.itemID === item.itemID) && (item.rental === true) && (janItems.indexOf(item) === -1)) {
                janItems.push(item);
              }
            });
          });
          janItemsPrice = janItems.map((item) => item.price);
          janFinancials = janItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '02':
          if (febOrders.indexOf(order) === -1) {
            febOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            febOrders.forEach((febOrder) => {
              if ((orderItem.transactionID === febOrder.transactionID) && (febOrderItems.indexOf(orderItem) === -1)) {
                febOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            febOrderItems.forEach((febOrderItem) => {
              if ((febOrderItem.itemID === item.itemID) && (item.rental === true) && (febItems.indexOf(item) === -1)) {
                febItems.push(item);
              }
            });
          });
          febItemsPrice = febItems.map((item) => item.price);
          febFinancials = febItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '03':
          if (marchOrders.indexOf(order) === -1) {
            marchOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            marchOrders.forEach((marchOrder) => {
              if ((orderItem.transactionID === marchOrder.transactionID) && (marchOrderItems.indexOf(orderItem) === -1)) {
                marchOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            marchOrderItems.forEach((marchOrderItem) => {
              if ((marchOrderItem.itemID === item.itemID) && (item.rental === true) && (marchItems.indexOf(item) === -1)) {
                marchItems.push(item);
              }
            });
          });
          marchItemsPrice = marchItems.map((item) => item.price);
          marchFinancials = marchItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '04':
          if (apOrders.indexOf(order) === -1) {
            apOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            apOrders.forEach((apOrder) => {
              if ((orderItem.transactionID === apOrder.transactionID) && (apOrderItems.indexOf(orderItem) === -1)) {
                apOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            apOrderItems.forEach((apOrderItem) => {
              if ((apOrderItem.itemID === item.itemID) && (item.rental === true) && (apItems.indexOf(item) === -1)) {
                apItems.push(item);
              }
            });
          });
          apItemsPrice = apItems.map((item) => item.price);
          apFinancials = apItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '05':
          if (mayOrders.indexOf(order) === -1) {
            mayOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            mayOrders.forEach((mayOrder) => {
              if ((orderItem.transactionID === mayOrder.transactionID) && (mayOrderItems.indexOf(orderItem) === -1)) {
                mayOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            mayOrderItems.forEach((mayOrderItem) => {
              if ((mayOrderItem.itemID === item.itemID) && (item.rental === true) && (mayItems.indexOf(item) === -1)) {
                mayItems.push(item);
              }
            });
          });
          mayItemsPrice = mayItems.map((item) => item.price);
          mayFinancials = mayItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '06':
          if (juneOrders.indexOf(order) === -1) {
            juneOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            juneOrders.forEach((juneOrder) => {
              if ((orderItem.transactionID === juneOrder.transactionID) && (juneOrderItems.indexOf(orderItem) === -1)) {
                juneOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            juneOrderItems.forEach((juneOrderItem) => {
              if ((juneOrderItem.itemID === item.itemID) && (item.rental === true) && (juneItems.indexOf(item) === -1)) {
                juneItems.push(item);
              }
            });
          });
          juneItemsPrice = juneItems.map((item) => item.price);
          juneFinancials = juneItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '07':
          if (julyOrders.indexOf(order) === -1) {
            julyOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            julyOrders.forEach((julyOrder) => {
              if ((orderItem.transactionID === julyOrder.transactionID) && (julyOrderItems.indexOf(orderItem) === -1)) {
                julyOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            julyOrderItems.forEach((julyOrderItem) => {
              if ((julyOrderItem.itemID === item.itemID) && (item.rental === true) && (julyItems.indexOf(item) === -1)) {
                julyItems.push(item);
              }
            });
          });
          julyItemsPrice = julyItems.map((item) => item.price);
          julyFinancials = julyItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '08':
          if (augOrders.indexOf(order) === -1) {
            augOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            augOrders.forEach((augOrder) => {
              if ((orderItem.transactionID === augOrder.transactionID) && (augOrderItems.indexOf(orderItem) === -1)) {
                augOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            augOrderItems.forEach((augOrderItem) => {
              if ((augOrderItem.itemID === item.itemID) && (item.rental === true) && (augItems.indexOf(item) === -1)) {
                augItems.push(item);
              }
            });
          });
          augItemsPrice = augItems.map((item) => item.price);
          augFinancials = augItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '09':
          if (sepOrders.indexOf(order) === -1) {
            sepOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            sepOrders.forEach((sepOrder) => {
              if ((orderItem.transactionID === sepOrder.transactionID) && (sepOrderItems.indexOf(orderItem) === -1)) {
                sepOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            sepOrderItems.forEach((sepOrderItem) => {
              if ((sepOrderItem.itemID === item.itemID) && (item.rental === true) && (sepItems.indexOf(item) === -1)) {
                sepItems.push(item);
              }
            });
          });
          sepItemsPrice = sepItems.map((item) => item.price);
          sepFinancials = sepItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '10':
          if (octOrders.indexOf(order) === -1) {
            octOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            octOrders.forEach((octOrder) => {
              if ((orderItem.transactionID === octOrder.transactionID) && (octOrderItems.indexOf(orderItem) === -1)) {
                octOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            octOrderItems.forEach((octOrderItem) => {
              if ((octOrderItem.itemID === item.itemID) && (item.rental === true) && (octItems.indexOf(item) === -1)) {
                octItems.push(item);
              }
            });
          });
          octItemsPrice = octItems.map((item) => item.price);
          octFinancials = octItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '11':
          if (novOrders.indexOf(order) === -1) {
            novOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            novOrders.forEach((novOrder) => {
              if ((orderItem.transactionID === novOrder.transactionID) && (novOrderItems.indexOf(orderItem) === -1)) {
                novOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            novOrderItems.forEach((novOrderItem) => {
              if ((novOrderItem.itemID === item.itemID) && (item.rental === true) && (novItems.indexOf(item) === -1)) {
                novItems.push(item);
              }
            });
          });
          novItemsPrice = novItems.map((item) => item.price);
          novFinancials = novItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        case order.date.split('-')[1] === '12':
          if (decOrders.indexOf(order) === -1) {
            decOrders.push(order);
          }
          orderItems.forEach((orderItem) => {
            decOrders.forEach((decOrder) => {
              if ((orderItem.transactionID === decOrder.transactionID) && (decOrderItems.indexOf(orderItem) === -1)) {
                decOrderItems.push(orderItem);
              }
            });
          });
          items.forEach((item) => {
            decOrderItems.forEach((decOrderItem) => {
              if ((decOrderItem.itemID === item.itemID) && (item.rental === true) && (decItems.indexOf(item) === -1)) {
                decItems.push(item);
              }
            });
          });
          decItemsPrice = decItems.map((item) => item.price);
          decFinancials = decItemsPrice.reduce((a, b) => Number(a) + Number(b), 0);
          break;
        default: console.warn('no items match');
      }
    });
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Rental Revenue for 2021',
          data: [Number(janFinancials), Number(febFinancials), Number(marchFinancials), Number(apFinancials), Number(mayFinancials), Number(juneFinancials), Number(julyFinancials), Number(augFinancials), Number(sepFinancials), Number(octFinancials), Number(novFinancials), Number(decFinancials)],
          backgroundColor: ['rgba(63, 235, 109, 0.6)'],
          borderWidth: 4
        }
      ]
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: '65%',
        height: 'auto'
      }}>
        <Bar data={chartData} options={{ responsive: true }}/>
      </div>
    </div>
  );
}

RentalChart.propTypes = {
  orders: PropTypes.array,
  items: PropTypes.array,
  orderItems: PropTypes.array
};

export default RentalChart;
