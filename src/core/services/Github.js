import React, { Component } from 'react';

import GetUsers from './GetUsers';
import GetUser from './GetUser';
import GetRepositoryUser from './GetRepositoryUser';
import GetOrganizationsUser from './GetOrganizationsUser';
import GetEventsUser from './GetEventsUser';

class Github extends Component {
    constructor(props) {
        super(props);
        this.api = props.api;
        this.userName = props.userName;
    }

    render() {
        if (this.api === 'users') return <GetUsers />
        if (this.api === 'user') return (<GetUser userName={this.userName} />)
        if (this.api === 'repositoryUser') return (<GetRepositoryUser userName={this.userName}/>)
        if (this.api === 'organizationsUser') return (<GetOrganizationsUser userName={this.userName}/>)
        if (this.api === 'eventsUser') return (<GetEventsUser userName={this.userName} />)
    }
}
export default Github;