import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import image from '../images/homebg.jpg';

const Team = (props) => (
  <Card className='imageContainer'>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardMedia
      overlay={
          <CardTitle
              title={props.team.name}
              subtitle={props.team.position}
          />}      
    >
      <img src={image} alt='teammember'/>
    </CardMedia>
    <CardText>
      {props.team.description}
    </CardText>
  </Card>
);

export default Team;
