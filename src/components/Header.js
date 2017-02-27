import React from 'react';
import logo_6 from '../images/logo_6.png';
import facebook from '../images/facebook-16.ico';
import twitter from '../images/twitter-16.ico';
import '../App.css';
import { Menu, MenuItem, Divider } from 'material-ui';

const headerStyles = {
  divider: {
    width: "73%",
    marginTop: "0px !important",
    height: "2px",
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        home: true,
        about: false,
        marathon: false,
        gallery: false,
        contact: false,
      },
    }
  }
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo_6} className="App-logo" alt="logo" />
          <div className="MenuAlign">
            <Divider style={headerStyles.divider}/>
            <Menu className="Menu"
              style={{padding: "0px 10px"}}
            >
              <MenuItem primaryText="Home" value='home' disabled={this.state.menu.home} />
              <MenuItem primaryText="About" value='about' disabled={this.state.menu.about} />
              <MenuItem primaryText="Marathon" value='marathon' disabled={this.state.menu.marathon} />
              <MenuItem primaryText="Gallery" value='gallery' disabled={this.state.menu.gallery} />
              <MenuItem primaryText="Contact" value='contact' disabled={this.state.menu.contact}/>
            </Menu>
          </div>
        </div>
        <div className="SocialBar">
          <img src={facebook} className="SocialIcon" alt="fbkLogo" />
          <img src={twitter} className="SocialIcon" alt="twitterLogo" />
        </div>
      </div>
    )
  }
}
