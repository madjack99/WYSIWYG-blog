import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { CustomHeader } from './headerStyle';
import { Button } from '../../shared/sharedStyles';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  const predicate =
    pathname === '/add-post' || pathname.match(/\/post\/[\w, -]*/);

  const newPath = predicate ? '/posts' : '/add-post';
  const buttonTitle = predicate ? 'All posts' : 'Add post';

  const handleClick = () => {
    history.push(newPath);
  };

  return (
    <CustomHeader>
      <Button onClick={handleClick}>{buttonTitle}</Button>
      <Button>Log out</Button>
    </CustomHeader>
  );
};

export default Header;
