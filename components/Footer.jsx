import React from 'react';
import { Grid, Container } from 'semantic-ui-react'

export default ({ }) => {

  return (
    <div style={{ backgroundColor: '#464a53' }}>
      <Container>
        <Grid columns='equal'>
          <Grid.Row >
            <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
              <span>free call</span>
            </Grid.Column>
            <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
              <span>not free call</span>
            </Grid.Column>
            <Grid.Column textAlign={'center'} verticalAlign={'middle'}>

            </Grid.Column>
            <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
              <span>email</span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid columns={2}>
              <Grid.Column textAlign={'left'} verticalAlign={'middle'}>
                <span>text</span>
              </Grid.Column>
              <Grid.Column textAlign={'right'} verticalAlign={'middle'}>
                <span>apps</span>
              </Grid.Column>
            </Grid>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column textAlign={'left'} >
              <Grid columns='equal'>
                <Grid.Row >
                  <span>ПАССАЖИРАМ</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column textAlign={'left'}>
              <Grid columns='equal'>
                <Grid.Row >
                  <span>ГРУЗОВЫЕ ПЕРЕВОЗКИ</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column textAlign={'left'}>
              <Grid columns='equal'>
                <Grid.Row >
                  <span>О КОМПАНИИ</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column textAlign={'left'}>
              <Grid columns='equal'>
                <Grid.Row >
                  <span>КОНТАКТЫ КОМПАНИИ</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
                <Grid.Row >
                  <span>apps</span>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column textAlign={'left'}>
              <span>Права защищены</span>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column textAlign={'right'}>
              <span>Какой-то текст</span>
            </Grid.Column>
            <Grid.Column textAlign={'center'}>
              <span>соц. сети</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div >
  );

}