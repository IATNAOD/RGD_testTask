import React from 'react';
import { Grid, Icon } from 'semantic-ui-react'

export default ({ }) => {

  return (
    <div className={'banner-wrap'}>
      <h2 className={'banner-header'}>Ваш выбор</h2>
      <h3 className={'banner-subheader'}>Поезда</h3>
      <Grid columns={'equal'} className={'no-margin banner-main'}>
        <Grid.Row className={'low-padding'}>
          <div style={{ display: 'inline-block', backgroundColor: 'red', borderRadius: '5px', padding: '5 10' }}>Туда</div>
          <span style={{ padding: '5 10' }}>В пути 12ч 15м</span>
        </Grid.Row>
        <Grid.Row className={'no-padding'}>
          <div>
            <Icon name='train' />
            <span>№045Я</span>
            <span style={{ padding: '0 10', fontSize: '10px' }}>ФПК</span>
          </div>
        </Grid.Row>
        <Grid.Row className={'no-padding'}>
          <span style={{ display: 'inline-block', width: '100%', color: 'silver', fontSize: '12px' }}>Иваново - С-Петер-Гл</span>
          <span style={{ display: 'inline-block', width: '100%', color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Ярославль-Главный</span>
          <span style={{ display: 'inline-block', width: '100%', color: 'silver', textAlign: 'center', fontSize: '12px' }}> <span style={{ color: 'blue', fontWeight: 'bolder' }}>20:38</span> МСК <span className="divide-vertical"></span> <span style={{ color: 'blue', fontWeight: 'bolder' }}>12.09.2019</span></span>
        </Grid.Row>
        <Grid.Row className={'no-padding'}>
          <span style={{ display: 'inline-block', width: '100%', color: 'silver', fontSize: '12px' }}><Icon name={'arrow down'} /> в пути 12ч 15м</span>
          <span style={{ display: 'inline-block', width: '100%', color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Санкт-Петербург-Главн.</span>
          <span style={{ display: 'inline-block', width: '100%', color: 'silver', textAlign: 'center', fontSize: '12px' }}> <span style={{ color: 'blue', fontWeight: 'bolder' }}>08:53</span> МСК <span className="divide-vertical"></span> <span style={{ color: 'blue', fontWeight: 'bolder' }}>13.09.2019</span></span>
        </Grid.Row>
      </Grid>
      <Grid columns={'equal'} className={'no-margin banner-footer'}>
        <Grid.Row className={'low-padding'} columns={2}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column >
            <span style={{ color: 'silver' }}>ОТ <span className={'price-span'}>2234 <Icon name='ruble sign' /></span></span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className={'no-padding'}>
          <span className={'warning'}>Важно</span>
        </Grid.Row>
        <Grid.Row className={'low-padding'}>
          <span>Указана прмиерная стоимость на одного пассажира по тарифу "Полный"! Она может отличаться от суммы после резервирования мест.<br /><br />После резервирования вы можете отказаться от оплаты</span>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column className={'no-padding'}>
            <span style={{ fontSize: '16px', fontWeight: 'bolder', color: 'black' }}>Стразование НС</span>
          </Grid.Column>
          <Grid.Column textAlign={'right'}>
            <span style={{ color: 'red' }}>150 <Icon name='ruble sign' /></span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )

}