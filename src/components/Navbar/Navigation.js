import * as React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Navigation() {
  const navItems = [
    { id: 0, to: 'home', name: 'Home' },
    { id: 1, to: 'about', name: 'About' },
    { id: 2, to: 'services', name: 'Services' },
    { id: 3, to: 'clients', name: 'Clients' },
    { id: 4, to: 'blogs', name: 'Blogs' },
    { id: 5, to: 'contact', name: 'Contact Us' },
    { id: 6, to: 'quote', name: 'Get A Quote' },
  ];
  return (
    <motion.ul className="ul" variants={variants}>
      {navItems.map((i) => (
        <MenuItem key={i.id} i={i} />
      ))}
    </motion.ul>
  );
}

export default Navigation;
