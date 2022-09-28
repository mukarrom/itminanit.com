import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
  '#D309E1',
  '#9C1AFF',
];

function MenuItem({ i }) {
  const style = { border: `2px solid ${colors[i.id]}` };
  return (
    <motion.li
      className="li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder bg-slate-600" style={style} />
      <a href={`#${i.to}`} className="text-placeholder bg-gradient-to-r from-indigo to-blue py-2 px-6">{i.name}</a>
      {/* <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
}

export default MenuItem;
