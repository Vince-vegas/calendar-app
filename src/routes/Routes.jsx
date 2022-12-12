import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CalendarPage from '../views/CalendarPage';
import NotFoundPage from '../views/NotFoundPage';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/calendar' />
        </Route>
        <Route exact path='/calendar' component={CalendarPage} />
        <Route path='/calendar/:year/:month/:date' component={CalendarPage} />

        <Route exact path='/404' component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
