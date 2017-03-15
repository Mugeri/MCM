import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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

export class Header extends React.Component {

  render() {
      console.log('The props are: ', this.props);
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo_6} className="App-logo" alt="logo" />
          <div className="MenuAlign">
            <Divider style={headerStyles.divider}/>
            <Menu className="Menu"
              style={{padding: "0px 10px"}}
            >
              <MenuItem
                primaryText="Home"
                containerElement={<Link to="/" />}
                value='home'
                disabled={this.props.home}
                />
              <MenuItem
                primaryText="About"
                containerElement={<Link to="/about" />}
                value='about'
                disabled={this.props.about}
                />
              <MenuItem
                primaryText="Marathon"
                containerElement={<Link to="/marathon" />}
                value='marathon'
                disabled={this.props.marathon}
                />
              <MenuItem
                  primaryText="Gallery"
                  containerElement={<Link to="/gallery" />}
                  value='gallery'
                  disabled={this.props.gallery}
                />
              <MenuItem
                primaryText="Contact"
                containerElement={<Link to="/contact" />}
                value='contact'
                disabled={this.props.contact}
                />
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

function mapStateToProps(state) {
  return {
    home: state.header.home,
    about: state.header.about,
    marathon: state.header.marathon,
    gallery: state.header.gallery,
    contact: state.header.contact,
  };
}

export default connect(mapStateToProps)(Header);
