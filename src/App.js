import React, { Component } from 'react';
import logo_6 from './images/logo_6.png';
import facebook from './images/facebook-16.ico';
import twitter from './images/twitter-16.ico';
// import logo from './logo.svg';
import './App.css';
import { Menu, MenuItem, Divider } from 'material-ui';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

const mcmTheme = getMuiTheme({
  palette: {
    primary1Color: '#9C27B0',
    primary2Color: '#7B1FA2',
    primary3Color: '#B66CF8',
    accent1Color: '#4CAF50',
    accent2Color: '#8BC34A',
    textColor: '#ffef00',
    alternateTextColor: '#fff',
    secondaryTextColor: '#757575',
    canvasColor: '#53ff00',
    disabledColor: '#F3E8D2',
    borderColor: '#BDBDBD',
  },
});
const Style = {
  cardPadding: {
    paddingTop: "0px",
    paddingBottom: "0px",
    textAlign: "left",
  },
  textPadding: {
    color: "#F3E8D2",
    paddingTop: "0px",
    textAlign: "left"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact1: "get us at blah..blah..blah or email us at blah@blah.com",
      contact2: "more bleh, blah, bloh, bluh",
      mission: 'Run till you die',
      vision: 'Smell the Rice',
      feature1: 'how to be a marathon freak',
      feature2: 'how to cure marathon freakiness',
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
      <MuiThemeProvider muiTheme={getMuiTheme(mcmTheme)}>
      <div className="App">
          <div className="App-header">
            <img src={logo_6} className="App-logo" alt="logo" />
            <div className="MenuAlign">
              <Divider style={{width: "70%"}}/>
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
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="Footer">
              <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
                <CardTitle
                  title="Contact Us"
                  titleStyle={{fontSize: "18px"}}
                  style={Style.cardPadding}
                  />
                <CardText style={Style.textPadding} >
                <p>{this.state.contact1}</p>
                <Divider />
                <p>{this.state.contact2}</p>
                <Divider />
                </CardText>
              </Card>
              <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
                <CardTitle
                title="Mission"
                titleStyle={{fontSize: "18px"}}
                style={Style.cardPadding}
                />
                <CardText style={Style.textPadding}>
                <p>{this.state.mission}</p>
                </CardText>
              </Card>
              <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
                <CardTitle
                title="Vision"
                titleStyle={{fontSize: "18px"}}
                style={Style.cardPadding}
                 />
                <CardText style={Style.textPadding}>
                <p>{this.state.vision}</p>
                </CardText>
              </Card>
              <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
                <CardTitle
                title="Features"
                titleStyle={{fontSize: "18px"}}
                style={Style.cardPadding}
                />
                <CardText style={Style.textPadding}>
                <p>{this.state.feature1}</p>
                <Divider />
                <p>{this.state.feature2}</p>
                </CardText >
              </Card>
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
