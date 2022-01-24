import React from 'react';
import s from './Layout.module.css';

function Layout({ children }) {
  return <div className={s.root}>{children}</div>;
}

export default Layout;
