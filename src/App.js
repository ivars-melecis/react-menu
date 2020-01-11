import React, { Fragment } from 'react';
import './app.scss';
import './components/menu/menu.scss';
import MenuList from './components/menu/MenuList.jsx';
import { menu, nest } from './services/MenuService';
import SvgSprite from './components/SvgSprite';

const App = () => {
  const customMenuClasses = {
    hasSub: 'has-sub',
    hasNoSub: 'no-sub',
    subArrow: 'menu-arrow',
    subSpan: 'sub-title',
    ul: 'list',
    li: 'list-item',
    a: 'list-item-link'
  };

  return (
    <Fragment>
      <SvgSprite />
      <nav className='main-menu bar-menu'>
        <MenuList list={nest(menu)} subMenuIcon={'#down-chevron'} depth={3} customClasses={customMenuClasses} markLevel={'submenu-'} />
      </nav>
    </Fragment>
  );
};

export default App;
