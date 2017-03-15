import * as menuActions from '../actions/HeaderActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import bg from '../images/homebg.jpg';
import {RaisedButton } from 'material-ui';

const marathonStyles = {
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
  name: {
    fontSize:'40px',
    fontWeight: 'lighter',
    lineHeight: '37px',
    // color: "#ffef00"
},
chipStyle: {
    textAlign: 'center',
    padding: '0 20px',
    margin: '2% auto',
}

}

class Marathon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mNumber: 8,
      mName: 'Mwea Classic Marathon',
      mDate: '22/07/17',
    }
  }
  componentDidMount() {
      const menu = {
        home: false,
        about: false,
        marathon: true,
        gallery: false,
        contact: false,
      };
      this.props.actions.updateMenu(menu);
  }
  render() {
    return (
      <div style={marathonStyles.Main}>
        <div className="Card div" style={marathonStyles.info}>
          <Card style={{height: "100%"}}>
            <CardTitle title={<h1 style={marathonStyles.h1}>{this.state.mNumber}<sup style={marathonStyles.sup}>th</sup>
            <a style={marathonStyles.name}>{this.state.mName}</a></h1>}/>
            <CardText style={{fontSize: '24px', padding: 0}}>
              <span>Save the date</span>
              <Chip
                  backgroundColor="#fff"
                  labelStyle={{color: '#154500', fontSize: '30px'}}
                  style={marathonStyles.chipStyle}
              >
                {this.state.mDate}
            </Chip>
            </CardText>
          </Card>
          <div>
            <RaisedButton label="The race" primary={true} style={{margin: "12px"}}/>

            <RaisedButton label="Mentorship"
            style={{margin: "12px"}}
            backgroundColor="#680001"
            />

            <RaisedButton label="Registration" secondary={true} style={{margin: "12px"}}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Marathon);
