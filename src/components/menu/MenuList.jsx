import React from 'react';

/**
 * Menu List Props
 *  list - array, nested array to populate ul lis from REQUIRED
 *  subMenuIcon - string, id of svg sprite icon OPTIONAL ( will add icon to each li that has submenu)
 *  customClasses - object, lets you override class names on elements. Available classes:
 * {
 *  hasSub: 'has-sub', // li that has sub menu
 *  hasNoSub: 'no-sub', // li that hasnt got submenu
 *  subArrow: 'menu-arrow', // class name to icon span if subMenuIcon is set
 *  subSpan: 'sub-title', // text is wrapped with span if subMenuIcon is set. class for that
 *  ul: 'list', // each ul
 *  li: 'list-item', // each li
 *  a: 'list-item-link' // each a
 * }
 * markLevel = string // if present will mark level with this string and levet. Example markLevel={'submenu-'} would add class name of submenu-1 if depth is 1 and submenu-2 if depth is 2 etc.
 * <MenuList list={nest(menu)} subMenuIcon={'#down-chevron'} depth={2} customClasses={customMenuClasses} markLevel={'submenu-'} />
 */

//https://stackoverflow.com/questions/28205317/how-to-render-child-components-in-react-js-recursively
const MenuList = props => {
  const { list, depth, currDepth = 0, subMenuIcon = null, customClasses = {}, markLevel = null } = props;
  const targetDepth = depth || currDepth + 1;

  const defaultClasses = {
    hasSub: 'has-sub',
    hasNoSub: null,
    subArrow: 'menu-arrow',
    subSpan: null,
    ul: null,
    li: null,
    a: null
  };

  const classes = { ...defaultClasses, ...customClasses };

  if (markLevel) {
    const levelClasses = markLevel ? markLevel + (currDepth + 1) : null;
    classes.ul = classes.ul ? classes.ul + ' ' + levelClasses : levelClasses;
  }

  // Desired depth achieved - return
  if (currDepth === targetDepth) return null;

  const renderIcon = item => {
    return (
      <a href={item.slug} className={classes['a']}>
        <span className={classes['subArrow']}>
          <svg>
            <use xlinkHref={subMenuIcon} />
          </svg>
        </span>
        <span className={classes['subSpan']}>{item.title}</span>
      </a>
    );
  };

  return (
    <ul className={classes['ul']}>
      {list.map(item => {
        let hasChildren = item.children && item.children.length;
        let subClass = hasChildren ? classes['hasSub'] : classes['hasNoSub'];
        return (
          <li key={item.id} className={subClass}>
            {hasChildren && currDepth !== depth - 1 ? (
              renderIcon(item)
            ) : (
              <a href={item.slug} className={classes['a']}>
                {item.title}
              </a>
            )}
            {item.children && <MenuList list={item.children} currDepth={currDepth + 1} depth={depth} subMenuIcon={subMenuIcon} customClasses={customClasses} markLevel={markLevel} />}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
