import React from 'react';
import { Table } from 'reactstrap';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const StockPriceTable = ({ stockPrices, loading }) => {
  if (loading) {
    return (<ClipLoader
      css={{
        display: 'block',
        margin: '0 auto'
      }}
      sizeUnit={'px'}
      size={70}
      color={'#123abc'}
      loading={loading}
    />)
  }
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Date</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody>
      {
        stockPrices.map((stockPrice) => {
          return (
            <tr key={stockPrice.date}>
              <td>{stockPrice.date}</td>
              <td>{stockPrice.close}</td>
            </tr>
          );
        })
      }
      </tbody>
    </Table>
  );
};

StockPriceTable.propTypes = {
  stockPrices: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default StockPriceTable;
