import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';
import PropTypes from 'prop-types';

const StockDropdown = ({ values, label, dropdownItemClicked }) => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle
        caret
        color={'primary'}
        className="text-capitalize m-1">
        {label}
      </DropdownToggle>

      <DropdownMenu>
        {
          values.map((value) => {
            return (<DropdownItem key={value}
                                  onClick={dropdownItemClicked.bind(this, value)}>
              {value}
            </DropdownItem>);
          })
        }
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
};

StockDropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  dropdownItemClicked: PropTypes.func.isRequired,
};

export default StockDropdown;
