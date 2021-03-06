import React from 'react';
import PropTypes from 'prop-types';
/*  eslint-disable no-unused-vars  */
import css from '../../styles/styles.css';
/*  eslint-enable no-unused-vars  */

class Guests extends React.Component {
  countGuests() {
    return this.props.guests.adults + this.props.guests.children;
  }

  maxGuestReached() {
    return this.props.maxGuests <= this.countGuests();
  }

  render() {
    return (
      <div className="guests-dialog">
        <div className="guests-dialog-content">
          <div className="guests-counter-div">
            <div className="guests-counter-content">
              <div className="guests-type-label-div">
                <div className="guests-type-label-content">
                  <div className="guests-type-label-text">
                    <span>Adults</span>
                  </div>
                </div>
              </div>
              <div className="guests-controller-container">
                <div className="guests-controller-content">
                  <div className="minus-button-container">
                    <button id="minus-adults" className="guests-counter-button" disabled={this.props.guests.adults === 1} onClick={this.props.guests.adults > 1 ? () => { this.props.decrementGuests('adults'); } : null}>
                      <span className={`${this.props.guests.adults === 1 ? 'guests-counter-span-disabled' : 'guests-counter-span-active'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="guest-count-container">
                    <div className="guest-count-div">{this.props.guests.adults}</div>
                  </div>
                  <div className="plus-button-container">
                    <button id="plus-adults" className="guests-counter-button" disabled={this.maxGuestReached()} onClick={!this.maxGuestReached() ? () => { this.props.incrementGuests('adults'); } : null}>
                      <span className={`${!this.maxGuestReached() ? 'guests-counter-span-active' : 'guests-counter-span-disabled'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guests-counter-div description">
            <div className="guests-counter-content">
              <div className="guests-type-label-div">
                <div className="guests-type-label-content">
                  <div className="guests-type-label-text">
                    <span>Children</span>
                  </div>
                  <div className="guest-label-description-content">
                    <span>Ages 2 - 12</span>
                  </div>
                </div>
              </div>
              <div className="guests-controller-container">
                <div className="guests-controller-content">
                  <div className="minus-button-container">
                    <button id="minus-children" className="guests-counter-button" disabled={this.props.guests.children === 0} onClick={this.props.guests.children > 0 ? () => { this.props.decrementGuests('children'); } : null}>
                      <span className={`${this.props.guests.children === 0 ? 'guests-counter-span-disabled' : 'guests-counter-span-active'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="guest-count-container">
                    <div className="guest-count-div">{this.props.guests.children}</div>
                  </div>
                  <div className="plus-button-container">
                    <button id="plus-children" className="guests-counter-button" disabled={this.maxGuestReached()} onClick={!this.maxGuestReached() ? () => { this.props.incrementGuests('children'); } : null}>
                      <span className={`${!this.maxGuestReached() ? 'guests-counter-span-active' : 'guests-counter-span-disabled'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guests-counter-div description">
            <div className="guests-counter-content">
              <div className="guests-type-label-div">
                <div className="guests-type-label-content">
                  <div className="guests-type-label-text">
                    <span>Infants</span>
                  </div>
                  <div className="guest-label-description-content">
                    <span>Under 2</span>
                  </div>
                </div>
              </div>
              <div className="guests-controller-container">
                <div className="guests-controller-content">
                  <div className="minus-button-container">
                    <button id="minus-infants" className="guests-counter-button" disabled={this.props.guests.infants === 0} onClick={this.props.guests.infants > 0 ? () => { this.props.decrementGuests('infants'); } : null}>
                      <span className={`${this.props.guests.infants === 0 ? 'guests-counter-span-disabled' : 'guests-counter-span-active'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="guest-count-container">
                    <div className="guest-count-div">{this.props.guests.infants}</div>
                  </div>
                  <div className="plus-button-container">
                    <button id="plus-infants" className="guests-counter-button" disabled={!(this.props.guests.infants < 5)} onClick={this.props.guests.infants < 5 ? () => { this.props.incrementGuests('infants'); } : null}>
                      <span className={`${this.props.guests.infants < 5 ? 'guests-counter-span-active' : 'guests-counter-span-disabled'}`}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          className="svg-guest-counter"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guests-fine-print">
            <div className="guests-fine-print-text-container">
              <div className="guests-fine-print-text">
                <span>{`${this.props.maxGuests} ${this.props.maxGuests > 1 ? 'guests' : 'guest'}` } maximum. Infants don’t count toward the number of guests.</span>
              </div>
            </div>
            <div className="guests-close-button-container">
              <div className="white-space" />
              <div className="guests-close-button-div">
                <button
                  type="button"
                  className="guests-close-button"
                  aria-disabled="false"
                  aria-busy="false"
                  onClick={this.props.closeGuestsDialog}
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Guests.propTypes = {
  incrementGuests: PropTypes.func.isRequired,
  decrementGuests: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
  guests: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
    infants: PropTypes.number.isRequired,
  }).isRequired,
  closeGuestsDialog: PropTypes.func.isRequired,
};

export default Guests;
