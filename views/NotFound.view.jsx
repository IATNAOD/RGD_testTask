import React from 'react';
import { Link } from 'react-router-dom';

import _404 from '../img/page_not_found.png'

export default ({  }) => {

  return <div >
    <img src={_404} alt="NOT FOUND :'(" />
    <h1>Page not found</h1>
    <Link to='/'>На главную?</Link>
  </div>
};