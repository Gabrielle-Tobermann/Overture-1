import React from 'react';
import PropTypes from 'prop-types';
import PurchaseChart from '../components/PurchaseChart';
import RentalChart from '../components/RentalChart';

function FinancialReportsView({ orders, items, orderItems }) {
  return (
    <div>
      <h1 style={{ padding: '4%' }}>Financial Reports</h1>
      <div>
        <PurchaseChart
        orders={orders}
        items={items}
        orderItems={orderItems}
        />
        <RentalChart
         orders={orders}
         items={items}
         orderItems={orderItems}
         />
      </div>
    </div>
  );
}

FinancialReportsView.propTypes = {
  orders: PropTypes.array,
  items: PropTypes.array,
  orderItems: PropTypes.array
};

export default FinancialReportsView;
