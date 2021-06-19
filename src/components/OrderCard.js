import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ButtonContainer, Ulist } from '../styles/ItemsStyle';
import { deleteOrder, deleteOrderItems, getOrderItems } from '../helpers/data/ordersData';

function OrderCard({
  fullName,
  firebaseKey,
  email,
  insurance,
  date,
  setOrders,
  transactionID,
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderItems().then((resp) => setOrderItems(resp));
  }, []);

  const handleButtonClick = () => {
    deleteOrder(firebaseKey).then((resp) => {
      setOrders(resp);
      orderItems.forEach((item) => {
        if (item.transactionID === transactionID) {
          deleteOrderItems(item).then(() => console.warn(item));
        }
      });
    });
  };

  const dateFormat = () => date.split('T')[0];

  const findOrderItems = () => {
    let itemID = '';
    const foundItems = [];
    orderItems.filter((orderItem) => {
      if (orderItem.transactionID === transactionID) {
        itemID = orderItem.itemID;
        foundItems.push(itemID);
      }
      return foundItems;
    });
    return foundItems.map((item, i) => <li key={i}>{item}</li>);
  };

  console.warn({
    fullName,
    firebaseKey,
    email,
    insurance,
    date,
    setOrders,
    transactionID
  });

  return (
    <div style={{ width: 'min-content', margin: '2%' }}>
      <Card body style={{ width: 'fit-content', border: 'solid 1px black' }}>
        <button className='cardButton' id={firebaseKey}>{fullName}</button>
        <Popover
          placement="right"
          isOpen={popoverOpen}
          target={firebaseKey}
          toggle={toggle}
          >
          <PopoverHeader>{fullName}</PopoverHeader>
          <PopoverBody>
            <Ulist>
              <li>{email}</li>
              <li>{insurance > 0 ? `insurance: $${insurance} ` : ''}</li>
              <li>{dateFormat()}</li>
              {findOrderItems()}
            </Ulist>
            <ButtonContainer>
              <Button color="dark" className="rounded-pill" onClick={handleButtonClick}>Delete</Button>
            </ButtonContainer>
          </PopoverBody>
        </Popover>
      </Card>
    </div>
  );
}

OrderCard.propTypes = {
  fullName: PropTypes.string,
  firebaseKey: PropTypes.string,
  email: PropTypes.string,
  insurance: PropTypes.string,
  date: PropTypes.string,
  setOrders: PropTypes.func,
  items: PropTypes.array,
  transactionID: PropTypes.string,
  orderItems: PropTypes.array,
  setOrderItems: PropTypes.func
};

export default OrderCard;
