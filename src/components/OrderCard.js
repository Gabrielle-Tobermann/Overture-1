import React, { useState } from 'react';
import {
  Card,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ButtonContainer, Ulist } from '../styles/ItemsStyle';
import { deleteOrder } from '../helpers/data/ordersData';

function OrderCard({
  fullName,
  firebaseKey,
  email,
  insurance,
  date,
  setOrders
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleButtonClick = () => {
    deleteOrder(firebaseKey).then((resp) => setOrders(resp));
  };

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
              <li>{insurance}</li>
              <li>{date}</li>
              <li>Items do a forEach with price</li>
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
  userID: PropTypes.string,
  setOrders: PropTypes.func
};

export default OrderCard;
