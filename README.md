# React Menu

This component can populate Menu tree recursively from flat array:

```bash
  {
    id: 1, // Id of item
    title: 'Home',
    slug: 'home', // optional
    parent: null, // null is topic, id - parent page id
    archived: false
  },
  {
    id: 2,
    title: 'About Us',
    slug: 'about-us',
    parent: 2, // this page is child of Home
    archived: false
  },
```
Component creates nested list with key of `children` recursively - this way creating nested array. 

React component takes nested array and builds set of `ul's` and `li's`.

Component allows to add/ override class names using `customClasses` prop.

Available Classes:

```bash
  {
   hasSub: 'has-sub', // li that has sub menu
   hasNoSub: 'no-sub', // li that hasnt got submenu
   subArrow: 'menu-arrow', // class name to icon span if subMenuIcon is set
   subSpan: 'sub-title', // text is wrapped with span if subMenuIcon is set. class for that
   ul: 'list', // each ul
   li: 'list-item', // each li
   a: 'list-item-link' // each a
  }
```

`subMenuIcon` prop allows to inject icon into li a which has nested list. This prop accepts string which is id of desired icon. for example `#chevron-down`;

You can also mark every level with counted class.
pass prop `markLevel` with a string ( prefix of count ).

For example:

`<MenuList markLevel={'submenu-'}>` will add class name submenu-1 to first level ul , submenu-2 to second level etc.


You can control depth of rendered list by passing prop `depth` with desired amount of levels. (`depth={2}` will populate ul and ul ul)

## Sample of Usage with full list of props:

```bash
  <MenuList list={menu} depth={3} subMenuIcon={'#down-chevron'} markLevel={'submenu-'} />
```

