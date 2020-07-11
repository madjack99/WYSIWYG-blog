import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { CustomHeader } from './headerStyle';
import { Button, linkStyle } from '../../shared/sharedStyles';

const Header = () => {
  return (
    <CustomHeader>
      <Button>
        <Link to='/add-post' css={linkStyle}>
          Add Post
        </Link>
      </Button>

      <Button>Log out</Button>
    </CustomHeader>
  );
};

export default Header;
