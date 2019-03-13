/* eslint-disable jsx-a11y/href-no-hash */

import Page from 'components/Page';
import React from 'react';
import StockPriceTable from '../components/StockPriceTable';
import StockDropdown from '../components/StockDropdown';
import { bindActionCreators } from 'redux';
import { loadStockPriceData } from '../actions/stockPriceActions';
import { connect } from 'react-redux';
import {
  Card, Col, Row
} from 'reactstrap';
import PropTypes from 'prop-types';

class StockPage extends React.Component {

  constructor(props) {
    super(props);
    this.initialStockPeriod = '1m';
    this.stockPeriods = ['1m', '3m', '6m'];
  }

  componentDidMount() {
    const { match: { params }, loadStockPriceData } = this.props;
    loadStockPriceData(params.stockquote, this.initialStockPeriod);
  }

  stockPeriodClicked = (stockPeriod) => {
    const { match: { params }, loadStockPriceData } = this.props;
    loadStockPriceData(params.stockquote, stockPeriod);
  };

  render() {
    const { stockPrices, loading } = this.props;

    return (
      <Page>
        <Row>
          <Col md={2} sm={12}>
            <StockDropdown values={this.stockPeriods}
              label={`Stock Period : ${this.props.period}`}
              dropdownItemClicked={this.stockPeriodClicked}/>
          </Col>

          <Col md={10} sm={12}>
            <Card body>
              <StockPriceTable loading={loading} stockPrices={stockPrices} />
            </Card>
          </Col>
        </Row>

      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { stockPrices, period, loading } = state.stockPriceData;
  return { stockPrices, period, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    loadStockPriceData: bindActionCreators(loadStockPriceData, dispatch),
  };
}

StockPage.propTypes = {
  loadStockPriceData: PropTypes.func.isRequired,
  stockPrices: PropTypes.array.isRequired,
  period: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
