import React, { Component } from 'react';
import Team from './Team';

class TheTeam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: {
                name: 'Olive',
                // image: '',
                position: 'IT',
                description: 'A hardworking lady who sometimes gets lazy',
            },
        };
    }

    render() {
        // const members = () => {
            // this.state.team.map((member)=>{
                return <Team team={this.state.team} />
            // });
        }
    //     return (
    //         <div> {members()} </div>
    //     );
    // }
}

export default TheTeam;
