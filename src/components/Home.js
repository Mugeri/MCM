import bg from '../images/homebg.jpg';
import { bindActionCreators } from 'redux';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import * as menuActions from '../actions/HeaderActions';
import {RaisedButton } from 'material-ui';
import React from 'react';


const homeStyles = {
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
    marginTop: "2%",
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

class Home extends React.Component {
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
        home: true,
        about: false,
        marathon: false,
        gallery: false,
        contact: false,
      };
      this.props.actions.updateMenu(menu);
  }
  render() {
    return (
      <div style={homeStyles.Main}>
        <div className="Card div" style={homeStyles.info}>
          <Card style={{height: "100%"}}>
            <CardTitle title={<h1 style={homeStyles.h1}>{this.state.mNumber}<sup style={homeStyles.sup}>th</sup>
            <a style={homeStyles.name}>{this.state.mName}</a></h1>}/>
            <CardText style={{fontSize: '24px', padding: 0}}>
              <span>Save the date</span>
              <Chip
                  backgroundColor="#fff"
                  labelStyle={{color: '#154500', fontSize: '30px'}}
                  style={homeStyles.chipStyle}
              >
                {this.state.mDate}
            </Chip>
            </CardText>
          </Card>
          <div>
            <RaisedButton label="The race" primary={true} style={{margin: "12px"}}/>

            <RaisedButton label="Awards"
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
