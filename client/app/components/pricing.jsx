import React from 'react';
import PropTypes from 'prop-types';
import dateShape from '../../data/propShapes';
import utils from '../utils';

const CLEANING_FEE = 75;
const SERVICE_FEE = 5;
const { totalNights } = utils;


const Pricing = props => (
  <div className="pricing-div">
    <div className="price-section-div">
      <div className="price-description-div">
        <span className="price-description-span">{`${props.nightlyPrice !== undefined ? `$${props.nightlyPrice.toLocaleString()}` : ''}  x ${totalNights(props.checkInDate, props.checkOutDate) > 1 ? `${totalNights(props.checkInDate, props.checkOutDate)} nights` : `${totalNights(props.checkInDate, props.checkOutDate)} night`}`}</span>
      </div>
      <div className="total-section-price-div">
        <span className="total-section-price-span">{`$${(totalNights(props.checkInDate, props.checkOutDate) * props.nightlyPrice).toLocaleString()}`}</span>
      </div>
    </div>
    <div className="price-border" />
    <div className="price-section-div">
      <div className="price-description-div">
        <span className="price-description-span">Cleaning Fee</span>
      </div>
      <div className="total-section-price-div">
        <span className="total-section-price-span">{`$${CLEANING_FEE}`}</span>
      </div>
    </div>
    <div className="price-border" />
    <div className="price-section-div">
      <div className="price-description-div">
        <span className="price-description-span">Service Fee</span>
      </div>
      <div className="total-section-price-div">
        <span className="total-section-price-span">{`$${SERVICE_FEE}`}</span>
      </div>
    </div>
    <div className="price-border" />
    <div className="price-section-div">
      <div className="price-description-div">
        <span className="price-description-span total">Total</span>
      </div>
      <div className="total-section-price-div">
        <span className="total-section-price-span total">{`$${(totalNights(props.checkInDate, props.checkOutDate) * props.nightlyPrice) + SERVICE_FEE + CLEANING_FEE}`}</span>
      </div>
    </div>
  </div>
);

Pricing.propTypes = {
  nightlyPrice: PropTypes.number,
  checkInDate: dateShape.isRequired,
  checkOutDate: dateShape.isRequired,
};

Pricing.defaultProps = {
  nightlyPrice: undefined,
};

export default Pricing;
