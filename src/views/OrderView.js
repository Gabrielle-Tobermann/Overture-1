import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import OrderCard from '../components/OrderCard';
import OrderForm from '../components/OrderForm';
import {
  ButtonSearchContainer, SearchInput, TopContainer, ViewTitle
} from '../styles/ItemsStyle';

function OrderView({ orders, setOrders }) {
  const [adding, setAdding] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleButtonClick = () => {
    setAdding(true);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <TopContainer>
        <ViewTitle>Orders</ViewTitle>
        <ButtonSearchContainer>
        <Button color="dark" style={{ fontSize: '20px', fontWeight: 'bold' }} onClick={handleButtonClick}>+</Button>
        <SearchInput placeholder='Search' value={searchValue} onChange={handleSearchChange}></SearchInput>
      </ButtonSearchContainer>
      </TopContainer>
      {adding && <OrderForm
      setOrders={setOrders}
      />}
        { searchValue === ''
          ? ''
          : orders.filter((order) => order.fullName === 'instrument' && order.fulName.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
          <OrderCard
            key={item.firebaseKey}
            fullName={item.fullName}
            email={item.email}
            firebaseKey={item.firebaseKey}
            setOrders={setOrders}
            date={item.date}
            insurance={item.insurance}
            />
          ))
        }
        { orders.map((order) => (
            <OrderCard
            key={order.firebaseKey}
            fullName={order.fullName}
            email={order.email}
            firebaseKey={order.firebaseKey}
            setOrders={setOrders}
            date={order.date}
            insurance={order.insurance}
            />
        ))
        }
    </div>
  );
}

OrderView.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func
};

export default OrderView;
