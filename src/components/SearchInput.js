import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchInput = ({ searchValue,
                       handleSearchInputChange,
                       handleSearchInputKeyPress,
                       handleSearchButtonClick }) => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <InputGroup>
        <Input
          type="search"
          className="cr-search-form__input"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInputChange}
          onKeyPress={handleSearchInputKeyPress}
        />
        <InputGroupAddon addonType="append">
          <Button onClick={handleSearchButtonClick}><MdSearch size="20"/></Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  handleSearchInputKeyPress: PropTypes.func.isRequired,
  handleSearchButtonClick: PropTypes.func.isRequired,
};

export default SearchInput;
