import React from 'react';
import { Link } from 'react-router-dom';
import { DateInputComponent, DateFormats } from "react-controlled-date-input";
import { Grid, Icon, Form, Checkbox, Input, Select } from 'semantic-ui-react'

export default ({
  passenger,
  removeCurrentPassenger,
  changeCurrentPassenger,

}) => {

  const options = {
    gender: [
      { key: 'o', text: 'Другое', value: 'other' },
      { key: 'm', text: 'Мужчина', value: 'male' },
      { key: 'f', text: 'Женщина', value: 'female' },
    ],
    citizenship: [
      { key: 'm', text: 'Россия', value: 'russia' },
      { key: 'o', text: 'Другое', value: 'other' },
    ],
    document: [
      { key: 'm', text: 'Паспорт РФ', value: 'passport Russia' },
      { key: 'o', text: 'Другое', value: 'other' },
    ],
    rate: [
      { key: 'm', text: 'Полный', value: 'full' },
      { key: 'o', text: 'Другой', value: 'other' },
    ]
  }

  return (
    <Grid columns={'equal'} className={'no-margin'}>
      <Grid.Row columns={2}>
        <Grid.Column verticalAlign={'middle'}>
          <span className={'form-header'}>Пассажир №{passenger.id}</span>
        </Grid.Column>
        <Grid.Column textAlign={'right'} verticalAlign={'middle'}>
          <div style={{ cursor: 'pointer' }} onClick={() => removeCurrentPassenger(passenger.id)}>
            <Icon name={'minus square'} color={'red'} />
            <span style={{ color: 'red', textDecoration: 'underline', paddingLeft: '10' }}>Удалить пассажира</span>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className={'no-padding'}>
        <div className={'form-content'}>
          <Form.Group widths={'equal'}>
            <Form.Field>
              <Checkbox label='Оформление билета по ФСС' checked={passenger.fss} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'fss', data.checked)} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths={'equal'}>
            <Form.Field >
              <label> <Link to={'/'} style={{ color: 'black', fontSize: '10px', textDecoration: 'underline' }}>СНИЛС или номер регистрации ЦСМ</Link></label>
              <Input onChange={(e, data) => changeCurrentPassenger(passenger.id, 'snils', data.value)} value={passenger.snils} />
            </Form.Field>
            <Form.Field />
            <Form.Field />
          </Form.Group>
          <Form.Group widths={'equal'}>
            <Form.Field required>
              <label className={'form-label'}>Фамилия</label>
              <Input fluid required value={passenger.lastName} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'lastName', data.value)} />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Имя</label>
              <Input fluid required value={passenger.firstName} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'firstName', data.value)} />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Отчество</label>
              <Input fluid required value={passenger.secondName} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'secondName', data.value)} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths={'equal'}>
            <Form.Field required>
              <label className={'form-label'}>Пол</label>
              <Select
                options={options.gender}
                placeholder='Не выбран'
                value={passenger.gender}
                onChange={(e, data) => changeCurrentPassenger(passenger.id, 'gender', data.value)}
              />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Дата рождения</label>
              <DateInputComponent
                onChange={(year, month, date) => changeCurrentPassenger(passenger.id, 'birthDay', `${date}.${month}.${year}`)}
                dateFormat={DateFormats.DDMMYYYY} />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Гражданство</label>
              <Select
                options={options.citizenship}
                placeholder='Не выбран'
                value={passenger.citizenship}
                onChange={(e, data) => changeCurrentPassenger(passenger.id, 'citizenship', data.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths={'equal'}>
            <Form.Field required>
              <label className={'form-label'}>Тип документа</label>
              <Select
                options={options.document}
                placeholder='Не выбран'
                value={passenger.document}
                onChange={(e, data) => changeCurrentPassenger(passenger.id, 'document', data.value)}
              />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Номер документа</label>
              <Input fluid required value={passenger.documentNumber} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'documentNumber', data.value)} />
            </Form.Field>
            <Form.Field required>
              <label className={'form-label'}>Тариф</label>
              <Select
                options={options.rate}
                placeholder='Не выбран'
                value={passenger.rate}
                onChange={(e, data) => changeCurrentPassenger(passenger.id, 'rate', data.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths={'equal'} className={'low-padding'}>
            <Form.Field>
              <Checkbox label='Согласен на получение оповещений в случааях чрезвычайных ситаций на жеезнодорожном транспорте' checked={passenger.notifications} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'notifications', data.checked)} />
            </Form.Field>
          </Form.Group>
          <span>Если вы хотите получать оповещения об изменении движения поезда в случае чрезвычайной ситуации, укажите, пожалуйста, e-mail и/или телефон пассажира.<br />Если не хотите получать оповещения - снимите галочку согласия на оповещения</span>
          <Form.Group widths={'equal'} className={'low-padding'}>
            <Form.Field>
              <label className={'form-label'}>E-mail пассажира</label>
              <Input fluid value={passenger.email} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'email', data.value)} />
            </Form.Field>
            <Form.Field>
              <label className={'form-label'}>Телефон пассажира</label>
              <Input fluid value={passenger.phoneNumber} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'phoneNumber', data.value)} />
            </Form.Field>
            <Form.Field />
          </Form.Group>
          <div className="form-divider"></div>
          <Form.Group widths={'equal'} className={'low-padding'}>
            <Form.Field>
              <Checkbox label='Указать номер бонусной, электроной, дорожной карты или делового проездного' checked={passenger.bonusCard} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'bonusCard', data.checked)} />
            </Form.Field>
          </Form.Group>
          <span>Если вы хотите указать номер бонусной, электроной, дорожной карты или делового проездного, заполните, пожалуйста, поле ниже.<br />Если не хотите указать номер бонусной, электроной, дорожной карты или делового проездного - снимите галочку на указание номера бонусной, электроной, дорожной карты или делового проездного</span>
          <Form.Group widths={'equal'} className={'low-padding'}>
            <Form.Field>
              <label className={'form-label'}>Номер карты или проездного</label>
              <Input fluid value={passenger.bonusCardNumber} onChange={(e, data) => changeCurrentPassenger(passenger.id, 'bonusCardNumber', data.value)} />
            </Form.Field>
            <Form.Field />
            <Form.Field />
          </Form.Group>
          <div className="form-divider"></div>
        </div>
      </Grid.Row>
    </Grid>
  )

}