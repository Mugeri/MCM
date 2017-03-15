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
        textAlign: "left",
        fontSize: "17px",
        letterSpacing: '1px',
    },
    titleStyle: {
        fontSize: "18px",
        fontWeight: "bold"
    }
}

export default class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contact1: "Below find Our Physical, Postal Adresses and our Office Numbers.\
                \nPhone: \t 0720 492592\
                ",
      contact2: "Email:\t info@mweaclassicmarathon.co.ke",
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
              titleStyle={Style.titleStyle}
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
            titleStyle={Style.titleStyle}
            style={Style.cardPadding}
            />
            <CardText style={Style.textPadding}>
            <p>{this.state.mission}</p>
            </CardText>
          </Card>
          <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
            <CardTitle
            title="Vision"
            titleStyle={Style.titleStyle}
            style={Style.cardPadding}
             />
            <CardText style={Style.textPadding}>
            <p>{this.state.vision}</p>
            </CardText>
          </Card>
          <Card className="FooterCard" containerStyle={{backgroundColor: "#154500"}}>
            <CardTitle
            title="Features"
            titleStyle={Style.titleStyle}
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
