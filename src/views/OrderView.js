import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrderCard from '../components/OrderCard';
import OrderForm from '../components/OrderForm';
import {
  AddButton,
  ButtonSearchContainer, SearchInput, TopContainer, ViewTitle
} from '../styles/ItemsStyle';
import OrderContainer from '../styles/OrderStyle';

function OrderView({
  orders, setOrders, items, setItems, orderItems, setOrderItems
}) {
  const [adding, setAdding] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleButtonClick = () => {
    setAdding(true);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ minHeight: '88vh' }}>
      <TopContainer>
        <ViewTitle>Orders</ViewTitle>
        <ButtonSearchContainer>
        <AddButton onClick={handleButtonClick}>+</AddButton>
        <SearchInput placeholder='Search' value={searchValue} onChange={handleSearchChange}></SearchInput>
      </ButtonSearchContainer>
      </TopContainer>
      {adding && <OrderForm
      setOrders={setOrders}
      items={items}
      setItems={setItems}
      setOrderItems={setOrderItems}
      />}
        { searchValue === ''
          ? ''
          : orders.filter((order) => order.fullName.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
          <OrderCard
            key={item.firebaseKey}
            fullName={item.fullName}
            email={item.email}
            firebaseKey={item.firebaseKey}
            setOrders={setOrders}
            date={item.date}
            insurance={item.insurance}
            transactionID={item.transactionID}
            userID={item.userID}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
            />
          ))
        }
        <OrderContainer>
        { orders.map((order) => (
            <OrderCard
            key={order.firebaseKey}
            fullName={order.fullName}
            email={order.email}
            firebaseKey={order.firebaseKey}
            setOrders={setOrders}
            date={order.date}
            insurance={order.insurance}
            transactionID={order.transactionID}
            userID={order.userID}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
            />
        ))
        }
        </OrderContainer>
    </div>
  );
}

OrderView.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  items: PropTypes.array,
  setItems: PropTypes.func,
  orderItems: PropTypes.array,
  setOrderItems: PropTypes.func
};

export default OrderView;
