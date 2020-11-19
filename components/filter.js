import React from 'react';
import Select from 'react-select';
import { CATEGORY_LIST } from '../actions';

const Filter = (props) => {

  const onChange = value => {
    props.changeCategory(value.label)
  };

  return (
    <Select 
      className="react-select-container"
      maxMenuHeight={550}
      classNamePrefix="react-select"
      onChange={onChange}
      options={CATEGORY_LIST}
      placeholder="Our Top Picks"
      isSearchable={false}
    />
  );
}

export default Filter