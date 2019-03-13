/* eslint-disable jsx-a11y/href-no-hash */

import Page from 'components/Page';
import React from 'react';
import { connect } from 'react-redux';

import { Col, Row } from 'reactstrap';
import StockCard from '../components/StockCard';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.cardGradients = ['', 'top', 'left', 'right'];
  }

  stockCardClicked = (stockName) => {
    this.props.history.push(`/stock/${stockName}`);
  };

  render() {
    const { loading, stocks } = this.props;

    const stockCards = stocks.map((stock, index) => {
      const colorIndex = index % this.cardGradients.length;
      const color = this.cardGradients[colorIndex];
      const cardGradientClassName = `border-0 bg-gradient-theme${
        !!color ? '-' : ''
        }${color}`;

      return (<Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
        <StockCard stockName={stock.stockName} stockDescription={stock.stockDescription}
                   isStockDataLoading={stock.isStockDataLoading}
                   stockCardClicked={this.stockCardClicked}
                   cardGradientClassName={cardGradientClassName}/>
      </Col>);
    });
    return (
      <Page>
        <Row>
          <ClipLoader
            css={{
              display: 'block',
              margin: '0 auto'
            }}
            sizeUnit={'px'}
            size={70}
            color={'#123abc'}
            loading={loading}
          />
          {stockCards}
        </Row>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { stocks, loading } = state.stocksData;
  return { stocks, loading };
}

function mapDispatchToProps() {
  return {};
}

SearchPage.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
