import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orders.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders().then((resp) => resolve((resp)));
        });
    }).catch((error) => reject(error));
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

// The items included in an order are in a seperate table in firebase.
const getOrderItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

// creating new items for a particular order. Patching the transactionID of an order to keep track of which order the items belong to.
const createOrderItem = (orderItem, orderTransactionID) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orderItems.json`, { itemID: orderItem.itemID })
    .then((response) => {
      const body = { firebaseKey: response.data.name, transactionID: orderTransactionID };
      axios.patch(`${dbURL}/orderItems/${response.data.name}.json`, body)
        .then(() => {
          getOrderItems().then((resp) => resolve(resp));
        });
    }).catch((error) => reject(error));
});

// Creating an order and the orderItems table simultaneously.
// promise will need the transactionID from the order, the items inputed by user, and the rest of the order information.
const createOrderAndOrderItems = (orderTransactionID, items, orderObj) => new Promise((resolve, reject) => {
  const order = createOrder(orderObj);
  const orderItems = items.map((item) => createOrderItem(item, orderTransactionID));

  const orderItemsPromise = Promise.all(orderItems).then(([resp]) => resp);
  Promise.all([order, orderItemsPromise])
    .then(([orderResp, orderItemsResp]) => {
      resolve({ order: orderResp, orderItems: orderItemsResp });
    }).catch((error) => reject(error));
});

const deleteOrderItems = (orderItem) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orderItems/${orderItem.firebaseKey}.json`)
    .then(() => getOrderItems().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  getOrders,
  createOrder,
  deleteOrder,
  createOrderItem,
  createOrderAndOrderItems,
  getOrderItems,
  deleteOrderItems
};
