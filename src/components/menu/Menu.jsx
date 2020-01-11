// Currently not in use. Will be when Menu is editable
import React, { useState, Fragment, useEffect } from 'react';
import { nest } from '../../services/MenuService';
import MenuList from './MenuList';

const Menu = props => {
  const { data = [] } = props;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const nestedMenu = nest(data);
    setMenu(nestedMenu);

    return () => {
      setMenu([]);
    };
  }, [data]);

  return (
    <Fragment>
      <nav className='main-menu bar-menu'>
        <MenuList list={menu} depth={3} subMenuIcon={'#down-chevron'} />
      </nav>
    </Fragment>
  );
};

export default Menu;
