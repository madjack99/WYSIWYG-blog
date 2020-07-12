import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CustomHeader } from './headerStyle';
import { Button } from '../../shared/sharedStyles';
import { logOut } from '../../actions/actions';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = location;

  const predicate =
    pathname === '/add-post' || pathname.match(/\/post\/[\w, -]*/);

  const newPath = predicate ? '/posts' : '/add-post';
  const buttonTitle = predicate ? 'All posts' : 'Add post';

  const handleClick = () => {
    history.push(newPath);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/login');
  };

  return (
    <CustomHeader>
      <Button onClick={handleClick}>{buttonTitle}</Button>
      <Button onClick={handleLogOut}>Log out</Button>
    </CustomHeader>
  );
};

export default Header;
