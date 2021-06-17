import React, { useState } from 'react';
import firebase from 'firebase/app';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { createOrder, createOrderItem } from '../helpers/data/ordersData';

function OrderForm() {
  const [order, setOrder] = useState({
    fullName: '',
    email: '',
    transactionID: uuidv4(),
    insurance: 0,
    userID: firebase.auth().currentUser.uid,
    date: new Date()
  });

  const [itemInputs, setItemInputs] = useState([{
    itemID: '', id: uuidv4()
  }]);

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

  async function handleSubmit(e) {
    e.preventDefault();
    createOrder(order).then((resp) => console.warn(resp));

    Promise.all(itemInputs.map(async (itemInput) => {
      await createOrderItem(itemInput, order.transactionID).then((resp) => console.warn('orderItems response', resp));
    }));
  }

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
        <Form name="orderForm" method="post">
         <input type="hidden" name="form-name" value="orderForm"/>
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
      {/* <FormGroup>
        <Label for="amount">Payment Amount:</Label>
        <Input
        type="text"
        name="amount"
        id="orderAmount"
        value={order.amount}
        onChange={(e) => handleInputChange(e, 'order')}
        />
      </FormGroup> */}
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

export default OrderForm;
