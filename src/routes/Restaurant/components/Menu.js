import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import { BoxMenu, SpaceRestaurant, TabMenu, Menu } from './styled';
import Food from './Food';
import MapRestaurants from './MapRestaurants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <BoxMenu sx={{ p: 3 }}>
          <div>{children}</div>
        </BoxMenu>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ restaurant }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BoxMenu sx={{ width: '100%' }}>
      <BoxMenu sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <TabMenu label="Không gian" {...a11yProps(0)} />
          <TabMenu label="Menu" {...a11yProps(1)} />
          <TabMenu label="Địa chỉ" {...a11yProps(2)} />
        </Tabs>
      </BoxMenu>
      <TabPanel value={value} index={0}>
        <SpaceRestaurant>
          {restaurant.space.map((img, index) => {
            return <img src={img} key={index} alt="space" />;
          })}
        </SpaceRestaurant>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Menu>
          <Food restaurant={restaurant}></Food>
        </Menu>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MapRestaurants></MapRestaurants>
      </TabPanel>
    </BoxMenu>
  );
}
