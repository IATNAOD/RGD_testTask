import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css'
import './css/style.css';

import createStore from './store/createStore';

import AppLayout from './components/AppLayout';

const history = createBrowserHistory();
const { store, persistor } = createStore(history);

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>loading</div>}>
        <ConnectedRouter history={history}>
          <AppLayout />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));