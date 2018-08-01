import React, { Component } from 'react';
import { Menu, Input} from 'semantic-ui-react'
import './UserDash.css';

class UserDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})


  render() {
    return (
      <div className="navBar">
        <Menu>
          <Menu.Item name='logo here' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='about us' active={this.state.activeItem === 'aboutUs'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='setting' active={this.state.activeItem === 'setting'} onClick={this.handleItemClick} />
            <Menu.Item name='logout' active={this.state.activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
};


export default UserDash;
