import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useLocation } from 'react-router-dom';

import { CustomHeader } from './headerStyle';
import { Button, linkStyle } from '../../shared/sharedStyles';

const Header = () => {
  const location = useLocation();
  console.log(location);

  const linkPath = location.pathname === '/add-post' ? 'posts' : 'add-post';
  const linkTitle =
    location.pathname === '/add-post' ? 'All posts' : 'Add post';

  return (
    <CustomHeader>
      <Button>
        <Link to={linkPath} css={linkStyle}>
          {linkTitle}
        </Link>
      </Button>

      <Button>Log out</Button>
    </CustomHeader>
  );
};

export default Header;
