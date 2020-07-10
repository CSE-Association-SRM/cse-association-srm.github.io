import React, { Component } from 'react';
import Home from './HomeComponenet';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvents } from '../redux/ActionCreators';
import Events from '../Components/EventComponent';
import Nav from './navigationComponent';
import ProjectComponent from '../Components/ProjectComponent';
const mapStateToProps = state => {
  return {
    events: state.events,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            path='/home'
            component={() => (
              <Home
                events={this.props.events.events}
                errMess={this.props.events.errMess}
                loading={this.props.events.loading}
              />
            )}
          />

          <Route
            exact
            path='/events'
            component={() => (
              <Events
                events={this.props.events.events}
                errMess={this.props.events.errMess}
              />
            )}
          />
          <Route exact path='/projects' component={ProjectComponent} />
          <Redirect to='/home' />
        </Switch>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
