import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import HomeView from '../views/Home.view';
import NotFoundView from '../views/NotFound.view';

import Header from './Header';
import Footer from './Footer';

import { } from '../store/actions/main.actions';

export default connect((s) => ({

}), {

})(
  ({

  }) => {

    return (
      <div>

        <Header />

        <div>
          <Switch>
            <Route path={'/'} render={() => <HomeView />} />

            <Route render={() => <NotFoundView />} />
          </Switch>
        </div>

        <Footer />

      </div >
    )

  }
)
