import { useState } from 'react';

import { restaurant } from '../../../data';
import * as React from 'react';
import { MyDropDown } from './styled';
function AddressDropDownList() {
  const [address, setAddress] = useState(restaurant[0].address[0]);
  const itemRender = (li) => {
    const itemChildren = (
      <span
        style={{
          fontSize: '15px',
          fontFamily: 'Open Sans',
        }}
      >
        {li.props.children}
      </span>
    );
    return React.cloneElement(li, li.props, itemChildren);
  };
  return (
    <MyDropDown
      data={restaurant[0].address}
      itemRender={itemRender}
      defaultItem={address}
      onChange={(e) => {
        return setAddress(e.target.value);
      }}
      style={{
        width: '310px',
        height: '40px',
        fontSize: '16px',
        fontFamily: 'Open Sans',
        border: 'none',
        whiteSpace: 'nowrap',
      }}
    />
  );
}

export default AddressDropDownList;
