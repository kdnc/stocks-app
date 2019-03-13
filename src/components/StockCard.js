import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

class StockCard extends React.PureComponent {

  render() {

    const {
      cardGradientClassName, stockName, isStockDataLoading, stockDescription, stockCardClicked
    } = this.props;

    return (
      <Card
        inverse
        className={`border-0 ${cardGradientClassName}`}
        style={{
          height: 330,
        }}
      >
        <CardBody className="d-flex flex-column justify-content-start align-items-start overflow-auto">
          <CardTitle>{stockName}</CardTitle>
          <ClipLoader
            sizeUnit={'px'}
            size={50}
            color={'#123abc'}
            loading={isStockDataLoading}
          />
          <CardText>{stockDescription}</CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-end align-items-end">
          <Button outline color="light" onClick={stockCardClicked.bind(this, stockName)}>
            Click
          </Button>
        </CardBody>
      </Card>
    );
  }
}

StockCard.propTypes = {
  cardGradientClassName: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  isStockDataLoading: PropTypes.bool.isRequired,
  stockDescription: PropTypes.string,
  stockCardClicked: PropTypes.func.isRequired
};

export default StockCard;
