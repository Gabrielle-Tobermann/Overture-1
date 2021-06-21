import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { createOrderAndOrderItems } from '../helpers/data/ordersData';
import { makeItemUnavailable } from '../helpers/data/itemsData';

function OrderForm({
  setOrders,
  items,
  setItems,
  setOrderItems
}) {
  const [order, setOrder] = useState({
    fullName: '',
    email: '',
    transactionID: uuidv4(),
    insurance: '0',
    userID: firebase.auth().currentUser.uid,
    date: new Date()
  });

  const [itemInputs, setItemInputs] = useState([{
    itemID: '', id: uuidv4()
  }]);

  const findItems = (inputedItems) => {
    const arrInputs = [];
    items.filter((item) => {
      inputedItems.forEach((element) => {
        if (element.itemID === item.itemID) {
          if (item.available === true) {
            makeItemUnavailable(item).then((resp) => setItems(resp));
            arrInputs.push(item);
          }
        }
        return arrInputs;
      });
      return arrInputs;
    });
  };

  const handleInputChange = (e, hookCase) => {
    switch (hookCase) {
      case 'order':
        setOrder((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
        break;
      case 'itemInputs':
        setItemInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
        break;
      default: console.warn('please select an something');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findItems(itemInputs);
    createOrderAndOrderItems(order.transactionID, itemInputs, order).then((resp) => {
      setOrders(resp.order);
      setOrderItems(resp.orderItems);
      console.warn('orders', resp.order);
      console.warn('orderItems', resp.orderItems);
      console.warn(resp);
    });
  };

  const addNewField = () => {
    setItemInputs([...itemInputs, { id: uuidv4(), itemID: '' }]);
  };

  const removeField = (id) => {
    const inputs = [...itemInputs];
    inputs.splice(inputs.findIndex((element) => element.id === id));
    setItemInputs(inputs);
  };

  const handleItemInputChange = (id, e) => {
    const newInputs = itemInputs.map((element) => {
      if (id === element.id) {
        const el = element;
        if (el[e.target.name] === 'renting') {
          el[e.target.name] = e.target.checked;
        } else {
          el[e.target.name] = e.target.value;
        }
      }
      return element;
    });
    setItemInputs(newInputs);
  };

  return (
    <div>
        <Form name="orderForm" onSubmit={handleSubmit}>
       <FormGroup>
        <Label for="fullName">Customer&apos;s Full Name:</Label>
        <Input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Enter name"
        value={order.fullName}
        onChange={(e) => handleInputChange(e, 'order')}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Customer&apos;s Email:</Label>
        <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        value={order.email}
        onChange={(e) => handleInputChange(e, 'order')}/>
      </FormGroup>
      <div>
        {
          itemInputs.map((item) => (
            <div key={item.id}>
              <FormGroup>
              <Label for="item">Item</Label>
              <Input type="text"
              name="itemID"
              id={item.id}
              placeholder="Enter item ID"
              value={item.itemID}
              onChange={(e) => handleItemInputChange(item.id, e)}
              />
              </FormGroup>
              <Button onClick={addNewField}>+</Button>
              <Button onClick={removeField}>-</Button>
            </div>
          ))
        }
      </div>
      <FormGroup>
        <Label for="insurance">Insurance Amount:</Label>
        <Input
        type="text"
        name="insurance"
        id="insurance"
        value={order.insurance}
        onChange={(e) => handleInputChange(e, 'order')}
        />
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

OrderForm.propTypes = {
  setOrders: PropTypes.func.isRequired,
  items: PropTypes.array,
  setItems: PropTypes.func,
  setOrderItems: PropTypes.func
};

export default OrderForm;
