import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Modal, Button } from 'semantic-ui-react'

import HomeView from '../views/Home.view';
import NotFoundView from '../views/NotFound.view';

import Header from './Header';
import Footer from './Footer';

import { buyTickets, clearState } from '../store/actions/main.actions';

export default connect((s) => ({
  main: s.main
}), {
  buyTickets,
  clearState
})(
  ({
    main,
    buyTickets,
    clearState
  }) => {

    return (
      <div>

        <Header />

        <div style={{ minHeight: 'calc(100% - 80px + 1rem)' }}>
          <Switch>
            <Route exact path={'/'} render={() => <HomeView buyTickets={buyTickets} />} />

            <Route render={() => <NotFoundView />} />
          </Switch>

          {
            !main.success ?
              <Modal open={true} onClose={() => clearState()}>
                <Modal.Header>Ошибка</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <p>При отправке запроса на покупку билетов произошла ошибка. Попробуйте позже</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button positive onClick={() => clearState()}>Хорошо</Button>
                </Modal.Actions>
              </Modal>
              : null
          }

        </div>

        <Footer />

      </div >
    )

  }
)
