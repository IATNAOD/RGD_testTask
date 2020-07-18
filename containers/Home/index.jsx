import React, { useState } from 'react';
import { Grid, Container, Button, Form, Header } from 'semantic-ui-react'

import FormContainer from './Form.container';
import BannerContainer from './Banner.container';

export default ({ buyTickets }) => {

  const [passengers, passengersChange] = useState([])

  const getNewPassengerId = () => passengers.length + 1;

  const newPassenger = () => ({ id: getNewPassengerId(), fss: false, snils: '', firstName: '', secondName: '', lastName: '', gender: 'other', birthDay: '', citizenship: 'russia', document: 'passport Russia', documentNumber: '', rate: 'full', notifications: false, bonusCard: false, phoneNumber: '', email: '', bonusCardNumber: '' })

  const addNewPassenger = () => passengersChange([...passengers, newPassenger()]);

  const recalculatePassengers = (passengers) => passengers.map((p, i) => ({ ...p, id: i + 1 }))

  const removeCurrentPassenger = (id) => passengersChange(recalculatePassengers(passengers.filter(p => p.id != id)));

  const changeCurrentPassenger = (id, field, value) => passengersChange(passengers.map(v => v.id == id ? { ...v, [field]: value } : v))

  const sendBuyRequest = () => {
    if (passengers.length > 0)
      buyTickets({ price: 'not set', date: new Date(), passengers })
    passengersChange([])
  }

  return (
    <Container className={'container-padding'}>
      <Grid columns={2}>
        <Grid.Column width={11}>
          <Form size={'mini'} className={'main-form'} onSubmit={() => sendBuyRequest()}>
            {passengers.length > 0 ?
              passengers.map((v, i) => <FormContainer key={i} passenger={v} removeCurrentPassenger={removeCurrentPassenger} changeCurrentPassenger={changeCurrentPassenger} />)
              : <div>
                <Header as='h1' textAlign={'center'} className={'form-no-passengers no-margin'}>Добавьте нового пассажира</Header>
                <div className="form-divider"></div>
              </div>
            }
            <Grid columns={2} className={'no-margin'}>
              <Grid.Column textAlign={'right'} className={'no-padding'}>
                <Button color='blue' className={'form-button'} type={'button'} onClick={addNewPassenger}>Добавить пассажира</Button>
              </Grid.Column>
              <Grid.Column textAlign={'left'} className={'no-padding'}>
                <Button color='red' className={'form-button'} type={'submit'} >{passengers.length > 1 ? 'Купить билет' : 'Купить билеты'}</Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Grid.Column>
        <Grid.Column width={5}>
          <BannerContainer />
        </Grid.Column>
      </Grid>
    </Container >
  )

}