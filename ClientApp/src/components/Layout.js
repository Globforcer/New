import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { userDataService } from 'services/userData'

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    }
  }
  componentDidMount() {
    userDataService().then((response) => {
      this.setState({
        userData: response.data
      });
    }); 
  }

  render () {
    return (
      <div>
        <NavMenu userName={this.state.userData} />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
