import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Footer from '../components/Footer';
import Routes from '../helpers/routes';
import NavBar from '../components/Navbar';
import './App.scss';
import { getItems } from '../helpers/data/itemsData';
import { getOrderItems, getOrders } from '../helpers/data/ordersData';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setUser(false);
        setAdmin(true);
      } else if (authed && authed.uid !== process.env.REACT_ADMIN_UID) {
        setAdmin(false);
        setUser(true);
      } else if ((admin || admin === null) || (user || user === null)) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    getItems().then((resp) => setItems(resp));
  }, []);

  useEffect(() => {
    getOrders().then((resp) => setOrders(resp));
  }, []);

  useEffect(() => {
    getOrderItems().then((resp) => setOrderItems(resp));
  }, []);

  return (
    <div className='App'>
    <Router>
      <NavBar
      user={user}
      admin={admin}
      />
      <Routes
      user={user}
      admin={admin}
      items={items}
      setItems={setItems}
      orders={orders}
      setOrders={setOrders}
      orderItems={orderItems}
      setOrderItems={setOrderItems}
      />
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
