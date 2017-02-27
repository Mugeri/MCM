import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import bg from '../images/homebg.jpg';
//
const homeStyles = {
  Main: {
    backgroundImage: 'url(' + bg + ')',
    height: "860px",
    backgroundSize: "100% 100%",
  },
  info: {
    opacity: "0.8",
    width: "37%",
    height: "28%",
    marginTop: "11%",
    marginLeft: "4%",
    position: "absolute",
  },
}

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div style={homeStyles.Main}>
        <Card style={homeStyles.info}>
          <CardTitle title="8th Mwea Classic Marathon"/>
          <CardText>
            save the date
          </CardText>
        </Card>
      </div>
    );
  }
}
export default Home;
