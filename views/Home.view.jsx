import React from 'react';

import HomePage from '../containers/Home/index.jsx';

import { } from '../store/actions/main.actions'

export default ({
  buyTickets
}) => {

  return <HomePage buyTickets={buyTickets} />;
};