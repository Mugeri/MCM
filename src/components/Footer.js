import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Divider} from 'material-ui';

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

export default class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contact1: "get us at blah..blah..blah or email us at blah@blah.com",
      contact2: "more bleh, blah, bloh, bluh",
      mission: 'Run till you die',
      vision: 'Smell the Rice',
      feature1: 'how to be a marathon freak',
      feature2: 'how to cure marathon freakiness',
    }
  }
  render(){
    return (
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
    )
  }
}
