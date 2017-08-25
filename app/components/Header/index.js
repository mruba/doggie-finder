import React from 'react';
import { FormattedMessage } from 'react-intl';

import SearchBar from 'components/SearchBar';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBar />
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
