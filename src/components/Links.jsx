import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/web', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/vidoes', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} key={url} className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 active">{text}</NavLink>
    ))}
  </div>
);