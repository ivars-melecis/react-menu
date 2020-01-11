const menu = [
  {
    id: 1,
    title: 'Home',
    slug: 'home', // optional
    parent: null, // null is topic, id - parent page id
    archived: false
  },
  {
    id: 2,
    title: 'About Us',
    slug: 'about-us',
    parent: null,
    archived: false
  },
  {
    id: 3,
    title: 'About sub one',
    slug: 'about-sub-one',
    parent: 2,
    archived: false
  },
  {
    id: 4,
    title: 'About sub sub one',
    slug: 'about-sub-sub-one',
    parent: 3,
    archived: false
  },
  {
    id: 5,
    title: 'About sub two',
    slug: 'about-sub-two',
    parent: 2,
    arhived: false
  },
  {
    id: 6,
    title: 'About sub three',
    slug: 'about-sub-three',
    parent: 2,
    arhived: false
  },
  {
    id: 7,
    title: 'Contact',
    slug: 'contact',
    parent: null,
    arhived: false
  },
  {
    id: 8,
    title: 'Email',
    slug: 'email',
    parent: 6,
    arhived: false
  },
  {
    id: 9,
    title: 'New enquiries',
    slug: 'new-enquiries',
    parent: 7,
    arhived: false
  },
  {
    id: 13,
    title: 'upgrades',
    slug: 'upgrades',
    parent: 7,
    arhived: false
  },
  {
    id: 10,
    title: 'Location',
    slug: 'location',
    parent: 6,
    arhived: false
  },
  {
    id: 11,
    title: 'About sub sub two three',
    slug: 'about-sub-sub-two-three',
    parent: 6,
    arhived: false
  },
  {
    id: 12,
    title: 'Services',
    slug: 'services',
    parent: null,
    archived: false
  },
  {
    id: 14,
    title: 'upgrade service',
    slug: 'upgrade-services',
    parent: 13,
    arhived: false
  },
  {
    id: 15,
    title: 'upgrade package',
    slug: 'upgrade-package',
    parent: 13,
    arhived: false
  },
  {
    id: 16,
    title: 'About sub sub two three',
    slug: 'about-sub-sub-two-three',
    parent: 11,
    arhived: false
  }
];

function nest(items, p) {
  const parent = p || null; // null will match topic
  const nested = [];
  items.forEach(function(item, index) {
    if (item.parent === parent) {
      const children = nest(items, item.id);
      if (children.length) item.children = children;
      nested.push(item);
    }
  });
  return nested;
}

export { menu, nest };
