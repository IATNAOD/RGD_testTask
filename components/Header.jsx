import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Dropdown } from 'semantic-ui-react'

import logo from './../img/logo.png'

export default ({ }) => {

  const [lang, langChange] = useState('rus')

  return (
    <div style={{ borderBottom: '1px solid silver' }}>
      <Grid >
        <Grid.Row columns={3} >
          <Grid.Column textAlign={'left'} >
            <div style={{ height: '80px' }}>
              <img src={logo} alt="logo" style={{ height: '100%' }} />
            </div>
          </Grid.Column>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column textAlign={'center'}>
                  <Link to={'/'}>Link 1</Link>
                </Grid.Column>
                <Grid.Column textAlign={'center'}>
                  <Link to={'/'}>Link 2</Link>
                </Grid.Column>
                <Grid.Column textAlign={'center'}>
                  <Link to={'/'}>Link 3</Link>
                </Grid.Column>
                <Grid.Column textAlign={'center'}>
                  <Link to={'/'}>Link 4</Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
            <div>
              <div style={{ display: 'inline-block', paddingRight: '5px' }}>
                <Dropdown text={lang}>
                  <Dropdown.Menu >
                    <Dropdown.Item text='rus' onClick={(e, data) => langChange(data.text)} />
                    <Dropdown.Item text='eng' onClick={(e, data) => langChange(data.text)} />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <span style={{ cursor: 'pointer', position: 'relative', color: 'red', textDecoration: 'underline', paddingLeft: '5px', paddingRight: '5px', borderLeft: '1px solid silver', borderRight: '1px solid silver' }}>Максим Меньшенин</span>
              <span style={{ cursor: 'pointer', position: 'relative', color: 'silver', textDecoration: 'underline', paddingLeft: '5px' }}>Выйти</span>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

}