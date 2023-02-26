// import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { restaurants } from '../../../data';
import { useState } from 'react';
import { MyDropDown, MySpace, MyTypography } from './styled';
const items = [];
restaurants.map((restaurant, index) => {
  console.log(index);
  restaurant.address.map((address, key) => {
    console.log(address);
    return items.push({
      key: `'${key}'`,
      label: address,
    });
  });
});

function AddressDropDown() {
  const [select, setSelect] = useState(items[0].label);
  const onClick = ({ key }) => {
    items.map((item) => {
      if (item.key == key) setSelect(item.label);
    });
  };

  return (
    <MyDropDown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [select],
        onClick,
      }}
    >
      <MyTypography.Link>
        <MySpace>
          {select}
          <DownOutlined />
        </MySpace>
      </MyTypography.Link>
    </MyDropDown>
  );
}

export default AddressDropDown;
