import * as menuActions from '../actions/HeaderActions';
import bg from '../images/homebg.jpg';
import { bindActionCreators } from 'redux';
import { Card, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {RaisedButton } from 'material-ui';

const aboutStyles = {
  Main: {
    backgroundImage: 'url(' + bg + ')',
    height: "860px",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  info: {
    opacity: "0.8",
    width: "37%",
    height: "28%",
    marginTop: "10%",
    marginLeft: "4%",
    position: "absolute",
  },
  h1: {
    fontSize:'80px',
    marginTop: '0',
    color: "#fff",

  },
  sup: {
    fontSize:'40px',
     fontWeight: 'normal',
  },
  content: {
    fontSize:'24px',
    fontWeight: 'lighter',
    lineHeight: '37px',
    padding: '14%',
},
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mContent: 'The main objective of the event is to empower the youth to enable them make their rightful share of contribution to the society.',
    }
  }
  componentDidMount() {
      const menu = {
        home: false,
        about: true,
        marathon: false,
        gallery: false,
        contact: false,
      };
      this.props.actions.updateMenu(menu);
  }
  render() {
    return (
      <div style={aboutStyles.Main}>
        <div className="Card div" style={aboutStyles.info}>
          <Card style={{height: "100%"}}>
            <CardText style={aboutStyles.content}>
              {this.state.mContent}
            </CardText>
          </Card>
          <div>
            <RaisedButton label="Marathon" primary={true} style={{margin: "12px"}}/>

            <RaisedButton label="Scholarship"
            style={{margin: "12px"}}
            backgroundColor="#680001"
            />

            <RaisedButton label="Mentorship" secondary={true} style={{margin: "12px"}}/>
          </div>
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(menuActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
