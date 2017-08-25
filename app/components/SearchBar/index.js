import React from 'react';
import Bar from './Bar';
import Input from './Input';
import Button from './Button';


class SearchBar extends React.Component {
  render() {
    return (
      <Bar>
        <Input placeholder="Search some pupies" type="text" />
        <Button> Search </ Button>
      </Bar>
    )
  }
}

export default SearchBar;
